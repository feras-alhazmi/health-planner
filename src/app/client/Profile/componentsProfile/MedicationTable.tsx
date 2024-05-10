// MedicationTable.tsx
import { Avatar, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import React, { useEffect, useState } from 'react';
import { Medications, Status } from '@prisma/client';

// Define the status types to ensure correct indexing
export type StatusKey = 'Active' | 'Discontinued' | 'On Hold';

// Define the shape of medication data
// type Medication = {
//   name: string;
//   status: string;
//   dosage: string;
//   frequency: string;
//   prescribingPhysician: string;
//   startDate: Date;
//   endDate: Date;
// };
let statusColor: StatusKey;

// Define the shape of the component's props
type MedicationTableProps = {
  medications: Promise<Medications[]>;
};

const MedicationTable: React.FC<MedicationTableProps> = ({ medications }) => {
  // Map status keys to corresponding style classes
  const statusStyles: Record<StatusKey, string> = {
    'Active': 'bg-green-100 text-green-800',
    'Discontinued': 'bg-red-100 text-red-800',
    'On Hold': 'bg-yellow-100 text-yellow-800',
  };

  const [medicationsTemp, setDiseases] = useState<Medications[]>([]);

  useEffect(() => {
    medications.then(data => {
      setDiseases(data);
    })
      .catch(error => {
        console.error("Failed to load diseases:", error);
      });
  }, [medications]);

  return (
    <div style={{ padding: '20px' }}> {/* Add padding to move away from the sidebar */}
      {/* Add a header with the title, avatar and edit icon */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar alt="Profile Picture" src="/path-to-your-image.jpg" sx={{ width: 56, height: 56, marginRight: '10px' }} />
          <Typography variant="h5" component="h1">Medication Table</Typography>
        </div>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
      </div>
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
          {medicationsTemp.map((medication, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                {medication.medicationName}
              </td>
              {(() => {
                if (medication.status === Status.Active) {
                  statusColor = "Active";
                } else if (medication.status === Status.Discontuned) {
                  statusColor = "Discontinued";;
                } else if (medication.status === Status.On_Hold) {
                  statusColor = "On Hold";;
                } else {
                  return <span ></span>;
                }
              })()}
              <td className={`px-6 py-4 whitespace-nowrap ${statusStyles[statusColor]}`}>
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
                {medication.startDate.toISOString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {medication.endDate?.toISOString() || '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicationTable;
