import React from 'react'
import {DateContiner} from "./Styles/DateStyles"

const DateToday = () => {
  
  let today=new Date();
  console.log(today)
  let date=today.getMonth()+1+"/"+today.getDate()+"/"+today.getFullYear()

  return (
    <DateContiner>
        <p>{date}</p>
    </DateContiner>
  )
}

export default DateToday