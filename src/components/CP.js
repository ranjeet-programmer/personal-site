import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import codechef from "../images/codechef_logo.png";
import codeforces from "../images/CF_Logo.PNG";
import "../App.css";

function Card(props) {
  return (
    <>
      <div className='card '>
        <img
          src={props.imgsrc}
          alt='codechef logo'
          className='codechef_logo_design'
        />
        <div className='card-body'>
          <h5 className='card-title'>{props.title}</h5>
          <p className='card-text'>{props.desc}</p>
          <a href={props.link} className='btn btn-primary'>
            Visit Profile
          </a>
        </div>
      </div>
    </>
  );
}

const CP = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <Card
              imgsrc={codechef}
              title='CODECHEF'
              desc='3★ on codechef '
              link='https://www.codechef.com/users/revenge_ff'
            />
          </div>

          <div className='col-md-6'>
            <Card
              imgsrc={codeforces}
              title='CODEFORCES'
              desc=' Codeforces  Rating : 729'
              link='https://codeforces.com/profile/ranjeet_hinge'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CP;
