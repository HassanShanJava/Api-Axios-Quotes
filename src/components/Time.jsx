import React from 'react'
import Moment from "react-moment"
import "moment-timezone"

import {TimeContainer, TimeStamp, Greeting} from "./Styles/TimeStyles"


const Time = () => {

  let today=new Date();

  let greetin =()=>{
    // {today.getHours()>=5 && today.getHours()<12? "Good Morning, Hassan.":"Good Afternoon, Hassan."}
    if(today.getHours()>=5 && today.getHours()<12){
      return "Good Morning, Hassan."
    }else if(today.getHours()>=12 && today.getHours()<17){
      return "Good Afternoon, Hassan."
    }else if(today.getHours()>=17 && today.getHours()<24){
      return "Good Evening, Hassan."
    }else{
      return "It's Late, what are you doing here?"
    }
  }

  return (
    <TimeContainer>
        <TimeStamp>
          <Moment format='LT'></Moment>
        </TimeStamp>
        <Greeting>{greetin()}</Greeting>
    </TimeContainer>
  )
}

export default Time