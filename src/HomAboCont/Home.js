import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';
const myArray = [
  {
    id: 1,
    src: 'img/1.jpg',
    text: 'Մանկական հագուստ #1'
  },
  {
    id: 2,
    src: 'img/2.jpg',
    text: 'Մանկական հագուստ #2'
  },
  {
    id: 3,
    src: 'img/3.jpg',
    text: 'Մանկական հագուստ #3'
  },
  {
    id: 4,
    src: 'img/4.jpg',
    text: 'Մանկական հագուստ #4'
  },
  {
    id: 5,
    src: 'img/5.jpg',
    text: 'Մանկական հագուստ #5'
  },
  {
    id: 6,
    src: 'img/6.jpg',
    text: 'Մանկական հագուստ #6'
  }];

function Images() {
  return (
    <div className='main_block'>
      <h2>
        Որակյալ և հարմարավետ հագուստ մանուկների համար:
      </h2>
      <div className='main_images'>
      {myArray.map((item, index) => (
        <NavLink to={`./home/${item.id}`} key={index}> 
        <div className='images'><img src={item.src} alt='' /></div> 
          <p >{item.text}</p></NavLink>
      ))}
      </div>
      </div>
      )
}
      function Home() {
  return (
      <div>
        <Images />
      </div>
      )
}

      export default Home