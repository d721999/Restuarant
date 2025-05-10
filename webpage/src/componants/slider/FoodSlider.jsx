// src/components/FoodSlider.jsx
import React from "react";
import Slider from "react-slick";
import './FoodSlider.css'


    
    const foodImages = [
        {
          url: "Black White Simple Opening Banner.gif",
         // title: "Delicious Pizza",
        },
        {
          url: "Black Yellow Simple Modern Noodle Promotion Banner.gif",
        //   title: "Juicy Noodle",
        },
        {
          url: "Yellow Red Modern Food Promotion Banner Landscape.gif",
        //   title: "Fresh Burger",
        },
        {
          url: "Black Modern Fried Chicken Ramadhan Special Offer Banner.gif",
        //   title: "Fried Chicken",
        },
      ];



const FoodSlider = () => {
  const settings = {
    dots:true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows:true,
         
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 px-4">
      <Slider {...settings}>
        {foodImages.map((food, index) => (
          <div key={index} className="px-2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={food.url}
                alt={food.title}
                className="w-full h-64 object-cover"
              />
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FoodSlider;
