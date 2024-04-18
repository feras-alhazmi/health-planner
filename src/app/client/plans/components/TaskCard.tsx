import { Card, Checkbox } from "@nextui-org/react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../task";

interface Props {
  ShowForm: () => void;
  tasks: Task[];
}

export default function TaskCard({ ShowForm, tasks }: Props) {
  return (
    <div className="bg-white p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Inbox</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start mr-36">
            <Checkbox defaultSelected={false} lineThrough>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-gray-600">{task.description}</p>
                <p className="text-gray-600">
                  {task.frequency} | {task.priority}
                </p>
              </div>
            </Checkbox>
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
