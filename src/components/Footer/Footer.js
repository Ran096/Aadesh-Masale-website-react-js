import React from "react";
import { NavLink } from "react-router-dom";
//import Navbar from "../Navbar/NavBar"
import "./Footer.css"
export const Footer = () => {
  return (
    <div>
      <div className="mb-0 my-5">
        <footer className="FooterStyle text-center text-lg-start text-white">
          <div className="container p-4">
            <div className="d-flex f1 align-items-center  justify-content-space-between">
              <div className="text-start f1l mt-1 mx-auto" style={{ height: " 150px" }}>
                <img src="https://www.aadeshmasale.com/_next/image?url=%2Flogo%20op.png&w=1920&q=75" height="100" alt=""
                  loading="lazy" />
              </div>
              <div className=" f1r d-flex list-unstyled" /* style={{ width: '100%' }} */>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    activeClassName="active"
                    className="nav-links"
                  /* onClick={handleClick} */
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/about"
                    activeClassName="active"
                    className="nav-links"
                  /*   onClick={handleClick} */
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/Product"
                    activeClassName="active"
                    className="nav-links"
                  /*  onClick={handleClick} */
                  >
                    Product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/Gallery"
                    activeClassName="active"
                    className="nav-links"
                  /* onClick={handleClick} */
                  >
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/Recipes"
                    activeClassName="active"
                    className="nav-links"
                  /*  onClick={handleClick} */
                  >
                    Recipes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/contact"
                    activeClassName="active"
                    className="nav-links"
                  /* onClick={handleClick} */
                  >
                    Contact Us
                  </NavLink>
                </li>
              </div>
            </div>

            <div className="row my-4 ">
              <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Registered Head Office</h5>
                <ul className="list-unstyled">
                  <li>
                    <p><i class="fas fa-map-marker-alt pe-2"></i>Gata no. 3168,Jungal Ramnagar, </p>
                    <p>Raipur Fulwari, Amethi. Dist-Amethi, UP 227405.</p>
                  </li>
                  <li>
                    <p><i class="fas fa-phone pe-2"></i>+91-9867812341</p>
                  </li>
                  <li>
                    <p><i class="fas fa-phone pe-2"></i>+91-7607581221</p>
                  </li>
                  <li>
                    <p><i class="fas fa-envelope pe-2 mb-0"></i>aadeshmasala@gmail.com</p>
                  </li>
                </ul>
              </div>
              {/*  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Animals</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i class="fas fa-paw pe-3"></i>When your pet is missing</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i class="fas fa-paw pe-3"></i>Recently found</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i class="fas fa-paw pe-3"></i>How to adopt?</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i class="fas fa-paw pe-3"></i>Pets for adoption</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i class="fas fa-paw pe-3"></i>Material gifts</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i class="fas fa-paw pe-3"></i>Help with walks</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i class="fas fa-paw pe-3"></i>Volunteer activities</a>
                  </li>
                </ul>
              </div> */}

              <div className="col-lg-4  col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Mumbai Head Office</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i class="fas fa-map-marker-alt pe-2"></i>Shop No. 04, Himgiri Apt., Near Maruti Mandir, R.N.P, Park, Opp. Jesal Park, Bhayander (E), Thane - 401105.</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white text-bold">For Mumbai Dealership kindly contact -</a>
                  </li>
                  <li>
                    <p><i class="fas fa-phone pe-2"></i>+91-9819120023</p>
                  </li>
                  <li>
                    <p><i class="fas fa-phone pe-2"></i>+91-9594881292</p>
                  </li>
                  <li>
                    <p><i class="fas fa-envelope pe-2 mb-0"></i>ss02enterprises@gmail.com</p>
                  </li>
                </ul>
              </div>
              
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul className="list-unstyled d-flex flex-row justify-content-end">
                  <li>
                    <a className="text-white px-2" href="#!">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white px-2" href="#!">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white ps-2" href="#!">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
                <h5 className="text-end">Privacy Policy </h5>
                 <p className="text-end">FSSAI Lic No.12716072000001 </p>
                 <p className="text-end">Trade Mark No: 1852546</p>
              
              </div>
            </div>
          </div>
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2023 Copyright:
            <a className="text-white" href="/">Ranjeet Patel</a>
          </div>

        </footer>

      </div>
    </div>
  );
};
export default Footer
