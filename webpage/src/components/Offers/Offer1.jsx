import React from 'react'
import './Offer1.css'
import { Link } from 'react-router-dom'
const Offer1 = () => {
  return (
    <div  className='offer-container'>
        <div className="offer1">
            <Link to='/'><img src = "./chowmin_offer.gif"  alt="offer image1" /></Link>
        </div>

    </div>
  )
}

export default Offer1