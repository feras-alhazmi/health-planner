// components/PlansSidebar.js
"use client";
import { Card } from "@nextui-org/react";
import AddTaskForm from "./components/AddTask";
import PlansSidebar from "./components/PlanSidebar";
import TaskCard from "./components/TaskCard";
import { useEffect, useState } from "react";
import { Task } from "@prisma/client";
import { useAuthStore } from "@/core/auth/store/Auth-Store";
import PrismaServices from "@/app/api/Prisma-Services";
import axios from "axios";
const prisma = PrismaServices.instance;

export default function Plans() {
  const [showForm, setShowForm] = useState(false);
  const [update, setUpdate] = useState(false);
  const userId = useAuthStore((state) => state.userData?.userId);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      if (userId) {
        try {
          const tasksFromDb = await axios.get(
            `/api/tasks?userId=${encodeURIComponent(userId)}`
          );
          console.log(tasksFromDb);
          setTasks(tasksFromDb.data);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      }
    };

    fetchTasks();
  }, [update, userId]);

  return (
    <div>
      <Card className="flex-row m-10 ">
        <PlansSidebar />
        <div className="">
          <TaskCard
            tasks={tasks}
            ShowForm={() => setShowForm(!showForm)}
            Update={() => setUpdate(!update)}
          />
          {showForm && (
            <AddTaskForm
              onSubmit={async (data) => {
                if (userId) {
                  const newTask = { ...data, owner_id: userId };
                  await axios.post("/api/task", newTask);
                  setShowForm(!showForm);
                  setUpdate(!update);
                }
                // setTasks([...tasks, data]);
              }}
            />
          )}
        </div>
      </Card>
    </div>
  );
}
