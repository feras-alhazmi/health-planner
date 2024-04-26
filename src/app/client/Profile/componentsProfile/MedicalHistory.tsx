// MedicalHistory.tsx
import { Avatar, IconButton, Typography } from '@mui/material';
import React from 'react';
import { FaNotesMedical } from 'react-icons/fa';
import EditIcon from '@mui/icons-material/Edit';


type MedicalHistoryEntry = {
  condition: string;
  details: string;
};

type MedicalHistoryProps = {
  entries: MedicalHistoryEntry[];
};

const MedicalHistory: React.FC<MedicalHistoryProps> = ({ entries }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md" style={{ padding: '20px' }}> {/* Add padding to move away from the sidebar */}
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
