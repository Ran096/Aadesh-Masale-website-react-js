import React from "react";
import "./Recipes.css"

const RecipesItem = [
  {
    image: 'https://www.aadeshmasale.com/_next/image?url=%2Frecipes%2Fmain%2F1.webp&w=1920&q=75',
    title: "Chicken Tikka Masale",
  },
  {
    image: "https://www.aadeshmasale.com/_next/image?url=%2Frecipes%2Fmain%2F2.jpg&w=1920&q=75",
    title: "Aloo Gobi",
  },
  {
    image: 'https://www.aadeshmasale.com/_next/image?url=%2Frecipes%2Fmain%2F3.jpg&w=1920&q=75',
    title: "Chicken Biryani",
  },
  {
    image: 'https://www.aadeshmasale.com/_next/image?url=%2Frecipes%2Fmain%2F4.jpg&w=1920&q=75',
    title: 'Dehl With Spinach',
  },
  {
    image: "https://www.aadeshmasale.com/_next/image?url=%2Frecipes%2Fmain%2F5.jpg&w=1920&q=75",
    title: 'Tandoori Chicken',
  }, {
    image: 'https://www.aadeshmasale.com/_next/image?url=%2Frecipes%2Fmain%2F6.jpg&w=1920&q=75',
    title: 'Veg Biryani',
  },
  {
    image: 'https://www.aadeshmasale.com/_next/image?url=%2Frecipes%2Fmain%2F7.jpg&w=1920&q=75',
    title: 'Butter Chicken',
  },
  {
    image: 'https://www.aadeshmasale.com/_next/image?url=%2Frecipes%2Fmain%2F8.webp&w=1920&q=75',
    title: 'Matar Paneer',
  },
  {
    image: 'https://www.aadeshmasale.com/_next/image?url=%2Frecipes%2Fmain%2F9.jpg&w=1920&q=75',
    title: 'Palak Paneer Curry'
  }
]
export const Recipes = () => {
  return (
    <>
      <div className="container">
        <div className="RecipesStyle">
          <h1>Recipes</h1>
          <div className="row row-cols-1 row-cols-md-3 g-3 mt-3">

            {RecipesItem.map((item, index) => {
              return (
                <div className="col ">
                  <div className="card h-100 Rounded" style={{ width: "18rem" }} key={index}>
                    <img src={item.image} className="card-img-top" alt="Recpie List" />
                    <div className="card-body">
                      <h4 className="text-start mb-1 card-text">{item.title}</h4>
                    </div>
                  </div>
                </div>
              )
            })
            }

          </div>
        </div>
      </div>
    </>
  );
};
export default Recipes
