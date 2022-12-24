import React from "react";
import "./DashBoard.css";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function DashBoard(props) {
  let loginRes = useSelector((state) => state.AuthReducer);
  // console.log("loginRes:", loginRes);
  return (
    <div>
      <div className="userdashboard_wrapper">
        <div className="userdashboard_leftside">
          <div className="userdashboard_leftside_parent">
            <div className="userdashboard_leftside_child">
              <img
                src="https://assets.interntheory.com/creative/default-images/guyProfile.jpg"
                alt="userimage"
              />
              <Link to="/profile" className="profile">
                <p className="userdashboard_leftside_child_profile">
                  My Profile
                </p>
              </Link>

              <p className="userdashboard_leftside_name">Udhaya prakash</p>
            </div>
            <hr className="userdashboard_leftside_line"></hr>
            <div className="userdashboard_leftside_contact">
              <div className="userdashboard_leftside_contact_email">
                <span className="userdashboard_leftside_contact_email_color">
                  <AiOutlineMail />
                </span>
                <p>udhayaprakash122@gmail.com</p>
              </div>
              <div className="userdashboard_leftside_contact_email">
                <span className="userdashboard_leftside_contact_email_color">
                  <AiFillPhone />
                </span>
                <p>+91-9444052343</p>
              </div>
            </div>
          </div>
        </div>
        {/* //right side */}
        <div className="userdashboard_rightside">
          <div className="userdashboard_rightside_top ">
            <p>
              Still in college and want to start a business already? Become our
              affiliate and kickstart your entrepreneurial journey. Click here
              for details
            </p>
          </div>
          <div className="userdashboard_rightside_RecomendedCourse">
            <h5>Recomended Section</h5>
            <div className="userdashboard_rightside_RecomendedCoursesection">
              <div className="userdashboard_rightside_Recom_prod">
                <img src="https://assets.interntheory.com/creative/courses/thumbnails/digital-marketing-course.png" />
                <p> Digital Marketing Course </p>
              </div>
              <div className="userdashboard_rightside_Recom_prod">
                <img src="https://assets.interntheory.com/creative/courses/thumbnails/stock-market-course.png" />
                <p> Stock Market Course</p>
              </div>
              <div className="userdashboard_rightside_Recom_prod">
                <img src="https://assets.interntheory.com/courses/banner/1573120767.png" />
                <p>Offline Tally+GST Course</p>
              </div>
            </div>
            <h5>Recommended internships</h5>
            <div className="userdashboard_rightside_Recom_prod">
              <img src="https://assets.interntheory.com/uploads/company/logos/bf3174743fe71c1e3028caabc90044f486d5bc7b.jpg" />
              <p> Full Stack Web Development </p>
            </div>
          </div>
        </div>
      </div>
      {/* ///bottom of userdashboard */}
      <div className="userdashboard_bottom_section">
        <div className="userdashboard_bottom_left_section"></div>
        <div className="userdashboard_bottom_right_section">
          <div className="userdashboard_bottom_right_top">
            <div className="userdashboard_bottom_right_twosections">
              <p>myApplication</p>
              <p className="mycourse">mycourses</p>
            </div>

            <div></div>
          </div>
          <hr className="userdashboard_bottom_line"></hr>
          <div className="userdashboard_bottom_right_below">
            <div></div>
            <div className="userdashboard_bottom_right_twosections_bottom">
              <span>
                SortBy:
                <select className="userdashboard_select">
                  <option>Select Sort</option>
                  <option>Latest First</option>
                  <option>Oldest First</option>
                </select>
              </span>
              <span>
                Show:
                <select className="userdashboard_select">
                  <option>All</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                  <option>Selected</option>
                  <option>Shortlisted</option>
                </select>
              </span>
            </div>
          </div>
          <div className="userdashboard_FormStatus">
            <div className="userdashboard_FormStatus_leftside">
              <div className="userdashboard_FormStatus_leftside_img">
                <img
                  className="userdashboard_img"
                  src="https://assets.interntheory.com/uploads/company/logos/1d75708bc583f58cdf96401fb790d7d6a904b79e.jpg"
                />
              </div>
              <div className="userdashboard_rtext">
                <p>Business Developement Intern</p>
                <p>Digivance Solutions</p>
                <p>Stipend: ₹ 9000 per month</p>
              </div>
            </div>
            <div className="userdashboard_FormStatus_rightside">
              <p className="userdashboard_FormStatus_rightside_p1">REJECTED</p>
              <p>VIEW APPLICATION</p>
            </div>
          </div>

          <div style={{ width: "96%", margin: "auto" }}>
            <hr className="userdashboard_dashedline"></hr>
          </div>
          <div className="userdashboard_FormStatus">
            <div className="userdashboard_FormStatus_leftside">
              <div className="userdashboard_FormStatus_leftside_img">
                <img
                  className="userdashboard_img"
                  src="https://assets.interntheory.com/uploads/company/companylogos/62362fbf882221470f099d8d0a119df93ce19831/7e34b7356b30b3696d14fcab94c6e8989a42fd69com.jpg"
                />
              </div>
              <div className="userdashboard_rtext">
                <p>Sales Officer</p>
                <p>Laugh Out Loud</p>
                <p>Stipend: ₹ 3000 per month</p>
              </div>
            </div>
            <div className="userdashboard_FormStatus_rightside">
              <p className="userdashboard_FormStatus_rightside_green">
                SELECTED
              </p>
              <p>VIEW APPLICATION</p>
            </div>
          </div>
          <div style={{ width: "96%", margin: "auto" }}>
            <hr className="userdashboard_dashedline"></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
