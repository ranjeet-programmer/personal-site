import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import revenge from "../images/revenge.jpg";
const About = () => {
  return (
    <div>
      <p>About</p>

      <div className='about_design container'>
        <div className='row '>
          <div className='col-md-5 about_1'>
            <p>Hello </p>
            <img src={revenge} alt='about_image' className='about_img_design' />
            <h3 className='image_text'>Who's This Guy ?</h3>
            <p className='image_text2'>
              I am currently pursuing B.E In Information Technology from PCCOE
              pune . I am always intrested to learn new things regarding tech
              stuff. I am a competitive programmer and i do competitive
              programming beacuse i like to do things out of comfort zone.
            </p>
          </div>

          <div className='col-md-7 about_2'>
            <p>About us</p>
            <p className='about_text'>
              I am currently pursuing B.E In Information Technology from PCCOE
              pune .<br></br> I am always intrested to learn new things
              regarding tech stuff. <br></br>I am a competitive programmer and i
              do competitive programming beacuse i like to do things out of
              comfort zone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
