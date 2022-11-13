import React from "react";
import "./login.css";

const LoginPage = () => {
  return (
    <div>
      <div class="student_login_parent" id="student_login_parent">
        <div class="login">
          <div class="student_company">
            <div>
              <a id="student" href="#">
                STUDENT
              </a>
            </div>
            <div>
              <a id="company" href="#">
                COMPANY
              </a>
            </div>
          </div>
          <div>
            <h2 class="login_f_normal">Login</h2>
          </div>
          <div>
            <p class="login_information">
              If you are a company looking to hire interns, please login as a
              company by clicking
              <a class="color_blue" href="#">
                here.
              </a>
            </p>
          </div>
          <div
            class="login_with"
            style={{ backgroundColor: "rgb(67, 102, 178)" }}
          >
            <div>
              <img
                src="https://www.interntheory.com/assets/iconsLogos/facebook-circular-logo.svg"
                alt="Facebook"
              />
            </div>
            <div>SIGIN WITH FACEBOOK</div>
          </div>
          <div
            class="login_with"
            style={{ backgroundColor: "rgb(8, 125, 220)" }}
          >
            <div>
              <img
                src="https://www.interntheory.com/assets/iconsLogos/googlelogo.svg"
                alt="Logo of Google"
              />
            </div>
            <div>SIGIN WITH GOOGLE</div>
          </div>
          <div class="or">
            <h5>OR</h5>
          </div>
          <div>
            <form class="form">
              <label for="email">Email/Number</label>
              <input type="text" placeholder="Email/Number*" id="email" />
              <label for="password">Password</label>
              <input type="password" placeholder="Password*" id="password" />
            </form>
          </div>
          <div class="reminder">
            <div>
              <p>
                <input type="checkbox" name="" id="" />

                <label for="checkbox">Remember Me</label>
              </p>
            </div>
            <div>
              <p class="color_blue" onclick="yet_to_add()">
                Forgot Password?
              </p>
            </div>
          </div>
          <div class="not_account">
            <p>
              Don't have an account?
              <span class="color_blue" onclick="create_account()">
                Create your account
              </span>
            </p>
          </div>
          <button class="login_btn" onclick="sendData()">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
=======

import './login.css'

const LoginPage = () => {
  return (<div><div className="student_login_parent" id="student_login_parent">
  <div className="login">
    <div className="student_company">
      <div>
        STUDENT
      </div>
      <div>
        COMPANY
      </div>
    </div>
    <div><h2 className="login_f_normal">Login</h2></div>
    <div>
      <p className="login_information">
        If you are a company looking to hire interns, please login as a
        company by clicking
      
      </p>
    </div>
    <div
      className="login_with"
      style={{backgroundColor: "rgb(67, 102, 178)"}}
    
    >
      <div>
        <img
          src="https://www.interntheory.com/assets/iconsLogos/facebook-circular-logo.svg"
          alt="Facebook"
        />
      </div>
      <div>SIGIN WITH FACEBOOK</div>
    </div>
    <div
      className="login_with"
      style={{backgroundColor: "rgb(8, 125, 220)"}}
      
    >
      <div>
        <img
          src="https://www.interntheory.com/assets/iconsLogos/googlelogo.svg"
          alt="Logo of Google"
        />
      </div>
      <div>SIGIN WITH GOOGLE</div>
    </div>
    <div className="or"><h5>OR</h5></div>
    <div>
      <form className="form">
        <label for="email">Email/Number</label>
        <input
          type="text"
          placeholder="Email/Number*"
          id="email"
          
        />
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password*"
          id="password"
          
        />
      </form>
    </div>
    <div className="reminder">
      <div>
        <p>
          <input type="checkbox" name="" id="" />

          <label for="checkbox">Remember Me</label>
        </p>
      </div>
      <div>
        <p className="color_blue" onclick="yet_to_add()">Forgot Password?</p>
      </div>
    </div>
    <div className="not_account">
      <p>
        Don't have an account?
       <span className="color_blue"
          >Create your account</span
        >
      </p>
    </div>
    <button className="login_btn" >LOGIN</button>
  </div>
</div></div>);

};

export default LoginPage;
