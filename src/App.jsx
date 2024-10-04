import React, { useState } from "react";
import "./App.css"; 
import Signup_img from './assets/Signup_img.png';
import Login_img from './assets/login_Image.png';
import facebook_img from './assets/1.png';
import twitter_img from './assets/2.png';
import Linkdin_img from './assets/3.png';




const App = () => {
  const [signUpMode, setSignUpMode] = useState(false);



  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  return (
    <div className={`container ${signUpMode ? "sign-up-mode" : ""}`}>
      {/* Sign-In and Sign-Up Forms */}
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign-In Form */}
          <form className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn solid">Sign In</button>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" >
              <i><img src={twitter_img} alt="" className="social-icon"/></i>
              </a>
              <a href="#" >
                <i><img src={facebook_img} alt="" className="social-icon"/></i>
              </a>
              <a href="#" >
              <i><img src={Linkdin_img} alt="" className="social-icon"/></i>
              </a>
            </div>
          </form>

          {/* Sign-Up Form */}
          <form className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn solid">Sign Up</button>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" >
              <i><img src={twitter_img} alt="" className="social-icon"/></i>
              </a>
              <a href="#" >
                <i><img src={facebook_img} alt="" className="social-icon"/></i>
              </a>
              <a href="#" >
              <i><img src={Linkdin_img} alt="" className="social-icon"/></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Panels */}
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Sign up to get started on your journey with us. Click the button below to create an account.
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
          <img src={Login_img} className="image" alt="Sign Up" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              If you already have an account, sign in to continue where you left off!
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <img src={Signup_img} className="image" alt="Sign In" />
        </div>
      </div>
    </div>
  );
};

export default App;
