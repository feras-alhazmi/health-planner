"use client";
import { Card, Checkbox } from "@nextui-org/react";
import { Task } from "@prisma/client";
import axios from "axios";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import AddTaskForm from "./AddTask";
import { useState } from "react";

interface Props {
  ShowForm: () => void;
  Update: () => void;
  tasks: Task[];
}

export default function TaskCard({ ShowForm, tasks, Update }: Props) {
  const [editingTaskId, setEditingTaskId] = useState<string>("");
  return (
    <div className="bg-white py-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Inbox</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.task_id}>
            {editingTaskId === task.task_id ? (
              <AddTaskForm
                onSubmit={async (data) => {
                  await onTaskUpdate(task.task_id, data);
                  Update();
                  setEditingTaskId("");
                }}
                initialData={task}
                onDelete={async (taskId) => {
                  await deleteTask(taskId.toString());
                  Update();
                  setEditingTaskId("");
                }}
              />
            ) : (
              <div className="flex items-center justify-between mr-36 group w-full ">
                <div className="flex items-center">
                  <Checkbox
                    defaultSelected={task.is_done}
                    lineThrough
                    className="mt-5"
                    onChange={async (event) => {
                      updateTaskStatus(task.task_id, event.target.checked);
                    }}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <p className="text-gray-600">{task.description}</p>
                    <p className="text-gray-600">
                      {task.priority} | {task.priority}
                    </p>
                  </div>
                </div>
                <button
                  className=" opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 ease-in-out"
                  onClick={() => setEditingTaskId(task.task_id)}
                >
                  <AiFillEdit size={25} color="#0155A5" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={ShowForm}
        className="mt-6 text-blue flex items-center font-semibold"
      >
        {<AiOutlinePlus />}
        <span className="ml-2">Add Task</span>
      </button>
    </div>
  );
}
async function updateTaskStatus(taskId: string, isChecked: boolean) {
  try {
    const response = await axios.patch(
      `/api/task/${encodeURIComponent(taskId)}`,
      {
        is_done: isChecked,
      }
    );
  } catch (error) {
    console.error("Failed to update task:", error);
  }
}
async function deleteTask(taskId: string) {
  try {
    const response = await axios.delete(
      `/api/task/${encodeURIComponent(taskId)}`
    );
  } catch (error) {
    console.error("Failed to update task:", error);
  }
}
async function onTaskUpdate(taskId: string, data: any) {
  try {
    const response = await axios.patch(
      `/api/task/${encodeURIComponent(taskId)}`,
      data
    );
  } catch (error) {
    console.error("Failed to update task:", error);
  }
}
