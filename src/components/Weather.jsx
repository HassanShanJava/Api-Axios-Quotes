import React, {useState,useEffect} from 'react'
import axios from 'axios'

import {WeatherContainer, Temp, City} from "./Styles/WeatherStyles"


const url=`https://api.openweathermap.org/data/2.5/weather?q=karachi&units=imperial&appid=cea09a26775879b9f3185dceb4e801e9`;


const Weather = () => {

    const [data, setData]=useState(null);

    useEffect(()=>{
      
      axios.get(url).then((response)=>{
        setData(response.data)
      }).catch(err=>console.log(err))

    },[])


    console.log(data);
    
    // imp
    if(!data) return null


  return (
    <WeatherContainer>
      <Temp>{Math.round(((data.main.temp)-32)*5/9)} <span>&#8451;</span></Temp>
      <City>Karachi, PK</City>

    </WeatherContainer>
  )
}

export default Weather