import React,{ useState } from 'react'
import './Home.css'

import Exploremenu from '../../componants/exploremenu/exploremenu'
import FoodDisplay from "../../components/foodDisplay/foodDisplay";
import AppDownload from '../../componants/AppDownload/AppDownload'
import Banner from '../../componants/food banner/Banner'
import FoodSlider from '../../componants/slider/FoodSlider'
const Home = () => {
  const [category,setCategory] = useState("all");
  return (
    <div>
        
        <FoodSlider/>
        <Exploremenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
        <Banner/>
    </div>
  )
}

export default Home
