"use client";

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EditIcon from '@mui/icons-material/Edit';
import { Avatar } from '@nextui-org/react';
import { IconButton, Typography } from '@mui/material';


const CalendarComponent: React.FC = () => {
  // Initialize the state with today's date
  const [date, setDate] = useState(new Date());

  // Handle date change
  const onChange = (newDate: any) => {
    setDate(newDate);
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md" style={{ padding: '20px' }}> {/* Add padding to move away from the sidebar */}
      {/* Add a header with the title, avatar and edit icon */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <Avatar alt="Profile Picture" src="/path-to-your-image.jpg" /> */}
          <Typography variant="h5" component="h1">Caleneder</Typography>
        </div>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
      </div>
      {/* Apply the `any` type to bypass the type checking */}
      <Calendar onChange={onChange as any} value={date as any} />
    </div>
  );
};

export default CalendarComponent;
