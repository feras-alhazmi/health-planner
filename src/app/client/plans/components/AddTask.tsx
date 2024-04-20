"use client";

import { Card, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "@/app/validationSchema";
import ErrorMassage from "./ErrorMassage";
import { Task } from "../task";

interface TaskForm {
  title: string;
  description: string;
}
interface Props {
  onSubmit: (data: Task) => void;
}
export default function AddTaskForm({ onSubmit }: Props) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskForm>({
    resolver: zodResolver(taskSchema),
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
          onSubmit({
            ...data,
            id: 3,
          });
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
          <button className="bg-blue text-white font-bold w-48  py-2 px-6 rounded-full">
            + Add task
          </button>
        </div>
      </div>
    </form>
  );
}
