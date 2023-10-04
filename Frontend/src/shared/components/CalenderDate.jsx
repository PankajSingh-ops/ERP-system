
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the CSS for styling
import Header from './Header';
import Styles from './CalenderDate.module.css'

function CalenderDate() {
  // Define a state variable to store selected dates
  const [selectedDates, setSelectedDates] = useState([]);

  // Custom function to handle date selection and coloring
  const handleDateClick = (date) => {
    // Toggle the selected date
    setSelectedDates((prevSelectedDates) => {
      if (prevSelectedDates.includes(date)) {
        return prevSelectedDates.filter((d) => d !== date);
      } else {
        return [...prevSelectedDates, date];
      }
    });
  };

  // Function to determine the color of a date cell
  const getTileClassName = ({ date }) => {
    // Check if the date is in the selectedDates array
    if (selectedDates.includes(date)) {
      return 'selected-date';
    }
    return null;
  };

  return (
    <div>
     <Header/>
     <div className={Styles.calendar_css}>
     <Calendar
        onClickDay={handleDateClick}
        tileClassName={getTileClassName}
      />
     </div>
      
    </div>
  );
}

export default CalenderDate;

