import "./Courses.css";
// import { data } from "./data";
import CourseCard from "./CourseCard";
export default function Course() {
  const data = [
    {
      id: 1,
      image:
        "https://assets.interntheory.com/creative/courses/thumbnails/it.jpg",
      name: "IT Starter Pack (4 Courses)",
      desc: "Learn the most demanded skills in the IT industry today. Sig ...",
      oldPrice: "₹ 32999",
      newPrice: "₹ 15999",
      emi: "EMI Starting at ₹ 915/month",
    },
    {
      id: 2,
      image:
        "https://assets.interntheory.com/creative/courses/thumbnails/digital-marketing-course.png",
      name: "Digital Marketing Course",
      desc: "Learn the art of digital marketing. Sign up for this online ...",
      oldPrice: "₹ 11999",
      newPrice: "₹ 5999",
      emi: "EMI Starting at ₹ 343/month",
    },
    {
      id: 3,
      image:
        "https://assets.interntheory.com/creative/courses/thumbnails/data-analytics-r-programming-course.png",
      name: "Data Analytics With R Programming Course",
      desc: "Learn data science online. Join this online data analytics c ...",
      oldPrice: "₹ 11999",
      newPrice: "₹ 5999",
      emi: "EMI Starting at ₹ 343/month",
    },
    {
      id: 4,
      image:
        "https://assets.interntheory.com/creative/courses/thumbnails/web-development-course.png",
      name: "Web Development Course",
      desc: "Learn the art of web design and web development. Join this o ...",
      oldPrice: "₹ 7999",
      newPrice: "₹ 3999",
      emi: "EMI Starting at ₹ 229/month",
    },
    {
      id: 5,
      image:
        "https://assets.interntheory.com/creative/courses/thumbnails/tally-gst-course.png",
      name: "Tally + GST Course",
      desc: "Sign up for this online tally and gst course and learn how t ...",
      oldPrice: "₹ 7999",
      newPrice: "₹ 3999",
      emi: "EMI Starting at ₹ 229/month",
    },
    {
      id: 6,
      image:
        "https://assets.interntheory.com/creative/courses/thumbnails/android-app-development-kotlin-course.png",
      name: "Android App Development Using Kotlin Course",
      desc: "Learn the art of android app design and web development. Joi ...",
      oldPrice: "₹ 7999",
      newPrice: "₹ 3999",
      emi: "EMI Starting at ₹ 229/month",
    },
    {
      id: 7,
      image:
        "https://assets.interntheory.com/creative/courses/thumbnails/advanced-excel-course.png",
      name: "Advanced Excel Course",
      desc: "Master MS Excel. Take the online ms excel course and learn t ...",
      oldPrice: "₹ 5999",
      newPrice: "₹ 2999",
      emi: "EMI Starting at ₹ 172/month",
    },
    {
      id: 8,
      image:
        "https://assets.interntheory.com/creative/courses/thumbnails/r-programming-course.png",
      name: "R Programming Course",
      desc: "Learn r programming online. Sign up for this online r progra ...",
      oldPrice: "₹ 5999",
      newPrice: "₹ 2999",
      emi: "EMI Starting at ₹ 172/monthhelp_outline",
    },
  ];
  return (
    <div className="c-container">
      <div className="c-wrapper">
        <div className="c-img-container">
          <img
            className="c-img"
            src="https://assets.interntheory.com/creative/courses/listpage/Course-banner1.png"
            alt="Add"
          />
        </div>
        <div className="c-body-container">
          <div className="c-body-wrapper">
            <div className="c-body-texts">
              <h6 className="c-heading">Certified Online Courses</h6>
              <h6 className="c-body-para">
                Upgrade your skills with Intern Theory's online learning
                platform. Enrol for any certified online courses and get a step
                ahead of competition. Select from a range of skill based online
                courses and kickstart your career.
              </h6>
            </div>
            <div className="caurse-card-wrapper">
              {data.map((item) => (
                <CourseCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
