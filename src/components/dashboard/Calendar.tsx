import React, { useState } from 'react';

interface Event {
  id: number;
  title: string;
  date: Date;
  description: string;
}

const Calendar = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Calendar</h1>
      <div className="grid grid-cols-7 gap-2">
        {/* Calendar grid will go here */}
        <div className="bg-white p-4 rounded-lg shadow min-h-[120px]">
          {/* Calendar cell content */}
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Events</h2>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-sm text-gray-500">
                {event.date.toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;