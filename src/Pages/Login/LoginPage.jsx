import React from "react";

import "./login.css";

import { Navigate } from "react-router-dom";
var userDetailsLS = JSON.parse(localStorage.getItem("user_id")) || "";
const initial = {
  name: "",
  email: "",
  password: "",
};
const LoginPage = () => {
  const [user, setUser] = React.useState(initial);
  const handleLogincatchInput = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };
  const { name, email, password } = user;

  const handleSubmit = () => {
    if ((user.email = "" || user.password == "")) {
      alert("Please enter all crendentials");
    } else if (
      user.email != userDetailsLS.email ||
      user.password !== userDetailsLS.password
    ) {
      alert("Invalid email or Password");
    } else {
      alert("user Loggedin succesfull");
      <Navigate to="/dashboard" />;
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
            <form className="form">
              <label for="email">Email/Number</label>
              <input
                type="text"
                value={email}
                onChange={handleLogincatchInput}
                placeholder="Email/Number*"
                id="email"
              />
              <label for="password">Password</label>
              <input
                value={password}
                onChange={handleLogincatchInput}
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
              <p className="color_blue" onclick="yet_to_add()">
                Forgot Password?
              </p>
            </div>
          </div>
          <div className="not_account">
            <p>
              Don't have an account?
              <span className="color_blue">Create your account</span>
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
