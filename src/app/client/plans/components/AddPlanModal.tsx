"use client";
import { planSchema } from "@/app/validationSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMassage from "./ErrorMassage";
interface AddPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (plan: { name: string }) => void; // Added to handle form submission
}
interface PlanForm {
  name: string;
}

const AddPlanModal: React.FC<AddPlanModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PlanForm>({
    resolver: zodResolver(planSchema),
  });

  if (!isOpen) return null;

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        onClose();
      })}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 w-full flex justify-center items-center z-10"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="text-lg font-bold mb-4">Add Plan</div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="planName"
          >
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Plan name"
            className="border-b-2 border-gray-200 p-2  w-80 focus:outline-none focus:border-blue-500 transition-colors"
          />

          <ErrorMassage>{errors.name?.message}</ErrorMassage>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
          <button
            className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-2xl "
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddPlanModal;
