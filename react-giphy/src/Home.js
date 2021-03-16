import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Search from './components/Search'


const Home = () => {
  return(
    <div>
      <Header />
      <Search />
    </div>
  )
}

export default Home
