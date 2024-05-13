import { Button } from "@nextui-org/react";
import React from "react";

interface Props {
  label: String;
  count: Number;
  isSelected?: boolean;
  onClick: (data: String) => void;
}

const PlanCard = ({ label, count, isSelected = false, onClick }: Props) => {
  return (
    <Button
      onClick={() => onClick(label)}
      className={`flex justify-between ${
        isSelected ? "bg-lightblue" : "bg-white"
      }   rounded-md mb-2 px-2 h-10   `}
    >
      <span className="text-gray-700">{label}</span>
      <span className="text-gray-500 py-1 px-3 rounded-full text-sm">
        {/* {count.toString()} */}
      </span>
    </Button>
  );
};

export default PlanCard;
