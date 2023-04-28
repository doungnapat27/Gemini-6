import React from 'react';
import './styles/homepage.css'; // import CSS file
import science from './img/science plan 1.svg';
import create from './img/create.svg';
import validate from './img/validate.svg';


function Home() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              <h1>GEMINI-6</h1>
            </div>
            <div className="navbar-link">
              <ul>
                <li><a href="/createSciPlan">Create Science Plan</a></li>
                <li><a href="#">Validate Science Plan</a></li>
              </ul>
            </div>
            <div className="navbar-logout">
              <button>Log out</button>
            </div>
          </div>
        </nav>
      </header>
      <div className="container">
        <div className="box">
        <img src={science} alt="Image 1" />
          <div className="content">
            <h2>Science Plan</h2>
          </div>  
        </div>
        <div className="box">
        <img src={create} alt="Image 1" />
          <div className="content">
            <h2>Create Science Plan</h2>
          </div>
        </div>
        <div className="box">
        <img src={validate} alt="Image 1" />
          <div className="content">
            <h2>Validate Science Plan</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
