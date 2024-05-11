import { Measurements } from '@prisma/client';
import React from 'react';

type StatCardProps = {
  measurment: Measurements
};

const StatCard: React.FC<StatCardProps> = ({ measurment }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{measurment.name}</p>
        <p className="text-lg font-semibold">{measurment.measurementValue + measurment.measurementUnit}</p>
      </div>
      <span className="text-3xl">{measurment.icon}</span>
    </div>
  );
};

export default StatCard;
