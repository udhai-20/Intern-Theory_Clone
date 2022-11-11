import React from "react";
import "./AdminDashBoard.css";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";

function AdminDashBoard(props) {
  return (
    <div>
      <div className="dashboard_wrapper">
        <div className="dashboard_leftside">
          <div className="dashboard_leftside_parent">
            <div className="dashboard_leftside_child">
              <img
                src="https://assets.interntheory.com/creative/default-images/guyProfile.jpg"
                alt="userimage"
              />

              <p className="dashboard_leftside_child_profile">Admin</p>

              <p className="dashboard_leftside_name">Udhaya prakash</p>
            </div>
            <hr className="dashboard_leftside_line"></hr>
            <div className="dashboard_leftside_contact">
              <div className="dashboard_leftside_contact_email">
                <span className="dashboard_leftside_contact_email_color">
                  <AiOutlineMail />
                </span>
                <p>udhayaprakash122@gmail.com</p>
              </div>
              <div className="dashboard_leftside_contact_email">
                <span className="dashboard_leftside_contact_email_color">
                  <AiFillPhone />
                </span>
                <p>+91-9444052343</p>
              </div>
            </div>
          </div>
        </div>
        {/* //right side */}
        <div className="dashboard_rightside">
          <div className="dashboard_rightside_top ">
            <p>
              Still in college and want to start a business already? Become our
              affiliate and kickstart your entrepreneurial journey. Click here
              for details
            </p>
          </div>
          <div className="dashboard_rightside_RecomendedCourse">
            <h5>Intenship Section</h5>
            <div className="dashboard_rightside_RecomendedCoursesection">
              <div className="dashboard_rightside_Recom_prod">
                <img src="https://assets.interntheory.com/creative/courses/thumbnails/digital-marketing-course.png" />
                <p> Add Intenships Datas </p>
              </div>
              <div className="dashboard_rightside_Recom_prod">
                <img src="https://assets.interntheory.com/creative/courses/thumbnails/stock-market-course.png" />
                <p>Update Intenships Datas</p>
              </div>
              <div className="dashboard_rightside_Recom_prod">
                <img src="https://assets.interntheory.com/courses/banner/1573120767.png" />
                <p>Delete Intenship Datas</p>
              </div>
            </div>
            <h5>Course Sections</h5>
            <div className="dashboard_rightside_Recom_prod">
              <img src="https://assets.interntheory.com/uploads/company/logos/bf3174743fe71c1e3028caabc90044f486d5bc7b.jpg" />
              <p> Full Stack Web Development </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dasboard_bottom_section">
        <div className="dasboard_bottom_left_section"></div>
        <div className="dasboard_bottom_right_section">
          <div className="dasboard_bottom_right_top">
            <div className="dasboard_bottom_right_twosections">
              <p>myApplication</p>
              <p>mycourses</p>
            </div>

            <div></div>
          </div>
          <hr className="dashboard_bottom_line"></hr>
          <div className="dasboard_bottom_right_below">
            <div></div>
            <div className="dasboard_bottom_right_twosections_bottom">
              <span>
                SortBy:
                <select className="dashboard_select">
                  <option>Select Sort</option>
                  <option>Latest First</option>
                  <option>Oldest First</option>
                </select>
              </span>
              <span>
                Show:
                <select className="dashboard_select">
                  <option>All</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                  <option>Selected</option>
                  <option>Shortlisted</option>
                </select>
              </span>
            </div>
          </div>
          <div className="dashboard_FormStatus">
            <div className="dashboard_FormStatus_leftside">
              <div className="dashboard_FormStatus_leftside_img">
                <img
                  className="dashboard_img"
                  src="https://assets.interntheory.com/uploads/company/logos/1d75708bc583f58cdf96401fb790d7d6a904b79e.jpg"
                />
              </div>
              <div className="dashboard_rtext">
                <p>Business Developement Intern</p>
                <p>Digivance Solutions</p>
                <p>Stipend: ₹ 9000 per month</p>
              </div>
            </div>
            <div className="dashboard_FormStatus_rightside">
              <p className="dashboard_FormStatus_rightside_p1">REJECTED</p>
              <p>VIEW APPLICATION</p>
            </div>
          </div>

          <div style={{ width: "96%", margin: "auto" }}>
            <hr className="dashboard_dashedline"></hr>
          </div>
          <div className="dashboard_FormStatus">
            <div className="dashboard_FormStatus_leftside">
              <div className="dashboard_FormStatus_leftside_img">
                <img
                  className="dashboard_img"
                  src="https://assets.interntheory.com/uploads/company/companylogos/62362fbf882221470f099d8d0a119df93ce19831/7e34b7356b30b3696d14fcab94c6e8989a42fd69com.jpg"
                />
              </div>
              <div className="dashboard_rtext">
                <p>Sales Officer</p>
                <p>Laugh Out Loud</p>
                <p>Stipend: ₹ 3000 per month</p>
              </div>
            </div>
            <div className="dashboard_FormStatus_rightside">
              <p className="dashboard_FormStatus_rightside_green">SELECTED</p>
              <p>VIEW APPLICATION</p>
            </div>
          </div>
          <div style={{ width: "96%", margin: "auto" }}>
            <hr className="dashboard_dashedline"></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
