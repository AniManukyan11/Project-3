import React from 'react'
import { useParams } from 'react-router-dom';
import './image.css';
const myArray = [
  { 
    id: 1,
    src: '../img/1.jpg',
    text: 'Մանկական հագուստ #1'
  },
  {
    id: 2,
    src: '../img/2.jpg',
    text: 'Մանկական հագուստ #2'
  },
  { 
    id: 3,
    src: '../img/3.jpg',
    text: 'Մանկական հագուստ #3'
  },
  {
    id: 4,
    src: '../img/4.jpg',
    text: 'Մանկական հագուստ #4'
  },
  { 
    id: 5,
    src: '../img/5.jpg',
    text: 'Մանկական հագուստ #5'
  },
  { 
    id: 6,
    src: '../img/6.jpg',
    text: 'Մանկական հագուստ #6'
  }
];
function Image() {

  const {id}= useParams()
  const data = myArray.filter((item)=>{
    return item.id===+id
  })
 
  return (
  <div className='single_image'>
      <img src={data[0].src} alt=''/>
      <h2>{data[0].text}</h2>
      <p>
1. Հարմար են աշնանը կամ գարնանը:<br/>
2. 1-3 տարեկանների համար , բարձրությունը 80-100 սմ:
</p>
 </div>
  )
}

export default Image