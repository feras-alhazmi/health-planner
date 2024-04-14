// MedicalHistory.tsx
import React from 'react';
import { FaNotesMedical } from 'react-icons/fa';

type MedicalHistoryEntry = {
  condition: string;
  details: string;
};

type MedicalHistoryProps = {
  entries: MedicalHistoryEntry[];
};

const MedicalHistory: React.FC<MedicalHistoryProps> = ({ entries }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul>
        {entries.map((entry, index) => (
          <li key={index} className="px-4 py-4 flex items-center space-x-4">
            <FaNotesMedical className="h-6 w-6 text-gray-400" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">Chronic disease</span>
              <span className="text-sm text-gray-500">{entry.details}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalHistory;
