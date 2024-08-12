import React, { useEffect, useState } from "react";
import styles from "./Courses.module.css";
import Model from "../../ModelComponent/Model";
import { useDispatch, useSelector } from "react-redux";
import { openModal, openModalInCourse } from "../../Redux/Reducers/CreateSlice";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SelectedCategory } from "../../Redux/Reducers/CreateSlice";
import HashLoader from "react-spinners/HashLoader";
// import Aos from "aos";
// import "aos/dist/aos.css";
import { Star } from "../Star";
import { HiOutlineUsers } from "react-icons/hi2";
import { WiTime7 } from "react-icons/wi";
import Lottie from "lottie-react";
import DigitalMarketing1 from "../../DigitalMarketing1.json";
import SEO from "../../SEO.json";
import website from "../../website.json";
import graphic from "../../graphic.json";
import Data1 from "../../Data22.json";
import excel from "../../excel.json";
import SMM from "../../SMM.json";
import { IoArrowRedo } from "react-icons/io5";

const animations = [
  "./Images/11feedback.jpg",
  "./Images/22Cerficate.webp",
  "./Images/33Peertopeer.avif",
];

const a = {
  "Advanced Accounting": [excel],
  "Web Development": [website],
  "Graphic Designing": [graphic],
  "Data Analytics": [Data1],
  // Tally: ["./Images/Maam.JPG", "./Images/22Cerficate.webp"],
  "Digital Marketing": [DigitalMarketing1, SMM, SEO],
};

function getUniqueCategories(courseDAta, selectedType) {
  let category = [];

  courseDAta.map((course) => {
    let flag = true;

    for (let i = 0; i < category.length; i++) {
      if (course?.categoryID?._id === category[i]?._id) {
        flag = false;
        break;
      }
    }

    if (flag) category?.push(course?.categoryID);
  });

  return category;
}

