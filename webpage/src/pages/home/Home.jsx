import React,{ useState } from 'react'
import './Home.css'

import Exploremenu from '../../components/exploremenu/exploremenu'
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from '../../components/AppDownload/AppDownload'
import Banner from '../../components/food banner/Banner'
import FoodSlider from '../../components/slider/FoodSlider'
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
