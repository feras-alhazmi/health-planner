// MedicationTable.tsx
import React from 'react';

// Define the status types to ensure correct indexing
export type StatusKey = 'Active' | 'Discontinued' | 'On Hold';

// Define the shape of medication data
type Medication = {
  name: string;
  status: StatusKey;
  dosage: string;
  frequency: string;
  prescribingPhysician: string;
  startDate: string;
  endDate: string;
};

// Define the shape of the component's props
type MedicationTableProps = {
  medications: Medication[];
};

const MedicationTable: React.FC<MedicationTableProps> = ({ medications }) => {
  // Map status keys to corresponding style classes
  const statusStyles: Record<StatusKey, string> = {
    'Active': 'bg-green-100 text-green-800',
    'Discontinued': 'bg-red-100 text-red-800',
    'On Hold': 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Medication name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Dosage
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Frequency
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Prescribing Physician
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Start Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              End Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {medications.map((medication, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                {medication.name}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap ${statusStyles[medication.status]}`}>
                {medication.status}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {medication.dosage}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {medication.frequency}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {medication.prescribingPhysician}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {medication.startDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {medication.endDate || '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicationTable;
