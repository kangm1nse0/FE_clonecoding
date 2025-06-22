import React from 'react'
import './AlbumEx.css';
const AlbumEx = () => {
  return (
    <div className='hero'>
      <h1 className='title'>Album example</h1>
      <div className='content'>
      <p>Something short and leading about the collection below—its contents, the </p>
        <p>creator, etc. Make it short and sweet, but not too short so folks don’t simply</p>
        <p>skip over it entirely.</p>
        </div>
      <div className='but'>
        <button className='bluebutton'>Main call to action</button>
         <button className='graybutton'>Secondary action</button>
      </div>
    </div>
  )
}

export default AlbumEx
