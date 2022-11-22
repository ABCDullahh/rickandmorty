import React from 'react';
import "./About.scss";

function About() {
    return (
      <div className="borderall">
        <div className="homepage-wrapper text-center">
          <h1>Rick & Morty 
            <span className="text-primary"> Fandom
            </span>
          </h1>
          <div className="subtitle">
            This app is created to complete
            <br />
            Mobile Device Programming Final Task.
          </div>
          
          <a href="https://github.com/ABCDullahh">
            <img className="img" src="images/abcd.png" alt=""></img>
          </a>
          <h2>Faizal Lutfi Yoga Triadi</h2>
          <div className="text-center fw-bold">21120120140158</div>
          <div className="about-info"> 
            <p>Diponegoro University</p>
            <p>Computer Engineering</p>
          </div>
          
          <br></br>
          <div className="text-center">
            <h4>
              {" "}
            <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">
              API USED
            </a>{" "}
            </h4>

            <a href="https://github.com/ABCDullahh">
              <img className="imggit" src="images/giticon.png" alt=""></img>
            </a>
          </div>
          <br />
        </div>
      </div>
    );
  }

export default About;
