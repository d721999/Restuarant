import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import {toast} from "react-toastify"
const List = ({url}) => {

  const [list,setList] = useState([]);
  const fetchList = async () => {

    const response = await axios.get(`${url}/api/food/list`);
   
    if (response.data.success) {
      setList(response.data.data)
      
    }
    else{
      toast.console.error("error");
      
    }

  }
  
  const removeFood = async(foodid) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodid})
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
      
    }
    else
    {
      toast.error("error");
    }


  }
  

  useEffect(() => {
    fetchList()
  },[])


  return (
    <div className='list add flex-col'>
      <p className='page-name'>All Food List</p>
      <div className="list-table">
        <div className="list-table-format">
          <b className='column-heading'>Image</b>
          <b className='column-heading'>Name</b>
          <b className='column-heading'>Category</b>
          <b className='column-heading'>Price</b>
          <b className='column-heading'>Action</b>

        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt="" />
              <p className='name-title'>{item.name}</p>
              <p className='category-title'>{item.category}</p>
              <p className='price-title'>Rs{item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='curser'>x</p>
              
              </div>
          )

        })}

      </div>
      
    </div>
  )
}

export default List
