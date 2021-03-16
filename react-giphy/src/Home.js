import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Search from './components/HeloWorld'
const Home = () => {
return(
    <div>
    <h2>Hello from home</h2>
    <Search />
    </div>
)
}
export default Home