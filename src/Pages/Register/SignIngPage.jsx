import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import axios from "axios";
const initial = {
  fname: "",
  lname: "",
  email: "",
  password: "",
};
// mobile: "",
//   city: "",
//   preference: "",
function SigningPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(initial);
  const handleCatchvalue = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const { fname, lname, email, password } = user;
  console.log("loading-top:", loading);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fname && lname && email && password) {
      // localStorage.setItem("user_id", JSON.stringify(user));
      let payload = {
        fname,
        lname,
        email,
        password,
      };
      console.log(payload);
      setLoading(true);
      axios
        .post(`https://talented-slacks-ox.cyclic.app/users/signup`, payload)
        .then((res) => {
          setLoading(false);
          if (res.data == "email Already Exists") {
            alert("email Already Exists");
          } else {
            alert("signup Successful");
            navigate("/login");
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log("loading-bottom:", loading);
          console.log("failure", err.response);
          console.log("err", err);
        });
    } else {
      alert("Fill all the input fields");
    }
  };

  return (
    <div className="register" id="register">
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
      <div className="register_main">
        <p className="heading">Register Candidate</p>
        <p className="para">Already have an account? Sign in</p>
        <div className="background_red">
          <p>
            If you are a company looking to hire interns, please register as a
            company by clicking here.
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
        <div className="text_center">OR</div>
        <div>
          <form id="register_form" autoComplete="off">
            <input
              type="text"
              name="fname"
              value={fname}
              onChange={handleCatchvalue}
              id="fname"
              placeholder="First Name*"
            />
            <input
              type="text"
              name="lname"
              value={lname}
              onChange={handleCatchvalue}
              id="lname"
              placeholder="Last Name*"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleCatchvalue}
              id="email"
              placeholder="Email*"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleCatchvalue}
              id="password"
              placeholder="Password*"
            />
            <div id="hidden">
              <input
                type="number"
                name="mobile"
                // value={mobile}
                // onChange={handleCatchvalue}
                id="mobile"
                placeholder="Mobile Number*"
              />
              <div>
                <input
                  type="text"
                  name="city"
                  // value={city}
                  // onChange={handleCatchvalue}
                  id="city"
                  placeholder="Select City*"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="preference"
                  // value={preference}
                  // onChange={handleCatchvalue}
                  id="preference"
                  placeholder="Preference*"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="find"
                  id="find"
                  placeholder="How did you find us?*"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="looking"
                  id="looking"
                  placeholder="What are you looking for?*"
                />
              </div>

              <input
                type="text"
                name="affilation"
                id="affilation"
                placeholder="Affiliate Code (if any)*"
              />
            </div>
            <button
              id="next_btn"
              style={{
                backgroundColor: "red",
                padding: "10px 20px",
                color: "white",
              }}
              onClick={handleSubmit}
            >
              NEXT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SigningPage;
