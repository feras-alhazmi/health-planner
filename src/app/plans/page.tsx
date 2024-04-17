// components/PlansSidebar.js
"use client";
import { Card } from "@nextui-org/react";
import AddTaskForm from "./components/AddTask";
import PlansSidebar from "./components/PlanSidebar";
import TaskCard from "./components/TaskCard";
import { useState } from "react";
import { Task } from "./task";
import Header from "./components/heasder";

export default function Plans() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Take Medication",
      description: "Take prescribed medication [Medication Name] at [Time]",
      frequency: "everyday",
      priority: "1 priority",
    },
    // ... other tasks
  ]);
  return (
    <div>
      <Header />
      <Card className="flex-row">
        <PlansSidebar />
        <div className="">
          <TaskCard tasks={tasks} ShowForm={() => setShowForm(!showForm)} />
          {showForm && (
            <AddTaskForm
              onSubmit={(data) => {
                setTasks([...tasks, data]);
                setShowForm(!showForm);
              }}
            />
          )}
        </div>
      </Card>
    </div>
  );
}
