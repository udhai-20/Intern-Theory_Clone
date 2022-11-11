import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getApply } from "../../Redux/AppReducer/action";
import "./Apply.css";
export default function Apply() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer.applyData);
  useEffect(() => {
    dispatch(getApply(id));
  }, [id]);
  return (
    <>
      <div className="a-wrapper">
        <div className="a-left">
          <img
            src="https://assets.interntheory.com/creative/Internship_left_course_add_01.png"
            alt=""
          />
        </div>
        {data && (
          <div className="a-right">
            <div className="a-right-information">
              <div className="a-right-top">
                <div className="a--rigth-top-img">
                  <img src={data.image} alt={data.title} />
                </div>
                <div className="a--rigth-top-name">
                  <h4>{data.courseName} </h4>
                  <p className="a-sm-text">Sejal Exports</p>
                  <p className="a-sm-text">Full Time Internship</p>
                  <p className="a-sm-text">
                    Internship Category:{" "}
                    <span className="a-cat">{data.category}</span>{" "}
                  </p>
                </div>
              </div>
              <div className="a-right-middle">
                <p>
                  {" "}
                  Openings: <span className="bold">{data.quantity} </span>
                </p>
                <p>
                  Duration: <span className="bold">{data.duration} </span>
                </p>
                <p>
                  Start Date: <span className="bold">{data.startDate} </span>
                </p>
                <p>
                  Application Deadline:{" "}
                  <span className="bold">{data.deadline} </span>
                </p>
                <p>
                  Stipend: <span className="bold">{data.stipend} </span>
                </p>
              </div>
              <hr className="dashed" />
              <div className="a-right-bottom">
                <div className="a-content">
                  <p className="bold">Internship Description:</p>
                  <p className="a-sm-text a-sm-text-line">{data.idesc} </p>
                </div>
                <div className="a-content">
                  <p className="bold">Prefered Skills:</p>
                  <div className="a-content-skills">{data.category} </div>
                </div>
                <hr className="dahsed" />
                <div className="a-content">
                  <p className="bold">Company Description:</p>
                  <p className="a-sm-text a-sm-text-line">{data.companyDesc}</p>
                </div>
                <div className="a-content">
                  <p className="bold">Location:</p>
                  <p className="a-sm-text a-sm-text-line">{data.location}</p>
                </div>
              </div>
              <div className="a-btn-cont">
                <Link to="/internships">
                  <button className="c-btn c-btn-light">
                    Back to Internship
                  </button>
                </Link>

                <button className="c-btn">Apply</button>
              </div>
            </div>

            <div className="a-right-recomended">
              <p>Recommended Courses</p>
              <div className="a-recomended-content">
                <div className="a-recomended-img">
                  <img
                    src="https://assets.interntheory.com/creative/courses/thumbnails/digital-marketing-course.png"
                    alt=""
                  />
                </div>
                <div className="a-recomended-details">
                  <p className="bold">Digital Marketing Course</p>
                  <p className="a-sm-text">
                    Certified Course + Internship Assistance
                  </p>
                  <p className=" a-sm-text">
                    Use Coupon Code FIRSTCOURSE to{" "}
                    <span className="bold">get 20% off</span>
                  </p>
                </div>
                <div className="a-recomended-price bold">Rs. {5999}</div>
                <div></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="last-image">
        <img
          src="https://assets.interntheory.com/creative/Internship_left_course_add_01.png"
          alt=""
        />
      </div>
    </>
  );
}
