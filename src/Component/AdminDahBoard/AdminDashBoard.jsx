import React, { useEffect } from "react";
import "./AdminDashBoard.css";
import {
  AiOutlineMail,
  AiFillPhone,
  AiFillFileAdd,
  AiFillDatabase,
  AiFillAccountBook,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  getCourseFailure,
  getCourseRequest,
  getCourseSuccess,
  SearchFailure,
  SearchRequest,
  SearchSuccess,
} from "../../Redux/AppReducer/action";

function AdminDashBoard(props) {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.AppReducer);
  const getIntern = () => {
    dispatch(SearchRequest());
    axios
      .get(`https://intertheory.onrender.com/interships`)
      .then((res) => dispatch(SearchSuccess(res.data)))
      .catch((err) => {
        console.log("err:", err);
        dispatch(SearchFailure());
      });
  };
  const getCourses = () => {
    dispatch(getCourseRequest());
    axios
      .get(`https://intertheory.onrender.com/courses`)
      .then((res) => dispatch(getCourseSuccess(res.data)))
      .catch((err) => {
        console.log("err:", err);
        dispatch(getCourseFailure());
      });
  };
  useEffect(() => {
    getIntern();
    getCourses();
  }, []);

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
            <p>Admin Dashboard</p>
          </div>
          <div className="dashboard_rightside_RecomendedCourse">
            <h5>Intenship Section</h5>
            <div className="dashboard_rightside_RecomendedCoursesection">
              <div className="dashboard_rightside_Recom_prod">
                <Link to="/Admin/addintern">
                  <AiFillFileAdd className="admin_icons_styles" />
                </Link>

                <p className="admin_icons_text"> Add Intenships Datas </p>
              </div>
              <div className="dashboard_rightside_Recom_prod">
                <Link to="/Admin/inerndatas">
                  <AiFillDatabase className="admin_icons_styles" />
                </Link>
                <p className="admin_icons_text">Intenships Datas</p>
              </div>
              {/* <div className="dashboard_rightside_Recom_prod">
                <img src="https://assets.interntheory.com/courses/banner/1573120767.png" />
                <p>Delete Intenship Datas</p>
              </div> */}
            </div>
            <h5>Course Sections</h5>
            <div className="dashboard_rightside_RecomendedCoursesection">
              <div className="dashboard_rightside_Recom_prod">
                <Link to="/Admin/addcourse">
                  <AiFillFileAdd className="admin_icons_styles" />
                </Link>
                <p className="admin_icons_text">Add Course Datas</p>
              </div>
              <div className="dashboard_rightside_Recom_prod">
                <Link to="/Admin/inerndatas">
                  <AiFillDatabase className="admin_icons_styles" />
                </Link>
                <p className="admin_icons_text">Course Datas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dasboard_bottom_section">
        <div className="dasboard_bottom_left_section"></div>
        <div className="dasboard_bottom_right_section">
          <div className="dasboard_bottom_right_top">
            <div className="dasboard_bottom_right_twosections">
              <p>Intenships Datas</p>
              <p>mycourses datas</p>
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
                <AiFillAccountBook className="dashbord_icons_bot" />
              </div>
              <div className="dashboard_rtext">
                <p>Total Internship Datas</p>
              </div>
            </div>
            <div className="dashboard_FormStatus_rightside">
              <p className="dashboard_FormStatus_rightside_p1">
                Total Count:{data.searchData.length}
              </p>
            </div>
          </div>

          <div style={{ width: "96%", margin: "auto" }}>
            <hr className="dashboard_dashedline"></hr>
          </div>
          <div className="dashboard_FormStatus">
            <div className="dashboard_FormStatus_leftside">
              <div className="dashboard_FormStatus_leftside_img">
                <AiFillAccountBook className="dashbord_icons_bot" />
              </div>
              <div className="dashboard_rtext">
                <p>Total Courses Datas</p>
              </div>
            </div>
            <div className="dashboard_FormStatus_rightside">
              <p className="dashboard_FormStatus_rightside_p1">
                Total Count:{data.courseData.length}
              </p>
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
