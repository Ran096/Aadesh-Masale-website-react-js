import React from "react";

export const HomeInfo = () => {
  return (
    <>
      <div className="HomeInfoStyle">
        <div class=" row row-cols-1 row-cols-2 row-cols-md-4 mt-0 g-0">
          <div className="col  ">
            <div style={{textAlign:'center',alignItems:'center'}} className=" boxstyle border-0 BoxStyle text-center p-15 card h-100">
              <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2FNatural-logo.png&w=1920&q=75" style={{width:'80px',height:'100px'}} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Natural</h5>
                <p class="card-text">Our spices are made from the finest natural ingredients, ensuring that you get the best flavors without any harmful additives.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div style={{textAlign:'center',alignItems:'center'}} class=" boxstyle border-0 BoxStyle2 text-center card h-100">
              <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2FHeart-logo.png&w=1920&q=75"style={{width:'80px',height:'100px'}} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Healthy</h5>
                <p class="card-text">Our spices are not only delicious but also packed with health benefits, helping you lead a healthier lifestyle.</p>
              </div>
            </div>
          </div>
          <div className="col ">
            <div style={{textAlign:'center',alignItems:'center'}} className="boxstyle border-0 BoxStyle2 text-center card  h-100">
              <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2FFL-logo.png&w=1920&q=75" class="card-img-top" style={{width:'80px',height:'100px'}} alt="..." />
              <div class="card-body">
                <h5 class="card-title">Flavor lock</h5>
                <p class="card-text">We use the latest techniques to lock in the flavor and aroma of our spices, so you can enjoy their freshness and goodness for longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div style={{textAlign:'center',alignItems:'center'}} class=" boxstyle border-0 BoxStyle text-center card h-100">
              <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2FVeg-logo.png&w=1920&q=75" class="card-img-top"style={{width:'80px',height:'100px'}} alt="..." />
              <div class="card-body">
                <h5 class="card-title">Pure Veg</h5>
                <p class="card-text">Our spices are 100% pure and vegetarian, making them the perfect choice for anyone looking for a healthy and ethical food option.</p>
              </div>
            </div>
          </div>
        </div>
        |</div>
    </>
  );
};
export default HomeInfo
