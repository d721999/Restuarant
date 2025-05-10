import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,price,description,image,offer}) => {

   
    const{cardItems,addToCart,removeFromCart,url} = useContext(StoreContext);
  return (
    <div>
        <div className="food-item">
            <div className="food-item-img-container">
                <img className='food-item-image' src={url+"/images/"+image} alt="" />
                {!cardItems[id]
                    ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white } alt=""/>
                    :<div className='food-item-Counter'>
                        <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cardItems[id]}</p>
                        <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="" />

                    </div>
                
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-description">{description}</p>
                <p className='offer'>20% Off{offer}</p>
                <p className='coupen'>Use Coupen Code For more Discount{offer}</p>
                <p className="food-item-price">Rs.{price}</p>
                <button onClick={()=>addToCart(id)}>Add To Cart</button>
            </div>
        </div>

    </div>
  )
}

export default FoodItem