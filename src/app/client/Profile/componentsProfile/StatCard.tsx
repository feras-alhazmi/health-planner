import React from 'react';

type StatCardProps = {
  title: string;
  value: string;
  icon: string;
};

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
      <span className="text-3xl">{icon}</span>
    </div>
  );
};

export default StatCard;
