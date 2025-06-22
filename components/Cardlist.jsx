import React from 'react'
import './Cardlist.css';
import Card from './Card';
const Cardlist = () => {
     const count = 20;
  return (
    
    <div className="cardlist">
      {[...Array(count)].map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  )
}

export default Cardlist
