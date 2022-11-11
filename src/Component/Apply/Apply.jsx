import "./Apply.css";
export default function Apply() {
  return (
    <>
      <div className="a-wrapper">
        <div className="a-left">
          <img
            src="https://assets.interntheory.com/creative/Internship_left_course_add_01.png"
            alt=""
          />
        </div>
        <div className="a-right">
          <div className="a-right-information">
            <div className="a-right-top">
              <div className="a--rigth-top-img">
                <img
                  src="https://assets.interntheory.com/uploads/company/companylogos/59a1c42150057faa62f1a45e2dc030b60afe0065/e3d93fc8f3f719fdd76ff64e0a4e3a15e15d31dccom.jpg"
                  alt=""
                />
              </div>
              <div className="a--rigth-top-name">
                <h4>Content Writer</h4>
                <p className="a-sm-text">Sejal Exports</p>
                <p className="a-sm-text">Full Time Internship</p>
                <p className="a-sm-text">
                  Internship Category:{" "}
                  <span className="a-cat">Content Writing</span>{" "}
                </p>
              </div>
            </div>
            <div className="a-right-middle">
              <p>
                {" "}
                Openings: <span className="bold">1</span>
              </p>
              <p>
                Duration: <span className="bold">6 months</span>
              </p>
              <p>
                Start Date: <span className="bold">9th Nov 2022</span>
              </p>
              <p>
                Application Deadline: <span className="bold">9th Dec 2022</span>
              </p>
              <p>
                Stipend: <span className="bold">20000 - 25000 per month</span>
              </p>
            </div>
            <hr className="dashed" />
            <div className="a-right-bottom">
              <div className="a-content">
                <p className="bold">Internship Description:</p>
                <p className="a-sm-text a-sm-text-line"></p>
              </div>
              <div className="a-content">
                <p className="bold">Prefered Skills:</p>
                <div className="a-content-skills">Business Development</div>
              </div>
              <hr className="dahsed" />
              <div className="a-content">
                <p className="bold">Company Description:</p>
                <p className="a-sm-text a-sm-text-line">
                  About the Company: Home buying is one of the most important
                  milestones in the life of every Individual. At HomeCapital, we
                  believe that Home is the real Capital for a family and grows
                  in value across generations. Buying your first home early has
                  compounding effect on your family’s wealth, happier lives and
                  increased social security for you and your loved ones
                </p>
              </div>
              <div className="a-content">
                <p className="bold">Location:</p>
                <p className="a-sm-text a-sm-text-line">
                  602, 6 floor , Suratwala mark plazzo ,Suavespaces, opposite HP
                  petrol pump , hinjawadi- 411057, pune, 411057.
                </p>
              </div>
            </div>
            <button className="c-btn c-btn-light">Back to Internship</button>
            <button className="c-btn">Apply</button>
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
