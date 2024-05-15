"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { PropsWithChildren, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "@/app/validationSchema";
import ErrorMassage from "./ErrorMassage";
import { Task } from "@prisma/client";
import DueDateButton from "./DueDateButton";

interface TaskForm {
  title: string;
  description: string | null;
}
interface Props {
  onSubmit: (data: TaskForm) => void;
  onDelete?: (taskID: String) => void;
  initialData?: Task;
}
export default function AddTaskForm({
  onSubmit,
  onDelete,
  initialData,
}: Props) {
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
  const selectLabels = ["Category", "Priority", "Reminder", "Frequency"];
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
        <div className="sm:flex sm:flex-col space-y-2 lg:flex-row lg:flex-wrap -mx-2 mb-4 space-x-2">
          <DueDateButton />
          {selectLabels.map((label) => (
            <div key={label} className=" col w-28">
              <ActivityDetails key={label} activity={label} />
            </div>
          ))}
        </div>
        <div className="flex justify-end ">
          {initialData && (
            <button
              type="button"
              className="bg-red-500 text-white font-bold w-fit  py-2 px-6 rounded-full"
              onClick={() => onDelete?.(initialData.task_id)}
            >
              Delete
            </button>
          )}
          <button className="bg-blue text-white mx-2 font-bold w-fit  py-2 px-6 rounded-full">
            {initialData ? "Save" : " + Add task"}
          </button>
        </div>
      </div>
    </form>
  );
}
interface PropsA {
  activity: String;
}

const ActivityDetails: React.FC<PropsA> = ({ activity }) => {
  function renderActivityInfo() {
    switch (activity) {
      case "Category":
        return (
          <>
            <Select
              label="Category"
              color="primary"
              size="sm"
              className="max-w-xl "
              selectionMode="multiple"
            >
              <SelectItem key="cardio">Cardio</SelectItem>
              <SelectItem key="weight_lifting">Weight Lifting</SelectItem>
              <SelectItem key="bodybuilding">Bodybuilding</SelectItem>
              <SelectItem key="yoga">Yoga</SelectItem>
              <SelectItem key="pilates">Pilates</SelectItem>
              <SelectItem key="aerobics">Aerobics</SelectItem>
              <SelectItem key="cycling">Cycling</SelectItem>
            </Select>
          </>
        );
      case "Priority":
        return (
          <Select
            label="Priority"
            color="primary"
            size="sm"
            className="max-w-xs "
            disabledKeys={["none"]}
          >
            <SelectItem key="none">Priority</SelectItem>
            <SelectItem key="low">Low </SelectItem>
            <SelectItem key="medium">Medium </SelectItem>
            <SelectItem key="high">High </SelectItem>
            <SelectItem key="urgent">Urgent</SelectItem>
          </Select>
        );
      case "Reminder":
        return (
          <Select
            label="Reminder"
            color="primary"
            size="sm"
            className="max-w-xs "
            selectionMode="multiple"
            disabledKeys={["none"]}
          >
            <SelectItem key="none">Before</SelectItem>
            <SelectItem key="5_min">5 min</SelectItem>
            <SelectItem key="15_min">15 min</SelectItem>
            <SelectItem key="1_hr">1 hr</SelectItem>
            <SelectItem key="1_day">1 day</SelectItem>
          </Select>
        );
      case "Frequency":
        return (
          <Select
            label="Frequency"
            color="primary"
            size="sm"
            className="max-w-xs "
            selectionMode="multiple"
            disabledKeys={["none"]}
          >
            <SelectItem key="none">Every</SelectItem>
            <SelectItem key="daily">Daily</SelectItem>
            <SelectItem key="weekly">Weekly</SelectItem>
            <SelectItem key="every_sunday"> Sun</SelectItem>
            <SelectItem key="every_monday"> Mon</SelectItem>
            <SelectItem key="every_tuesday"> Tue</SelectItem>
            <SelectItem key="every_wednesday"> Wed</SelectItem>
            <SelectItem key="every_thursday"> Thu</SelectItem>
            <SelectItem key="every_friday"> Fri</SelectItem>
            <SelectItem key="every_saturday"> Sat</SelectItem>
            <SelectItem key="monthly">Monthly</SelectItem>
          </Select>
        );
      default:
        return (
          <div>
            <h1>Activity</h1>
            <p>Details about the activity.</p>
          </div>
        );
    }
  }

  return <div>{renderActivityInfo()}</div>;
};
