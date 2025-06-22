import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AlbumEx from '../components/AlbumEx'
import Cardlist from '../components/Cardlist'

const Album = () => {
  return (
    <div>
      <Header/>
      <AlbumEx/>
      <Cardlist/>
      <Footer/>
    </div>
  )
}

export default Album
