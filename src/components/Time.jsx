import React from 'react'
import Moment from "react-moment"
import "moment-timezone"

const Time = () => {

  let today=new Date();

  let greetin =()=>{
    // {today.getHours()>=5 && today.getHours()<12? "Good Morning, Hassan.":"Good Afternoon, Hassan."}
    if(today.getHours()>=5 && today.getHours()<12){
      return "Good Morning, Hassan."
    }else if(today.getHours()>=12 && today.getHours()<17){
      return "Good Afternoon, Hassan."
    }else if(today.getHours()>=17 && today.getHours()<24){
      return "Good Eveening, Hassan."
    }else{
      return "It's Late, what are you doing here?"
    }
  }

  return (
    <div>
        <p>
          <Moment format='LT'></Moment>
        </p>
        <p>{greetin()}</p>
    </div>
  )
}

export default Time