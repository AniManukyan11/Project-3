import React from 'react'
import { useParams } from 'react-router-dom';
import './image.css';
import {useState, useEffect} from 'react';

function Image() {
  const [hagust, setHagust]= useState([])
  
  const {id}= useParams()
  useEffect(()=> {
    fetch("http://localhost:3001/hagust/"+id)
    .then(res=>res.json())
    .then(data=>setHagust(data))
  },[])
 
 
  console.log(hagust)
  return (
  <div className='single_image'>
      <img src={hagust.src} alt=''/>
      <h2>{hagust.text}</h2>
      <p>
1. Հարմար են աշնանը կամ գարնանը:<br/>
2. 1-3 տարեկանների համար , բարձրությունը 80-100 սմ:
</p>
 </div>
  )
}

export default Image