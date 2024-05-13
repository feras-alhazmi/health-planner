// components/PlansSidebar.js
"use client";
import { Card } from "@nextui-org/react";
import AddTaskForm from "./components/AddTask";
import PlansSidebar from "./components/PlanSidebar";
import TaskCard from "./components/TaskCard";
import { useEffect, useState, useMemo } from "react";
import { Task } from "@prisma/client";
import { useAuthStore } from "@/core/auth/store/Auth-Store";
import PrismaServices from "@/app/api/Prisma-Services";
import { useSegement } from "@/core/auth/store/SegmentStore";
import axios from "axios";
const prisma = PrismaServices.instance;

export default function Plans() {
  const [showForm, setShowForm] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);
  const userId = useAuthStore((state) => state.userData?.userId);
  const [tasks, setTasks] = useState<Task[]>([]);
  const segment = useSegement((state) => state.currentSegment);
  const incrementUpdateCount = () => setUpdateCount((count) => count + 1);
  const plansSegment = ["Inbox", "Today", "Upcoming"];

  useEffect(() => {
    const fetchTasks = async () => {
      console.log("tasks has been fetched");
      if (userId) {
        try {
          const tasksFromDb = await axios.get(
            `/api/tasks?userId=${encodeURIComponent(userId)}`
          );
          setTasks(tasksFromDb.data);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      }
    };

    fetchTasks();
  }, [updateCount, userId]);

  const filteredTasks = useMemo(() => {
    console.log("tasks filtered");
    return tasks.filter((task) => {
      if (plansSegment.includes(segment.Id.toString())) return true;
      return task.plan_id === segment.Id;
    });
  }, [segment, tasks]);

  return (
    <div>
      <Card className="flex-row m-10 ">
        <PlansSidebar />
        <div className="">
          <TaskCard
            tasks={filteredTasks}
            ShowForm={() => setShowForm(!showForm)}
            Update={() => incrementUpdateCount()}
          />
          {showForm && (
            <AddTaskForm
              onSubmit={async (data) => {
                if (userId) {
                  var newTask = {};
                  if (plansSegment.includes(segment.Id.toString())) {
                    newTask = { ...data, owner_id: userId };
                  } else {
                    newTask = {
                      ...data,
                      owner_id: userId,
                      plan_id: segment.Id,
                    };
                  }
                  await axios.post("/api/task", newTask);
                  incrementUpdateCount();
                  setShowForm(!showForm);
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
