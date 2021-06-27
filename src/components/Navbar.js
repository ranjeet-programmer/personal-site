import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/fontawesome-free-solid";
import "../App.js";
const Navbar = () => {
  return (
    <>
      <nav className='nav_design navbar navbar-expand-lg navbar-light   '>
        <NavLink className='navbar-brand  home_icon' to='/#'>
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto '>
            <li className='nav-item active'>
              <NavLink className='nav-link all_nav' to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link all_nav' to='/About'>
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link all_nav' to='/Project'>
                Projects
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link all_nav' to='/CP_Profile'>
                CP Profile
              </NavLink>
            </li>
            <li className='nav-item contact_nav'>
              <NavLink className='nav-link all_nav ' to='/contact'>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
