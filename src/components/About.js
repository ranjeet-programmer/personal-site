import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import revenge from "../images/revenge.jpg";
import { Bar } from "react-chartjs-2";

const About = () => {
  const state = {
    labels: ["C++", "Javascript", "React JS", "PHP", "Core Java"],
    datasets: [
      {
        label: "Skills",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [30, 30, 40, 50, 56],
      },
    ],
  };

  return (
    <div>
      <div className='about_design container'>
        <div className='row '>
          <div className='col-md-6 about_1'>
            <div className='octagonWrap'>
              <div className='octagon'>
                <img
                  src={revenge}
                  alt='about_image'
                  className='about_img_design'
                />
              </div>
            </div>

            <h3 className='image_text'>Who's This Guy ?</h3>
            <p className='image_text2'>
              I am currently pursuing B.E In Information Technology from PCCOE
              pune . I am always intrested to learn new things regarding tech
              stuff. I am a competitive programmer and i do competitive
              programming beacuse i like to solve problems..
            </p>
          </div>

          <div className='col-md-6 about_2'>
            <Bar
              data={state}
              options={{
                title: {
                  display: true,
                  text: "Average skills",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
