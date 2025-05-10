import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import Offer1 from '../../componants/Offers/Offer1';
import { ToastContainer, toast } from 'react-toastify';


const Cart = () => {
  const { cardItems, food_list, removeFromCart, getTotalCartAmount ,url} = useContext(StoreContext);
  const navigate = useNavigate();
 
  return (
    <>
     <ToastContainer />
      <div className='cart'>
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item,) => {
            if (cardItems[item._id] > 0) {
              return (
                <div>
                  <div className='cart-items-title cart-items-item'>
                    <img src={url+"/images/"+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>Rs.{item.price}</p>
                    <p>{cardItems[item._id]}</p>
                    <p>Rs.{item.price * cardItems[item._id]}</p>
                    <p className='cross' onClick={() => removeFromCart(item._id)}><img className='delete-icon' src={assets.Delete_icon} alt="" /></p>
                  </div>
                  <hr />
                </div>
          

              )
            }

          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-detail">
                <p>Sub Total</p>
                <p>Rs.{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-detail">
                <p>Delivery Fees</p>
                <p>Rs.{getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />

              <div className="cart-total-detail">
                <p>Total</p>
                <p>Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
              </div>

            </div>
            <button  onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>if You have coupen Then Enter the coupen code</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder='Enter coupen code' />
                <button>Submit</button>
              </div>
            </div>
          </div>


        </div>
      </div>
      <Offer1 />
    </>
  )
}

export default Cart;