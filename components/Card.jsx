import React from 'react'
import './Card.css';
import img from '../assets/image.png';
const Card = () => {
  return (
    <div className='card'>
      <img src={img} className='picture'></img>
      <div className='cardcontent'>
        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div className='undercontent'>
          <div className='cardbuttons'>
            <button>View</button>
            <button>Edit</button>
            </div>
            <p className='time'>9mins</p>
        </div>
      </div>
    </div>
  )
}

export default Card
