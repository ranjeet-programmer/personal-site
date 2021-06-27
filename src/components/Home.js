import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import TypeWriter from "typewriter-effect";
import "../App.css";
import hmimg from "../images/home_main.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <>
      <html>
        <head>
          <title>Home</title>
        </head>
        <body>
          <div className='container'>
            <div className='row '>
              <div className='col-md-7 text_section info'>
                <div>
                  <span className='v6_0 text_editing'>HEY THERE !</span>
                  <h2 className='v6_1 text_editing'>I AM RANJEET HINGE</h2>
                  <h2 className='v6_2 text_editing'>
                    {/* WEB DEVELOPER & COMPETITIVE PROGRAMMER.. */}

                    <TypeWriter
                      options={{
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        strings: ["WEB DEVELOPER", "COMPETITIVE PROGRAMMER"],
                      }}
                    />
                  </h2>
                </div>
              </div>

              <div className='col-md-5 image_section'>
                <img src={hmimg} alt='home_main' className='image_design' />
              </div>
            </div>

            <div className='social_logo'>
              <a
                href='https://www.youtube.com/c/jamesqquick'
                className='github social'
              >
                <FontAwesomeIcon icon={faGithub} size='2x' />
              </a>
              <a
                href='http://www.instagram.com/larnbuildteach'
                className='instagram social'
              >
                <FontAwesomeIcon icon={faInstagram} size='2x' />
              </a>
              <a href='https://wwww.twitter.com' className='twitter social'>
                <FontAwesomeIcon icon={faTwitter} size='2x' />
              </a>

              <a href='https://wwww.twitter.com' className='linkedlin social'>
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
              </a>
            </div>

            <div className='button_info'>
              <NavLink className='nav-link all_nav ' to='/contact'>
                <button type='button' class='btn  btn_design_first'>
                  SEE MY WORK
                </button>
              </NavLink>

              <NavLink className='nav-link all_nav ' to='/contact'>
                <button type='button' class='btn  btn_design_second'>
                  CONTACT ME
                </button>
              </NavLink>
            </div>
          </div>
        </body>
      </html>
    </>
  );
};

export default Home;
