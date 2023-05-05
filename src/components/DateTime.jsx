import React, { useContext, useState } from "react";
import {TodoContext} from "../context/TodoContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";

const DateTimePicker = () => {
  
const {todoDay,  handleDateChange} = useContext(TodoContext);

  
  

  return (
   
    
      <DatePicker
      className='bg-gradient-to-r placeholder-white  via-purple-400 to-purple-400 rounded-lg shadow-lg px-4 py-3 border-b-3  w-fit outline-none mx-auto border-purple-300 text-white  flex justify-between'

      placeholderText="select a date"
        id="date-picker"
        selected={todoDay}
        onChange={  handleDateChange}
        showTimeSelect
        timeIntervals={1}
         dateFormat="dd/MM/yyyy HH:mm"
        
   
      />
   
  );
};

export default DateTimePicker;
