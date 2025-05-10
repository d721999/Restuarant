import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const header = () => {
  return (
    <div className='header'>
        <div className="header-contants">
        <h2>Order your favarite food</h2>
            <p>Our team is dedicated to bringing you<br/>the best in food and flavors !</p>
           <Link to='/menu'> <button >View Menu</button></Link>
        </div>
    </div>
  )
}

export default header