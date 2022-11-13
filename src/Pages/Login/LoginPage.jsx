import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";

import {
  postuserloginrequest,
  postuserloginsucess,
  postuserloginfailure,
} from "../../Redux/AuthReducer/action";

import { Link, useNavigate } from "react-router-dom";
var userDetailsLS = JSON.parse(localStorage.getItem("user_id")) || "";
const initial = {
  fname: "rohit",
  email: "",
  password: "",
  isAuth: true,
};
const LoginPage = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [user, setUser] = useState(initial);
  const handleLogincatchInput = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };
  const { email, password } = user;

  const handleSubmit = () => {
    // dispatch(postuserloginrequest());
    let flag = false;
    if (user.email === "" || user.password === "") {
      alert("Please enter all crendentials");
      flag = false;
      dispatch(postuserloginfailure());
    }
    if (user.email === "admin@123gmail.com") {
      localStorage.setItem("Admin_id", JSON.stringify(user));
      Navigate("/Admin/dashboard");
    } else if (
      user.email === userDetailsLS.email &&
      user.password === userDetailsLS.password
    ) {
      // dispatch(postuserloginsucess());
      localStorage.setItem("Login_id", JSON.stringify(user));
      alert("user Loggedin succesfull");
      Navigate("/dashboard");
      // <Navigate to="/dashboard" />;
    } else {
      // dispatch(postuserloginfailure());
      alert("Invalid email or Password");
    }
  };
  return (
    <div>
      <div className="student_login_parent" id="student_login_parent">
        <div className="login">
          <div className="student_company">
            <div>STUDENT</div>
            <div>COMPANY</div>
          </div>
          <div>
            <h2 className="login_f_normal">Login</h2>
          </div>
          <div>
            <p className="login_information">
              If you are a company looking to hire interns, please login as a
              company by clicking
            </p>
          </div>
          <div
            className="login_with"
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
            className="login_with"
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
          <div className="or">
            <h5>OR</h5>
          </div>
          <div>
            <div className="form">
              <label for="email">Email/Number</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleLogincatchInput}
                placeholder="Email/Number*"
                id="email"
              />
              <label for="password">Password</label>
              <input
                value={password}
                onChange={handleLogincatchInput}
                name="password"
                type="password"
                placeholder="Password*"
                id="password"
              />
            </div>
          </div>
          <div className="reminder">
            <div>
              <p>
                <input type="checkbox" name="" id="" />

                <label for="checkbox">Remember Me</label>
              </p>
            </div>
            <div>
              <p className="color_blue" onclick="yet_to_add()">
                Forgot Password?
              </p>
            </div>
          </div>
          <div className="not_account">
            <p>
              Don't have an account?
              <Link to="/signup">
                <span className="color_blue">Create your account</span>
              </Link>
            </p>
          </div>
          <button onClick={handleSubmit} className="login_btn">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
