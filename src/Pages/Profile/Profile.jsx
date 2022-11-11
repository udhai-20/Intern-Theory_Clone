import React from "react";
import "./Profile.css";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";
function Profile(props) {
  return (
    <div>
      <div className="profile_wrapper">
        <div className="profile_leftside">
          <div className="profile_leftside_parent">
            <div className="profile_leftside_child">
              <img
                src="https://assets.interntheory.com/creative/default-images/guyProfile.jpg"
                alt="userimage"
              />
              <Link to="/dashboard">
                <p className="profile_leftside_child_profile">
                  go to dashboard
                </p>
              </Link>

              <p className="profile_leftside_name">Udhaya prakash</p>
            </div>
            <hr className="profile_leftside_line"></hr>
            <div className="profile_leftside_contact">
              <div className="profile_leftside_contact_email">
                <span className="profile_leftside_contact_email_color">
                  <AiOutlineMail />
                </span>
                <p>udhayaprakash122@gmail.com</p>
              </div>
              <div className="profile_leftside_contact_email">
                <span className="profile_leftside_contact_email_color">
                  <AiFillPhone />
                </span>
                <p>+91-9444052343</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile_rightside">
          <div className="profile_rightside_inside">
            <div className="profile_rightside_user">
              <div className="profile_img">
                <img
                  className="profile_img_inside"
                  src="https://assets.interntheory.com/creative/default-images/guyProfile.jpg"
                  alt="userimage"
                />

                <div className="profile_name">
                  <p>udhaya Prakash</p>
                  <div className="profile_resumesection">
                    <button className="profile_resume_btn">View Resume</button>
                    <button className="profile_resume_btn-1">
                      DownloadResume
                    </button>
                  </div>
                </div>
              </div>

              {/* <div className="profile_top_right">
                <p>change password</p>
              </div> */}
            </div>
            <p className="profile_personal">PersonalDetails</p>
            <div className="profile_personal_details">
              <ul>
                <li className="profile_li">
                  <span>Name:</span>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
