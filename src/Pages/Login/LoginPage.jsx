import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BallTriangle } from "react-loader-spinner";
import "./login.css";
import {
  postuserloginrequest,
  postuserloginsucess,
  postuserloginfailure,
} from "../../Redux/AuthReducer/action";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { saveData } from "../../Component/Utils/localStorage";

const initial = {
  fname: "rohit",
  email: "",
  password: "",
  isAuth: true,
};
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initial);
  const handleLogincatchInput = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };
  const { email, password } = user;

  const handleSubmit = () => {
    if (user.email === "" || user.password === "") {
      alert("Please enter all crendentials");
    }
    if (user.email === "admin@123gmail.com") {
      user.fname = "Admin";
      saveData("admin_Token", "admin");
      navigate("/Admin/dashboard");
    } else {
      login_Check();
    }
  };
  const login_Check = () => {
    let payload = {
      email,
      password,
    };
    setLoading(true);
    axios
      .post("https://talented-slacks-ox.cyclic.app/users/login", payload) // need to add api for login
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.data == "Something went wrong, please try again later") {
          alert("email or password wrong login again");
        } else {
          console.log(res.data);
          let { token } = res.data;
          saveData("user_Token", token);
          alert("login Successful");
          navigate("/");
        }
      })
      .catch((err) => {
        setLoading(false);
        let { error } = err.response.data;
        console.log("data", err.response.data);
        alert(`${error}`);
      });
  };
  return (
    <div>
      <div className="student_login_parent" id="student_login_parent">
        <div className="loading_block">
          <BallTriangle
            height={100}
            width={200}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={loading}
          />
        </div>
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
