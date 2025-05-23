import React,{ useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/placeorder/Placeorder';
import { Routes,Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Loginpopup from './components/Login-popup/Loginpopup';
import Verify from './pages/verify/Verify';
import MyOrders from './pages/myOrder/MyOrders';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  const [showlogin, setShowlogin] = useState(false)
  return (
    <>
    { showlogin?<Loginpopup setShowlogin={setShowlogin}/>:<></>}
    <div className='app'>
      <Navbar setShowlogin={setShowlogin}/>
    
     <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/cart' element ={<Cart/>}/>
        <Route path='/order' element ={<Placeorder/>}/>
        <Route path='/verify' element ={<Verify/>}/>
        <Route path='/myorders' element ={<MyOrders/>}/>
      </Routes>
    
     
    </div>
    <Footer/>
    </>
    
  )
}

export default App
