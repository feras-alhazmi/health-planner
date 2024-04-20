// components/Timeline.tsx
import React from 'react';

// Assuming entries is an array of objects with 'date' and 'event' properties
type Entry = {
  date: string;
  event: string;
};

type TimelineProps = {
  entries: Entry[];
};

const Timeline: React.FC<TimelineProps> = ({ entries }) => {
  return (
    <div className="relative border-l-2 border-gray-200">
      {entries.map((entry, index) => (
        <div key={index} className="mb-8 ml-4">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full mt-1.5 border-2 border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">{entry.date}</time>
          <h3 className="text-lg font-semibold text-gray-900">{entry.event}</h3>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
