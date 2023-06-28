import React from "react";

import Slider from "react-slick";


const images = [
  {
    id: "1",
    name: "Matar Paneer",
    alt: "",
    url: "https://www.aadeshmasale.com/_next/image?url=%2Frecipes%2Fmain%2F2.jpg&w=1920&q=75"
  },
  {
    id: "2",
    name: "Chicken Tikka Masala ",
    alt: "",
    url:"https://www.aadeshmasale.com/_next/image?url=%2Frecipes%2Fmain%2F1.webp&w=1920&q=75"
  },
  {
    id: "3",
    name: "Chicken Biryani",
    alt: "",
    url: "https://www.aadeshmasale.com/_next/image?url=%2Frecipes%2Fmain%2F9.jpg&w=1920&q=75"
  },
  {
    id: "4",
    name: "Chicken Biryani ",
    alt: "",
    url: "https://www.aadeshmasale.com/_next/image?url=%2Frecipes%2Fmain%2F9.jpg&w=1920&q=75"
  }
];


export const HomeScrollbar = () => {
  const settings = {
    
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "slides",
   
  };
  return (
    <div>
      <div className="ScrollbarTitle" >
      Spice Up Your Meals with Aadesh Masale
      </div>
      <Slider {...settings} >
        {images.map((image) => {
          return (
           
            <div className="wrapper " key={image.id}>
              <img className="sliderImg g-0" src={image.url} alt={image.alt} />
              <p className="imgTitle">{image.name}</p>
            </div>
            
          );
        })}
      </Slider>
    </div>
  );
};
export default HomeScrollbar
