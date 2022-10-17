import React from 'react'


const DateToday = () => {
  
  let today=new Date();

  console.log(today);

  let date=today.getMonth()+1+"/"+today.getDate()+"/"+today.getFullYear()


  return (
    <div>
        <p>{date}</p>
    </div>
  )
}

export default DateToday