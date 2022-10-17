import React,{useEffect,useState} from 'react'
import axios from 'axios';


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
    <div>
        <p>{data.quotes[0].text}</p>
        <p>-{data.quotes[0].author}</p>
    </div>
  )
}

export default Quote