const Courses = () => {
  const { isOpen } = useSelector((select) => select?.modal);
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noOfElements, setNoOfElemets] = useState(4);
  const [categoryId, setCategoryID] = useState("");
  const [des, setDes] = useState(1);
  const { category } = useSelector((Select) => Select?.modal);

  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const Navigate = useNavigate();
  const { hash } = useLocation();

  // useEffect(() => {
  //   Aos.init({});
  //   Aos.refresh();
  // }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  // useEffect(() => {
  //   if (hash === "#course") {
  //     console.log(hash);
  //     const element = document.getElementById(hash.substring(1));
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, [hash]);

  // console.log("courseDAta", courseData);

  const dataLists = [
    {
      image: "Images/11course.jpg",
      title: "Digital Marketing",
    },
    {
      image: "Images/22course.png",
      title: "Advance Excel",
    },
    {
      image: "Images/22course.png",
      title: "Canva",
    },
    {
      image: "Images/22course.png",
      title: "Tally",
    },
    {
      image: "Images/33course.jpg",
      title: "Digital marketing",
    },
    {
      image: "Images/44course.jpeg",
      title: "Mobile Application",
    },
    {
      image: "Images/44course.jpeg",
      title: "Mobile Application",
    },
    {
      image: "Images/44course.jpeg",
      title: "Mobile Application",
    },
  ];

  useEffect(() => {
    GetData();
    handleCategorySelect("Digital Marketing");
  }, []);

  // http://localhost:3000
  // http://localhost:3000
  // http://localhost:3000

  const GetData = () => {
    setLoading(true);
    fetch("http://localhost:3000/courses/allcourses", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCourseData(data);
        // console.log("courseData", courseData);

        // const types = Array.from(
        //   new Set(data.map((course) => course?.categoryID?.type))
        // );
        setLoading(false);
        // setTypes(types);
        // console.log("type lkahdkid wkqjdbqwd ", types);
        // setSelectedType(types[0]);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
      });
  };

  const filteredCourses = courseData.filter(
    (course) => course.categoryID.name === category
  );
  const firstTwoCourses = filteredCourses.slice(0, 2);
  const categories = getUniqueCategories(courseData, selectedType);
  // console.log("categories", categories);

  // const categoryMap = new Map();

  // // Filter courses by the selected type and group them by category
  // courseData
  //   .filter((course) => course.categoryID.type === selectedType)
  //   .forEach((course) => {
  //     const category = course.categoryID;
  //     if (!categoryMap.has(category.name)) {
  //       categoryMap.set(category.name, { ...category, courseData: [] });
  //     }
  //     const categoryItem = categoryMap.get(category.name);
  //     categoryItem.courseData.push(course);
  //   });

  // const categories = Array.from(categoryMap.values());

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    // setSelectedCategory("");
  };

  const handleCategorySelect = (category) => {
    dispatch(SelectedCategory(category));
  };

  // console.log("categoryId", categoryId);

  const slice = categories.slice(0, noOfElements);

  const loadmore = () => {
    setNoOfElemets(noOfElements + noOfElements);
  };

  // console.log("===========", categories);

  return (
    <div
      className={styles.MainContainer}
      id="course"
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
      data-aos="fade-right"
    >
      {loading ? (
        <HashLoader size={100} color="#fc0067" />
      ) : (
        <div>
          <h1 className={styles.TopTextHeading}>
            Explore Our Diverse Range of
            <span
              style={{ color: "#fc0067", marginLeft: "10px", marginTop: "2px" }}
            >
              Courses
            </span>
          </h1>
          {/* <div className={styles.navbarunderCourse}>
            {types.map((type) => {
              console.log("type", type);
              return (
                <div
                  // className={styles.TypeConatiner}
                  className={
                    selectedType === type
                      ? styles.TypeConatinerActive
                      : styles.TypeConatiner
                  }
                  key={type}
                  onClick={() => handleTypeSelect(type)}
                >
                  <h3 className={styles.TypeText}>{type}</h3>
                </div>
              );
            })}
          </div> */}
          <div className={styles.CategoryNameDivTheMain}>
            {categories.map((list) => {
              return (
                <>
                  {list && list !== null ? (
                    <div
                      className={
                        category === list.name
                          ? styles.CategoryNameDivActive
                          : styles.CategoryNameDiv
                      }
                      key={list}
                      onClick={() => handleCategorySelect(list?.name)}
                    >
                      <h1 className={styles.CategoryName}>{list?.name}</h1>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </div>
          {courseData && courseData?.length > 0 ? (
            <div className={styles.TopContainer}>
              {/* <Carousel responsive={responsive} className={styles.crololo}> */}
              <>
                {/* {list && list !== null ? ( */}
                {category === "Web Development" && (
                  <div className={styles.NVOuterMain}>
                    <div className={styles.NVTopText}>
                      <h1>Web Development</h1>
                      <p>
                        Master Front-End and Back-End Technologies to Build
                        Stunning, Responsive Websites
                      </p>
                    </div>
                    <div className={styles.NVTheLeftRightMain}>
                      <div className={styles.NVTheLeft}>
                        <h3 className={styles.AVrTextNV}>
                          Avg. Base Salary in india
                        </h3>
                        <div className={styles.LeftNVAvarageSalary}>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Frontend Developer</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              ₹4L - ₹10L
                            </div>
                          </div>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Backend Developer</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              ₹3L - ₹8L
                            </div>
                          </div>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Full Stack Developer</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              ₹5L - ₹12L
                            </div>
                          </div>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>DevOps Engineer</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              ₹6L - ₹14L
                            </div>
                          </div>
                        </div>

                        <div className={styles.JobDiv}>
                          <div className={styles.JobDivSameSame}>
                            <p className={styles.NumberTextNV}>1,30,000</p>
                            <p>Job Opnening in india</p>
                          </div>
                          <div className={styles.JobDivSameSame11}>
                            <p className={styles.NumberTextNV}>16%</p>
                            <p>Project 10+ years growth</p>
                          </div>
                        </div>
                        <div
                        // style={{ maxWidth: "1000px", overflow: "visible" }}
                        >
                          <Carousel
                            responsive={responsive}
                            showDots={false}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            infinite={true}
                            arrows={false}
                          >
                            <div className={styles.studentView}>
                              <h4 style={{ color: "#fc0067" }}>Student View</h4>
                              <p>
                                Advanced tax accounting courses deepen expertise
                                in corporate taxation, international tax
                                planning, and compliance strategies, preparing
                                professionals for complex tax scenarios in
                                diverse business environments.
                              </p>
                              <h5 style={{ color: "#fc0067" }}>Anmol Preet</h5>
                            </div>
                            <div className={styles.studentView}>
                              <h4 style={{ color: "#fc0067" }}>Student View</h4>
                              <p>
                                Advanced tax accounting courses deepen expertise
                                in corporate taxation, international tax
                                planning, and compliance strategies, preparing
                                professionals for complex tax scenarios in
                                diverse business environments.
                              </p>
                              <h5 style={{ color: "#fc0067" }}>Rohit Jain</h5>
                            </div>
                            <div className={styles.studentView}>
                              <h4 style={{ color: "#fc0067" }}>Student View</h4>
                              <p>
                                Advanced tax accounting courses deepen expertise
                                in corporate taxation, international tax
                                planning, and compliance strategies, preparing
                                professionals for complex tax scenarios in
                                diverse business environments.
                              </p>
                              <h5 style={{ color: "#fc0067" }}>
                                Abhishek Dhyani
                              </h5>
                            </div>
                          </Carousel>
                        </div>
                      </div>
                      <div className={styles.NVTheRight}>
                        <h4 className={styles.RecommendedText}>
                          Recommended Professional Courses
                        </h4>
                        <div className={styles.themainCourseDiv}>
                          {firstTwoCourses.map((list, ind) => {
                            return (
                              <div
                                className={styles.Course1}
                                style={{ position: "relative" }}
                              >
                                <img
                                  src="./Images/teacherInput.png"
                                  style={{
                                    position: "absolute",
                                    top: "30px",
                                    left: "-20px",
                                    height: "170px",
                                    // width: "100px",
                                    zIndex: "200",
                                    // overflow: "visible",
                                  }}
                                />
                                <div className={styles.CourseImageDivNV}>
                                  <Lottie
                                    animationData={a[category][ind]}
                                    loop={true}
                                    color="blue"
                                    className={styles.CourseImageNV}
                                  />
                                </div>

                                <div>
                                  <p className={styles.CourseTittleNV}>
                                    {list?.name}
                                  </p>
                                  <div className={styles.CourseStartConrainer}>
                                    <p>{list?.rating}</p>
                                    <p
                                      style={{
                                        color: "#fc0067",
                                        fontSize: "18px",
                                      }}
                                    >
                                      <Star
                                        rating={list?.rating}
                                        fontSize="1rem"
                                      />
                                    </p>
                                    <p>{list?.review}</p>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      margin: "10px 0px",
                                      padding: "0px 15px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                      }}
                                    >
                                      <HiOutlineUsers color="gray" />
                                      <p>99 Live classes</p>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                      }}
                                    >
                                      <WiTime7 color="gray" />
                                      <p>5 Months</p>
                                    </div>
                                  </div>
                                  <div className={styles.buttonMainDiv}>
                                    <div
                                      className={styles.buttonContainer}
                                      style={{
                                        backgroundColor: "#fc0067",
                                        color: "white",
                                      }}
                                      onClick={() =>
                                        dispatch(openModal("registration"))
                                      }
                                    >
                                      Apply Now
                                    </div>
                                    <Link
                                      className={styles.buttonContainer}
                                      style={{
                                        backgroundColor: "#fc0067",
                                        textDecoration: "none",
                                        color: "white",
                                      }}
                                      to={`/CourseDetail/${list._id}`}
                                    >
                                      View Course
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <Link
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "end",
                            marginTop: "40px",
                            color: "blue",
                            alignItems: "center",
                            gap: "5px",
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                          to={`/course/${"Web Development"}`}
                        >
                          <h3
                            style={{ fontWeight: "500", cursor: "pointer" }}
                            className={styles.ExploreTextCourse}
                          >
                            Explore All Courses
                          </h3>
                          <IoArrowRedo />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                {category === "Digital Marketing" && (
                  <div className={styles.NVOuterMain}>
                    <div className={styles.NVTopText}>
                      <h1>Digital Marketing</h1>
                      <p>
                        Master SEO, Content Marketing, Social Media, PPC, and
                        Analytics for Online Success!
                      </p>
                    </div>
                    <div className={styles.NVTheLeftRightMain}>
                      <div className={styles.NVTheLeft}>
                        <h3 className={styles.AVrTextNV}>
                          Avg. Base Salary in india
                        </h3>
                        <div className={styles.LeftNVAvarageSalary}>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>HR Consultant</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              ₹6L - ₹13L
                            </div>
                          </div>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Digital Marketing Manager</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              ₹6L - ₹13L
                            </div>
                          </div>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Social Media Manager</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              ₹3L - ₹5L
                            </div>
                          </div>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Content Marketer</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              ₹4L - ₹8L
                            </div>
                          </div>
                        </div>

                        <div className={styles.JobDiv}>
                          <div className={styles.JobDivSameSame}>
                            <p className={styles.NumberTextNV}>1,30,000</p>
                            <p>Job Opnening in india</p>
                          </div>

                          <div className={styles.JobDivSameSame11}>
                            <p className={styles.NumberTextNV}>16%</p>
                            <p>Project 10+ years growth</p>
                          </div>
                        </div>

                        {/* <div className={styles.studentView}>
                          <h4 style={{ color: "#fc0067" }}>Student View</h4>
                          <p>
                            Advanced tax accounting courses deepen expertise in
                            corporate taxation, international tax planning, and
                            compliance strategies, preparing professionals for
                            complex tax scenarios in diverse business
                            environments.
                          </p>
                          <h5 style={{ color: "#fc0067" }}>Rohit Jain</h5>
                        </div> */}
                        <div>
                          <Carousel
                            responsive={responsive}
                            showDots={false}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            infinite={true}
                            arrows={false}
                          >
                            <div className={styles.studentView}>
                              <h4 style={{ color: "#fc0067" }}>Student View</h4>
                              <p>
                                Advanced tax accounting courses deepen expertise
                                in corporate taxation, international tax
                                planning, and compliance strategies, preparing
                                professionals for complex tax scenarios in
                                diverse business environments.
                              </p>
                              <h5 style={{ color: "#fc0067" }}>Anmol Preet</h5>
                            </div>
                            <div className={styles.studentView}>
                              <h4 style={{ color: "#fc0067" }}>Student View</h4>
                              <p>
                                Advanced tax accounting courses deepen expertise
                                in corporate taxation, international tax
                                planning, and compliance strategies, preparing
                                professionals for complex tax scenarios in
                                diverse business environments.
                              </p>
                              <h5 style={{ color: "#fc0067" }}>Rohit Jain</h5>
                            </div>
                            <div className={styles.studentView}>
                              <h4 style={{ color: "#fc0067" }}>Student View</h4>
                              <p>
                                Advanced tax accounting courses deepen expertise
                                in corporate taxation, international tax
                                planning, and compliance strategies, preparing
                                professionals for complex tax scenarios in
                                diverse business environments.
                              </p>
                              <h5 style={{ color: "#fc0067" }}>
                                Abhishek Dhyani
                              </h5>
                            </div>
                          </Carousel>
                        </div>
                      </div>
                      <div className={styles.NVTheRight}>
                        <h4 className={styles.RecommendedText}>
                          Recommended Professional Courses
                        </h4>
                        <div
                          style={{ gap: "20px" }}
                          className={styles.themainCourseDiv}
                        >
                          {firstTwoCourses.map((list, ind) => {
                            return (
                              <div
                                className={styles.Course1}
                                style={{ position: "relative" }}
                              >
                                <img
                                  src="./Images/teacherInput.png"
                                  style={{
                                    position: "absolute",
                                    top: "30px",
                                    left: "-50px",
                                    height: "170px",
                                    // width: "100px",
                                    zIndex: "200",
                                    // overflow: "visible",
                                  }}
                                />
                                <div className={styles.CourseImageDivNVtwo}>
                                  <Lottie
                                    animationData={a[category][ind]}
                                    loop={true}
                                    color="blue"
                                    className={styles.CourseImageNV}
                                  />
                                </div>

                                <div>
                                  <p className={styles.CourseTittleNV}>
                                    {list?.name}
                                  </p>
                                  <div className={styles.CourseStartConrainer}>
                                    <p>{list?.rating}</p>
                                    <p
                                      style={{
                                        color: "#fc0067",
                                        fontSize: "18px",
                                      }}
                                    >
                                      <Star
                                        rating={list?.rating}
                                        fontSize="1rem"
                                      />
                                    </p>
                                    <p>{list?.review}</p>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      margin: "10px 0px",
                                      padding: "0px 15px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                      }}
                                    >
                                      <HiOutlineUsers color="gray" />
                                      <p>99 Live classes</p>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                      }}
                                    >
                                      <WiTime7 color="gray" />
                                      <p>5 Months</p>
                                    </div>
                                  </div>
                                  <div className={styles.buttonMainDiv}>
                                    <div
                                      className={styles.buttonContainer}
                                      style={{
                                        backgroundColor: "#fc0067",
                                        color: "white",
                                      }}
                                      onClick={() =>
                                        dispatch(openModal("registration"))
                                      }
                                    >
                                      Apply Now
                                    </div>
                                    <Link
                                      className={styles.buttonContainer}
                                      style={{
                                        backgroundColor: "#fc0067",
                                        textDecoration: "none",
                                        color: "white",
                                      }}
                                      to={`/CourseDetail/${list._id}`}
                                    >
                                      View Course
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <Link
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "end",
                            marginTop: "40px",
                            color: "blue",
                            alignItems: "center",
                            gap: "5px",
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                          to={`/course/${"Digital Marketing"}`}
                        >
                          <h3
                            style={{ fontWeight: "500", cursor: "pointer" }}
                            className={styles.ExploreTextCourse}
                          >
                            Explore All Courses
                          </h3>
                          <IoArrowRedo />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                {category === "Advanced Accounting" && (
                  <div className={styles.NVOuterMain}>
                    <div className={styles.NVTopText}>
                      <h1>Advanced Accounting</h1>
                      <p>
                        Master Financial Reporting, Auditing, Taxation, and
                        Managerial Accounting Techniques
                      </p>
                    </div>
                    <div className={styles.NVTheLeftRightMain}>
                      <div className={styles.NVTheLeft}>
                        <h3 className={styles.AVrTextNV}>
                          Avg. Base Salary in india
                        </h3>
                        <div className={styles.LeftNVAvarageSalary}>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Consolut</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              30000 rupeee
                            </div>
                          </div>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Consolut</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              30000 rupeee
                            </div>
                          </div>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Consolut</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              30000 rupeee
                            </div>
                          </div>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Consolut</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              30000 rupeee
                            </div>
                          </div>
                        </div>

                        <div className={styles.JobDiv}>
                          <div className={styles.JobDivSameSame}>
                            <p className={styles.NumberTextNV}>1,30,000</p>
                            <p>Job Opnening in india</p>
                          </div>
                          <div className={styles.JobDivSameSame11}>
                            <p className={styles.NumberTextNV}>16%</p>
                            <p>Project 10+ years growth</p>
                          </div>
                        </div>

                        {/* <div className={styles.studentView}>
                          <h4 style={{ color: "#fc0067" }}>Student View</h4>
                          <p>
                            Advanced tax accounting courses deepen expertise in
                            corporate taxation, international tax planning, and
                            compliance strategies, preparing professionals for
                            complex tax scenarios in diverse business
                            environments.
                          </p>
                          <h5 style={{ color: "#fc0067" }}>Rohit Jain</h5>
                        </div> */}
                        <div>
                          <Carousel
                            responsive={responsive}
                            showDots={false}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            infinite={true}
                            arrows={false}
                          >
                            <div className={styles.studentView}>
                              <h4 style={{ color: "#fc0067" }}>Student View</h4>
                              <p>
                                Advanced tax accounting courses deepen expertise
                                in corporate taxation, international tax
                                planning, and compliance strategies, preparing
                                professionals for complex tax scenarios in
                                diverse business environments.
                              </p>
                              <h5 style={{ color: "#fc0067" }}>Anmol Preet</h5>
                            </div>
                            <div className={styles.studentView}>
                              <h4 style={{ color: "#fc0067" }}>Student View</h4>
                              <p>
                                Advanced tax accounting courses deepen expertise
                                in corporate taxation, international tax
                                planning, and compliance strategies, preparing
                                professionals for complex tax scenarios in
                                diverse business environments.
                              </p>
                              <h5 style={{ color: "#fc0067" }}>Rohit Jain</h5>
                            </div>
                            <div className={styles.studentView}>
                              <h4 style={{ color: "#fc0067" }}>Student View</h4>
                              <p>
                                Advanced tax accounting courses deepen expertise
                                in corporate taxation, international tax
                                planning, and compliance strategies, preparing
                                professionals for complex tax scenarios in
                                diverse business environments.
                              </p>
                              <h5 style={{ color: "#fc0067" }}>
                                Abhishek Dhyani
                              </h5>
                            </div>
                          </Carousel>
                        </div>
                      </div>
                      <div className={styles.NVTheRight}>
                        <h4 className={styles.RecommendedText}>
                          Recommended Professional Courses
                        </h4>
                        <div
                          style={{ gap: "20px" }}
                          className={styles.themainCourseDiv}
                        >
                          {firstTwoCourses.map((list, ind) => {
                            return (
                              <div
                                className={styles.Course1}
                                style={{ position: "relative" }}
                              >
                                <img
                                  src="./Images/teacherInput.png"
                                  style={{
                                    position: "absolute",
                                    top: "30px",
                                    left: "-20px",
                                    height: "170px",
                                    // width: "100px",
                                    zIndex: "200",
                                    // overflow: "visible",
                                  }}
                                />
                                <div className={styles.CourseImageDivNV}>
                                  <Lottie
                                    animationData={a[category][ind]}
                                    loop={true}
                                    color="blue"
                                    className={styles.CourseImageNV}
                                  />
                                </div>

                                <div>
                                  <p className={styles.CourseTittleNV}>
                                    {list?.name}
                                  </p>
                                  <div className={styles.CourseStartConrainer}>
                                    <p>{list?.rating}</p>
                                    <p
                                      style={{
                                        color: "#fc0067",
                                        fontSize: "18px",
                                      }}
                                    >
                                      <Star
                                        rating={list?.rating}
                                        fontSize="1rem"
                                      />
                                    </p>
                                    <p>{list?.review}</p>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      margin: "10px 0px",
                                      padding: "0px 15px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                      }}
                                    >
                                      <HiOutlineUsers color="gray" />
                                      <p>99 Live classes</p>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                      }}
                                    >
                                      <WiTime7 color="gray" />
                                      <p>5 Months</p>
                                    </div>
                                  </div>
                                  <div className={styles.buttonMainDiv}>
                                    <div
                                      className={styles.buttonContainer}
                                      style={{
                                        backgroundColor: "#fc0067",
                                        color: "white",
                                      }}
                                      onClick={() =>
                                        dispatch(openModal("registration"))
                                      }
                                    >
                                      Apply Now
                                    </div>
                                    <Link
                                      className={styles.buttonContainer}
                                      style={{
                                        backgroundColor: "#fc0067",
                                        textDecoration: "none",
                                        color: "white",
                                      }}
                                      to={`/CourseDetail/${list._id}`}
                                    >
                                      View Course
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <Link
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "end",
                            marginTop: "40px",
                            color: "blue",
                            alignItems: "center",
                            gap: "5px",
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                          to={`/course/${"Advanced Accounting"}`}
                        >
                          <h3
                            style={{ fontWeight: "500", cursor: "pointer" }}
                            className={styles.ExploreTextCourse}
                          >
                            Explore All Courses
                          </h3>
                          <IoArrowRedo />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                {category === "Graphic Designing" && (
                  <div className={styles.NVOuterMain}>
                    <div className={styles.NVTopText}>
                      <h1>Graphic Designing</h1>
                      <p>
                        Master Design Principles, Software Tools, Branding, and
                        Creative Visual Communication
                      </p>
                    </div>
                    <div className={styles.NVTheLeftRightMain}>
                      <div className={styles.NVTheLeft}>
                        <h3 className={styles.AVrTextNV}>
                          Avg. Base Salary in india
                        </h3>
                        <div className={styles.LeftNVAvarageSalary}>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Consolut</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              30000 rupeee
                            </div>
                          </div>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Consolut</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              30000 rupeee
                            </div>
                          </div>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Consolut</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              30000 rupeee
                            </div>
                          </div>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Consolut</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              30000 rupeee
                            </div>
                          </div>
                        </div>

                        <div className={styles.JobDiv}>
                          <div className={styles.JobDivSameSame}>
                            <p className={styles.NumberTextNV}>1,30,000</p>
                            <p>Job Opnening in india</p>
                          </div>
                          <div className={styles.JobDivSameSame11}>
                            <p className={styles.NumberTextNV}>16%</p>
                            <p>Project 10+ years growth</p>
                          </div>
                        </div>

                        {/* <div className={styles.studentView}>
                          <h4 style={{ color: "#fc0067" }}>Student View</h4>
                          <p>
                            Advanced tax accounting courses deepen expertise in
                            corporate taxation, international tax planning, and
                            compliance strategies, preparing professionals for
                            complex tax scenarios in diverse business
                            environments.
                          </p>
                          <h5 style={{ color: "#fc0067" }}>Rohit Jain</h5>
                        </div> */}
                        <div>
                          <Carousel
                            responsive={responsive}
                            showDots={false}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            infinite={true}
                            arrows={false}
                          >
                            <div className={styles.studentView}>
                              <h4 style={{ color: "#fc0067" }}>Student View</h4>
                              <p>
                                Advanced tax accounting courses deepen expertise
                                in corporate taxation, international tax
                                planning, and compliance strategies, preparing
                                professionals for complex tax scenarios in
                                diverse business environments.
                              </p>
                              <h5 style={{ color: "#fc0067" }}>Anmol Preet</h5>
                            </div>
                            <div className={styles.studentView}>
                              <h4 style={{ color: "#fc0067" }}>Student View</h4>
                              <p>
                                Advanced tax accounting courses deepen expertise
                                in corporate taxation, international tax
                                planning, and compliance strategies, preparing
                                professionals for complex tax scenarios in
                                diverse business environments.
                              </p>
                              <h5 style={{ color: "#fc0067" }}>Rohit Jain</h5>
                            </div>
                            <div className={styles.studentView}>
                              <h4 style={{ color: "#fc0067" }}>Student View</h4>
                              <p>
                                Advanced tax accounting courses deepen expertise
                                in corporate taxation, international tax
                                planning, and compliance strategies, preparing
                                professionals for complex tax scenarios in
                                diverse business environments.
                              </p>
                              <h5 style={{ color: "#fc0067" }}>
                                Abhishek Dhyani
                              </h5>
                            </div>
                          </Carousel>
                        </div>
                      </div>
                      <div className={styles.NVTheRight}>
                        <h4 className={styles.RecommendedText}>
                          Recommended Professional Courses
                        </h4>
                        <div
                          style={{ gap: "20px" }}
                          className={styles.themainCourseDiv}
                        >
                          {firstTwoCourses.map((list, ind) => {
                            return (
                              <div
                                className={styles.Course1}
                                style={{ position: "relative" }}
                              >
                                <img
                                  src="./Images/teacherInput.png"
                                  style={{
                                    position: "absolute",
                                    top: "30px",
                                    left: "-20px",
                                    height: "170px",
                                    // width: "100px",
                                    zIndex: "200",
                                    // overflow: "visible",
                                  }}
                                />
                                <div className={styles.CourseImageDivNV}>
                                  <Lottie
                                    animationData={a[category][ind]}
                                    loop={true}
                                    color="blue"
                                    className={styles.CourseImageNV}
                                  />
                                </div>

                                <div>
                                  <p className={styles.CourseTittleNV}>
                                    {list?.name}
                                  </p>
                                  <div className={styles.CourseStartConrainer}>
                                    <p>{list?.rating}</p>
                                    <p
                                      style={{
                                        color: "#fc0067",
                                        fontSize: "18px",
                                      }}
                                    >
                                      <Star
                                        rating={list?.rating}
                                        fontSize="1rem"
                                      />
                                    </p>
                                    <p>{list?.review}</p>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      margin: "10px 0px",
                                      padding: "0px 15px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                      }}
                                    >
                                      <HiOutlineUsers color="gray" />
                                      <p>99 Live classes</p>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                      }}
                                    >
                                      <WiTime7 color="gray" />
                                      <p>5 Months</p>
                                    </div>
                                  </div>
                                  <div className={styles.buttonMainDiv}>
                                    <div
                                      className={styles.buttonContainer}
                                      style={{
                                        backgroundColor: "#fc0067",
                                        color: "white",
                                      }}
                                      onClick={() =>
                                        dispatch(openModal("registration"))
                                      }
                                    >
                                      Apply Now
                                    </div>
                                    <Link
                                      className={styles.buttonContainer}
                                      style={{
                                        backgroundColor: "#fc0067",
                                        textDecoration: "none",
                                        color: "white",
                                      }}
                                      to={`/CourseDetail/${list._id}`}
                                    >
                                      View Course
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <Link
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "end",
                            marginTop: "40px",
                            color: "blue",
                            alignItems: "center",
                            gap: "5px",
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                          to={`/course/${"Graphic Designing"}`}
                        >
                          <h3
                            style={{ fontWeight: "500", cursor: "pointer" }}
                            className={styles.ExploreTextCourse}
                          >
                            Explore All Courses
                          </h3>
                          <IoArrowRedo />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                {category === "Data Analytics" && (
                  <div className={styles.NVOuterMain}>
                    <div className={styles.NVTopText}>
                      <h1>Data</h1>
                      <p>
                        Learn essential data skills, analyze data that drives
                        decisions, and accelerate your career!
                      </p>
                    </div>
                    <div className={styles.NVTheLeftRightMain}>
                      <div className={styles.NVTheLeft}>
                        <h3 className={styles.AVrTextNV}>
                          Avg. Base Salary in india
                        </h3>
                        <div className={styles.LeftNVAvarageSalary}>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Data Scientist</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              ₹6L - ₹15L
                            </div>
                          </div>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Data Analyst</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              ₹3L - ₹8L
                            </div>
                          </div>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Machine Learning Engineer</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              ₹7L - ₹16L
                            </div>
                          </div>
                          <div className={styles.LeftNVAvarageSalaryInner}>
                            <div className={styles.BasetextLeft}>
                              <p>Data Engineer</p>
                            </div>
                            <div className={styles.BasetextRight}>
                              ₹6L - ₹15L
                            </div>
                          </div>
                        </div>

                        <div className={styles.JobDiv}>
                          <div className={styles.JobDivSameSame}>
                            <p className={styles.NumberTextNV}>1,30,000</p>
                            <p>Job Opnening in india</p>
                          </div>
                          <div className={styles.JobDivSameSame11}>
                            <p className={styles.NumberTextNV}>16%</p>
                            <p>Project 10+ years growth</p>
                          </div>
                        </div>

                        {/* <div className={styles.studentView}>
                          <h4 style={{ color: "#fc0067" }}>Student View</h4>
                          <p>
                            Advanced tax accounting courses deepen expertise in
                            corporate taxation, international tax planning, and
                            compliance strategies, preparing professionals for
                            complex tax scenarios in diverse business
                            environments.
                          </p>
                          <h5 style={{ color: "#fc0067" }}>Rohit Jain</h5>
                        </div> */}
                        <div>
                          <Carousel
                            responsive={responsive}
                            showDots={false}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            infinite={true}
                            arrows={false}
                          >
                            <div className={styles.studentView}>
                              <h4 style={{ color: "#fc0067" }}>Student View</h4>
                              <p>
                                Advanced tax accounting courses deepen expertise
                                in corporate taxation, international tax
                                planning, and compliance strategies, preparing
                                professionals for complex tax scenarios in
                                diverse business environments.
                              </p>
                              <h5 style={{ color: "#fc0067" }}>Anmol Preet</h5>
                            </div>
                            <div className={styles.studentView}>
                              <h4 style={{ color: "#fc0067" }}>Student View</h4>
                              <p>
                                Advanced tax accounting courses deepen expertise
                                in corporate taxation, international tax
                                planning, and compliance strategies, preparing
                                professionals for complex tax scenarios in
                                diverse business environments.
                              </p>
                              <h5 style={{ color: "#fc0067" }}>Rohit Jain</h5>
                            </div>
                            <div className={styles.studentView}>
                              <h4 style={{ color: "#fc0067" }}>Student View</h4>
                              <p>
                                Advanced tax accounting courses deepen expertise
                                in corporate taxation, international tax
                                planning, and compliance strategies, preparing
                                professionals for complex tax scenarios in
                                diverse business environments.
                              </p>
                              <h5 style={{ color: "#fc0067" }}>
                                Abhishek Dhyani
                              </h5>
                            </div>
                          </Carousel>
                        </div>
                      </div>
                      <div className={styles.NVTheRight}>
                        <h4 className={styles.RecommendedText}>
                          Recommended Professional Courses
                        </h4>
                        <div
                          style={{ gap: "20px" }}
                          className={styles.themainCourseDiv}
                        >
                          {firstTwoCourses.map((list, ind) => {
                            // console.log("listData_________", list._id);
                            return (
                              <div
                                className={styles.Course1}
                                style={{ position: "relative" }}
                              >
                                <img
                                  src="./Images/teacherInput.png"
                                  style={{
                                    position: "absolute",
                                    top: "30px",
                                    left: "-20px",
                                    height: "170px",
                                    // width: "100px",
                                    zIndex: "200",
                                    // overflow: "visible",
                                  }}
                                />
                                <div className={styles.CourseImageDivNV}>
                                  <Lottie
                                    animationData={a[category][ind]}
                                    loop={true}
                                    color="blue"
                                    className={styles.CourseImageNV}
                                  />
                                </div>

                                <div>
                                  <p className={styles.CourseTittleNV}>
                                    {list?.name}
                                  </p>
                                  <div className={styles.CourseStartConrainer}>
                                    <p>{list?.rating}</p>
                                    <p
                                      style={{
                                        color: "#fc0067",
                                        fontSize: "18px",
                                      }}
                                    >
                                      <Star
                                        rating={list?.rating}
                                        fontSize="1rem"
                                      />
                                    </p>
                                    <p>{list?.review}</p>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      margin: "10px 0px",
                                      padding: "0px 15px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                      }}
                                    >
                                      <HiOutlineUsers color="gray" />
                                      <p>99 Live classes</p>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                      }}
                                    >
                                      <WiTime7 color="gray" />
                                      <p>5 Months</p>
                                    </div>
                                  </div>
                                  <div className={styles.buttonMainDiv}>
                                    <div
                                      className={styles.buttonContainer}
                                      style={{
                                        backgroundColor: "#fc0067",
                                        color: "white",
                                      }}
                                      onClick={() =>
                                        dispatch(openModal("registration"))
                                      }
                                    >
                                      Apply Now
                                    </div>
                                    <Link
                                      className={styles.buttonContainer}
                                      style={{
                                        backgroundColor: "#fc0067",
                                        textDecoration: "none",
                                        color: "white",
                                      }}
                                      to={`/CourseDetail/${list._id}`}
                                    >
                                      View Course
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <Link
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "end",
                            marginTop: "40px",
                            color: "blue",
                            alignItems: "center",
                            gap: "5px",
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                          to={`/course/${"Data Analytics"}`}
                        >
                          <h3
                            style={{ fontWeight: "500", cursor: "pointer" }}
                            className={styles.ExploreTextCourse}
                          >
                            Explore All Courses
                          </h3>
                          <IoArrowRedo />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </>
              {/* </Carousel> */}
            </div>
          ) : (
            <h1 style={{ textAlign: "center" }}> No Courses Availble</h1>
          )}

          {/* <div onClick={() => loadmore()} className={styles.loadmorebutton}>
          <p>load More</p>
        </div> */}

          {/* {des === 1 ? (
          <div className={styles.TopContainer}>
            <Carousel
              responsive={responsive}
              className={styles.crololo}
            >
              {courseData.map((list) => (
                <div className={styles.Container}>
                  <div>
                    <img
                      src={list?.photo ? list.photo : "Images/33course.jpg"}
                      className={styles.ContainerImage}
                    />
                  </div>
                  <h1 className={styles.TopText}>{list?.name}</h1>
                  <h1 className={styles.TopTextdisc}>{list?.description}</h1>
                  <div className={styles.CoursePriceContainer}>
                    <div className={styles.RealFinalPriceContainer}>
                      <p className={styles.RealPrice}>₹{list?.price}</p>
                      <p className={styles.FinalPrice}>
                        ₹
                        {list && list.price && list.OffpricePercent
                          ? Math.round(
                              list?.price -
                                (list.price * list.OffpricePercent) / 100
                            )
                          : "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className={styles.OffPrice}>
                        <span
                          style={{
                            paddingRight: "2px",
                            color: "black",
                          }}
                        >
                          off -
                        </span>
                        {list?.OffpricePercent}%
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => Navigate("/course")}
                    className={styles.DetailsButton}
                  >
                    <h3 className={styles.DetailsButtonText}>Buy Course</h3>
                  </div>
                 
                </div>
              ))}
            </Carousel>
          </div>
        ) : des === 2 ? (
          <div className={styles.TopContainer}>
            <Carousel
              responsive={responsive}
              className={styles.crololo}
              // slidesToShow={4}
              // autoPlay={true}
              // autoPlaySpeed={2000}
            >
              {courseData.map((list) => (
                <div className={styles.Container}>
                  <div>
                    <img
                      src="Images/33course.jpg"
                      className={styles.ContainerImage}
                    />
                  </div>
                  <h1 className={styles.TopText}>{list?.name}</h1>
                  <h1 className={styles.TopTextdisc}>{list?.description}</h1>
                  <div className={styles.CoursePriceContainer}>
                    <div className={styles.RealFinalPriceContainer}>
                      <p className={styles.RealPrice}>₹{list?.price}</p>
                      <p className={styles.FinalPrice}>
                        ₹
                        {list && list.price && list.OffpricePercent
                          ? Math.round(
                              list?.price -
                                (list.price * list.OffpricePercent) / 100
                            )
                          : "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className={styles.OffPrice}>
                        <span
                          style={{
                            paddingRight: "2px",
                            color: "black",
                          }}
                        >
                          off -
                        </span>
                        {list?.OffpricePercent}%
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/CourseDetail/${list._id}`}
                    className={styles.DetailsButton}
                  >
                    <h3 className={styles.DetailsButtonText}>Buy Course</h3>
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>
        ) : des === 3 ? (
          <div className={styles.TopContainer}>
            <Carousel
              responsive={responsive}
              className={styles.crololo}
              // slidesToShow={4}
              // autoPlay={true}
              // autoPlaySpeed={2000}
            >
              {courseData.map((list) => (
                <div className={styles.Container}>
                  <div>
                    <img
                      src="Images/22Cerficate.webp"
                      className={styles.ContainerImage}
                    />
                  </div>
                  <h1 className={styles.TopText}>{list?.name}</h1>
                  <h1 className={styles.TopTextdisc}>{list?.description}</h1>
                  <div className={styles.CoursePriceContainer}>
                    <div className={styles.RealFinalPriceContainer}>
                      <p className={styles.RealPrice}>₹{list?.price}</p>
                      <p className={styles.FinalPrice}>
                        ₹
                        {list && list.price && list.OffpricePercent
                          ? Math.round(
                              list?.price -
                                (list.price * list.OffpricePercent) / 100
                            )
                          : "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className={styles.OffPrice}>
                        <span
                          style={{
                            paddingRight: "2px",
                            color: "black",
                          }}
                        >
                          off -
                        </span>
                        {list?.OffpricePercent}%
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/CourseDetail/${list._id}`}
                    className={styles.DetailsButton}
                  >
                    <h3 className={styles.DetailsButtonText}>Buy Course</h3>
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>
        ) : (
          <h1>No data availbale</h1>
        )} */}
        </div>
      )}
    </div>
  );
};

export default Courses;

// <div
// className={des === 1 ? styles.tabsActive : styles.tabs}
// style={{ borderRight: "1px solid lightgray" }}
// onClick={() => setDes(1)}
// >
// <h3 className={styles.navHeadingText}>Online Courses</h3>
// </div>
// <div
// className={des === 2 ? styles.tabsActive : styles.tabs}
// style={{ borderRight: "1px solid lightgray" }}
// onClick={() => setDes(2)}
// >
// <h3 className={styles.navHeadingText}>Pre-recorded Courses</h3>
// </div>
// <div
// className={des === 3 ? styles.tabsActive : styles.tabs}
// onClick={() => setDes(3)}
// >
// <h3 className={styles.navHeadingText}>Offline Courses</h3>
// </div>

{
  /* <Link
                    to={`/CourseDetail/${list._id}`}
                    className={styles.DetailsButton}
                  >
                    <h3 className={styles.DetailsButtonText}>Buy Course</h3>
                  </Link> */
}

// <div className={styles.Container}>
//   <div>
//     <img
//       src={a[category][ind]}
//       className={styles.ContainerImage}
//     />
//   </div>
//   <h1 className={styles.TopText}>{list?.name}</h1>
//   <h1 className={styles.TopTextdisc}>
//     {list?.description}
//   </h1>
//   <Link
//     to={`/CourseDetail/${list._id}`}
//     className={styles.DetailsButton}
//   >
//     <h3 className={styles.DetailsButtonText}>
//       View Courses
//     </h3>
//   </Link>
// </div>
