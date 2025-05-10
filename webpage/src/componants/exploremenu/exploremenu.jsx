import React from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/assets'
const exploremenu = ({ category, setCategory }) => {
  return (
    <div>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Welcome to FOOD HUB Your One-Stop Destination for Deliciousness!

          At FOOD HUB, we believe that food is more than just sustenance—it’s an experience that brings people together, sparks joy, and nourishes the soul. Whether you're a foodie looking for the best local eats, a home cook searching for fresh ingredients, or a restaurant owner sourcing quality supplies</p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div onClick={() => setCategory(prev => prev === item.menu_name ? "all" : item.menu_name)} key={index} className='explore-menu-list-item'>
                <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
              </div>

            )
          })
          }
        </div>
        <hr />
      </div>
    </div>
  )
}

export default exploremenu