import React from "react";
import "./Profile.css";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";
function Profile(props) {
  let userDetails = {
    name: "udhaya Prakash",
    gender: "male",
    DOB: "10-05-1997",
    Languages: "English",
    Hobbies: "Reading Books",
    Achievements: "N/A",
    Skills: "Java",
    Preferences: "software",
    Email_ID: "udhayaprakash122@gmail.com",
    PH: "9444052343",
    Google_Acc: "NA",
    FaceBook_Acc: "NA",
  };

  let Address = {
    City: "Chidambaram",
    State: "TamilNadu",
    PinCode: "608002",
  };
  let collage_work = {
    degree: "graduation",
    preferance: "Bachelor of Civil Engineering",
    college_name: "J.N.N Institute Of Engineering",
    experiance: "fresher",
  };
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
                  <p>{userDetails.name}</p>
                  <div className="profile_resumesection">
                    <button className="profile_resume_btn">View Resume</button>
                    <button className="profile_resume_btn-1">
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* PersonalDetails */}
            <p className="profile_personal">PersonalDetails</p>
            <div className="profile_personal_details">
              <ul className="profile_ul">
                <li className="profile_li">
                  <span className="profile_li_span_heading">Name:</span>
                  <span className="profile_li_span_heading_name">
                    {userDetails.name}
                  </span>
                </li>
                <li className="profile_li">
                  <span className="profile_li_span_heading">Gender:</span>
                  <span className="profile_li_span_heading_name">
                    {userDetails.gender}
                  </span>
                </li>
                <li className="profile_li">
                  <span className="profile_li_span_heading">DOB:</span>
                  <span className="profile_li_span_heading_name">
                    {userDetails.DOB}
                  </span>
                </li>
                <li className="profile_li">
                  <span className="profile_li_span_heading">Languages:</span>
                  <span className="profile_li_span_heading_name">
                    {userDetails.Languages}
                  </span>
                </li>
                <li className="profile_li">
                  <span className="profile_li_span_heading">Hobbies:</span>
                  <span className="profile_li_span_heading_name">
                    {userDetails.Hobbies}
                  </span>
                </li>
                <li className="profile_li">
                  <span className="profile_li_span_heading">Achievements:</span>
                  <span className="profile_li_span_heading_name">
                    {" "}
                    {userDetails.Achievements}
                  </span>
                </li>
                <li className="profile_li">
                  <span className="profile_li_span_heading">Skills:</span>
                  <span className="profile_li_span_heading_name">
                    {" "}
                    {userDetails.Skills}
                  </span>
                </li>
                <li className="profile_li">
                  <span className="profile_li_span_heading">Preferences:</span>
                  <span className="profile_li_span_heading_name">
                    {" "}
                    {userDetails.Preferences}
                  </span>
                </li>
              </ul>
            </div>
            <hr className="dashboard_dashedline"></hr>
            {/* Contact Details */}
            <p className="profile_personal">Contact Details</p>
            <div className="profile_personal_details">
              <ul className="profile_ul">
                <li className="profile_li">
                  <span className="profile_li_span_heading">Email ID:</span>
                  <span className="profile_li_span_heading_name">
                    udhayaprakash122@gmail.com
                  </span>
                </li>
                <li className="profile_li">
                  <span className="profile_li_span_heading">PH:</span>
                  <span className="profile_li_span_heading_name">
                    9444052343
                  </span>
                </li>
                <li className="profile_li">
                  <span className="profile_li_span_heading">Google Acc:</span>
                  <span className="profile_li_span_heading_name">NA</span>
                </li>
                <li className="profile_li">
                  <span className="profile_li_span_heading">FaceBook Acc:</span>
                  <span className="profile_li_span_heading_name">NA</span>
                </li>
              </ul>
            </div>
            <hr className="dashboard_dashedline"></hr>
            {/* Address Details */}
            <p className="profile_personal">Address Details</p>
            <div className="profile_personal_details">
              <ul className="profile_ul">
                <li className="profile_li">
                  <span className="profile_li_span_heading">Address</span>
                  <span className="profile_li_span_heading_name"></span>
                </li>
                <li className="profile_li">
                  <span className="profile_li_span_heading">City:</span>
                  <span className="profile_li_span_heading_name">
                    Chidambaram
                  </span>
                </li>
                <li className="profile_li">
                  <span className="profile_li_span_heading">State:</span>
                  <span className="profile_li_span_heading_name">
                    TamilNadu
                  </span>
                </li>
                <li className="profile_li">
                  <span className="profile_li_span_heading">PinCode:</span>
                  <span className="profile_li_span_heading_name">608002</span>
                </li>
              </ul>
            </div>
            <hr className="dashboard_dashedline"></hr>
            {/* Education Details */}
            <div className="profile_edcuation_details">
              <div className="profile_leftSide">
                <p className="profile_personal">Work Experience</p>
                <hr className="dashboard_personal"></hr>
                <p className="dashboard_personal_1">--</p>
                <p className="dashboard_personal_2">Fresher</p>
              </div>

              <div className="profile_RightSide">
                <div className="profile_leftSide">
                  <p className="profile_personal">Education Details</p>
                  <hr className="dashboard_personal"></hr>
                  <p className="dashboard_personal_1">Graduation</p>
                  <p className="dashboard_personal_2">
                    Bachelor of Civil Engineering
                  </p>
                  <p className="dashboard_personal_2">
                    J.N.N Institute Of Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile_leftside_bottom">
        <div className="profile_leftside_parent">
          <div className="profile_leftside_child">
            <img
              src="https://assets.interntheory.com/creative/default-images/guyProfile.jpg"
              alt="userimage"
            />
            <Link to="/dashboard">
              <p className="profile_leftside_child_profile">go to dashboard</p>
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
    </div>
  );
}

export default Profile;
