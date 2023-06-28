import React, { useState } from "react";
import Menu from "./ProductItemData"
import {Link} from "react-router-dom"
export const HomeProduct = () => {
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState(false);
  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };

  return (
    <div>
      <div className="ScrollbarTitle">
        Our Products
      </div>
   
        <ul className="options nav  ffp mt-10 ">
          <li className="op ">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => setItems(Menu)}
            >
              All
            </a>
          </li>
          <li className="op ">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("lunch")}
            >
              Blended
            </a>
          </li>
          <li className="op ">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("evening")}
            >
              Grounded
            </a>
          </li>
          <li className="op ">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("dinner")}
            >
              Other
            </a>
          </li>
          
        </ul>
      
      <div className="container">

        <div className="row">
          {items.map((elem) => {
            const { id, image } = elem;
            return (
              <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6  " id={id}>
                <Link to="/Product" >
                <img style={{width:'350px', height:'350px'}} class="img-fluid" src={image} alt="Product Item Li" />
                </Link>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};
export default HomeProduct
