import React from 'react'
import Navbar from './componants/Navbar/Navbar'
import Sidebar from './componants/Sidebar/Sidebar'
import {Route, Routes} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Order/Order'
import { ToastContainer} from 'react-toastify';


const App = () => {
  // backend url
  const url = "https://backend-smpi.onrender.com";
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add url={url}/>}/>
          <Route path='/list' element={<List url={url}/>}/>
          <Route path='/order' element={<Order url={url}/>}/>
          

        </Routes>

      </div>
      
    </div>
  )
}

export default App
