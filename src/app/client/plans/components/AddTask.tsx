"use client";

import { Card, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "@/app/validationSchema";
import ErrorMassage from "./ErrorMassage";
import { Task } from "@prisma/client";

interface TaskForm {
  title: string;
  description: string | null;
  // priority: number;
  // reminders: number;
}
interface Props {
  onSubmit: (data: TaskForm) => void;
  initialData?: Task;
}
export default function AddTaskForm({ onSubmit, initialData }: Props) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskForm>({
    resolver: zodResolver(taskSchema),
    defaultValues: initialData
      ? { title: initialData.title, description: initialData.description }
      : {},
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const selectLabels = [
    "Category",
    "Due time",
    "Priority",
    "Reminder",
    "Frequency",
  ];
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          setIsSubmitting(true);
          onSubmit(data);
          setIsSubmitting(false);
          // router.push("/issues");
        } catch (error) {
          setIsSubmitting(false);
        }
      })}
    >
      <div className="bg-white p-8 max-w-2xl mx-auto">
        <div className="flex flex-col mb-4">
          <input
            {...register("title")}
            type="text"
            placeholder="Task name"
            className="border-b-2 border-gray-200 p-2 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <ErrorMassage>{errors.title?.message}</ErrorMassage>
          <input
            {...register("description")}
            type="text"
            placeholder="Description"
            className="border-b-2 border-gray-200 p-2 focus:outline-none focus:border-blue-500 transition-colors mt-2"
          />
          <ErrorMassage>{errors.description?.message}</ErrorMassage>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4  space-x-2">
          {selectLabels.map((label) => (
            <div key={label} className=" w-28">
              <Select
                label={label}
                color="primary"
                size="sm"
                className="max-w-xs "
              >
                <SelectItem key="">No Idea</SelectItem>
              </Select>
            </div>
          ))}
        </div>
        <div className="flex justify-end ">
          <button className="bg-blue text-white font-bold w-fit  py-2 px-6 rounded-full">
            {initialData ? "Save" : " + Add task"}
          </button>
        </div>
      </div>
    </form>
  );
}
