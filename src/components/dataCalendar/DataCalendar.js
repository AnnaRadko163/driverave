"use client"

import { useState} from 'react';
import Calendar from 'react-calendar'

import "react-calendar/dist/Calendar.css" 
import "./dataCalendar.css"

export default function DataCalendar({setArrival,setLeave}) {
  const [value, onChange] = useState([])
  console.log(value)  
  if (value.length > 1) { 
    setArrival(value[0].toLocaleDateString()) 
    setLeave(value[1].toLocaleDateString())
    console.log('kkk')
  }
  return (
    <div className='data-calendar'> 
        <Calendar
        value={value}
        onChange={onChange}
        showDoubleView
        selectRange
        minDate={new Date()} 
        /> 
    </div>
    
  )
}
