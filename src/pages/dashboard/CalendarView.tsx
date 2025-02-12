import React from 'react';
import  Calendar  from './../../components/dashboard/Calendar';

const CalendarView: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Calendar</h2>
        </div>
        <Calendar />
      </div>
    </div>
  );
};

export default CalendarView;