import React,{useEffect,useState} from 'react'
import axios from 'axios';

import {QuoteContainer, Text} from './Styles/QouteStyles'

// had to change qoute api 
const url='https://programming-quotes-api.herokuapp.com/Quotes/random';

const Quote = () => {

  const [data, setData]=useState(null);

  useEffect(()=>{
    
    axios.get(url).then(res=>{
      
      setData(res)

    }).catch(err=>console.error(err))
  
  },[])


  console.log(data);

  if(!data) return null

  console.log(data.data.author);

  return (
    <QuoteContainer>
        <Text>{data.data['en']}</Text>
        <Text>-{data.data["author"]}</Text>
    </QuoteContainer>
  )
}

export default Quote