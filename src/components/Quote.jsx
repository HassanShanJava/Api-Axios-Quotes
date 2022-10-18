import React,{useEffect,useState} from 'react'
import axios from 'axios';

import {QuoteContainer, Text} from './Styles/QouteStyles'


const url='https://goquotes-api.herokuapp.com/api/v1/random?count=1';

const Quote = () => {

  const [data, setData]=useState(null);

  useEffect(()=>{
    
    axios.get(url).then(res=>{
      
      setData(res.data)

    }).catch(err=>console.error(err))
  
  },[])


  console.log(data);

  if(!data) return null

  return (
    <QuoteContainer>
        <Text>{data.quotes[0].text}</Text>
        <Text>-{data.quotes[0].author}</Text>
    </QuoteContainer>
  )
}

export default Quote