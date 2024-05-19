import React from "react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col  p-6 ">
      <div className="text-4xl mb-4 text-gray-700">{icon}</div>
      <h3 className="text-lg font-bold whitespace-nowrap text-black mb-2">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ValueCard;
