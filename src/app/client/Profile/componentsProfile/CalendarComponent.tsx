"use client";

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent: React.FC = () => {
  // Initialize the state with today's date
  const [date, setDate] = useState(new Date());

  // Handle date change
  const onChange = (newDate: any) => {
    setDate(newDate);
  };

  return (
    <div className="border rounded shadow bg-white p-4">
      {/* Apply the `any` type to bypass the type checking */}
      <Calendar onChange={onChange as any} value={date as any} />
    </div>
  );
};

export default CalendarComponent;
