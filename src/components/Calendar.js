import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar';


const CalendarData = () => {

  const [date, setDate] = useState(new Date())

  const onChange = date => {
    setDate(date);
    console.log(date);
  }


  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-3">
          <Calendar
            onChange={onChange}
            value={date}
            className="border-gray-200 w-full rounded-md p-2"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default CalendarData;