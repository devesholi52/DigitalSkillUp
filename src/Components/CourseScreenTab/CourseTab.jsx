import React, { useEffect, useState } from "react";
import styles from "../CourseScreenTab/CourseTab.module.css";
import Courses from "../CoursesComponent/Courses";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DigitalMarketing1 from "../../DigitalMarketing1.json";
import SEO from "../../SEO.json";
import website from "../../website.json";
import graphic from "../../graphic.json";
import Data1 from "../../Data22.json";
import Lottie from "lottie-react";
import excel from "../../excel.json";
import SMM from "../../SMM.json";
import { HiOutlineUsers } from "react-icons/hi2";
import { Star } from "../Star";
import FreeAdvanceClasses from "../FreeAdvanceClassesComp/FreeAdvanceClasses";
import { openModal } from "../../Redux/Reducers/CreateSlice";
// import Aos from "aos";
// import "aos/dist/aos.css";
import WhyStudy from "../WhyStudyComponent/WhyStudy";
import MeetMentor from "../../MeetMentorCompo/MeetMentor";
import TargetRoles from "../../TargetRolesCompo/TargetRoles";
import AdmissionProcess from "../AdmissionProcessCopmo/AdmissionProcess";

const CourseTab = () => {
  const [courseData, setCourseData] = useState([]);
  const { Categoryid } = useParams();
  const { category } = useSelector((Select) => Select?.modal);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    GetData();
  }, []);

  // useEffect(() => {
  //   Aos.init({});
  //   Aos.refresh();
  // }, []);
  const dataLists = [
    {
      image: "../Images/1700.jpg",
    },
    {
      image: "../Images/top222.jpg",
    },
    {
      image: "../Images/negisir.jpg",
    },
  ];

  const Web = [
    {
      image: "../Images/stdnt01.jpg",
    },
    {
      image: "../Images/stdnt03.jpg",
    },
    {
      image: "../Images/stdnt05.jpg",
    },
    {
      image: "../Images/stdnt04.jpg",
    },
    {
      image: "../Images/stdnt06.jpg",
    },
  ];
  const Digital = [
    {
      image: "../Images/Student08.jpg",
    },
    {
      image: "../Images/stdnt04.jpg",
    },
    {
      image: "../Images/stdnt03.jpg",
    },
    {
      image: "../Images/stdnt06.jpg",
    },
    {
      image: "../Images/stdnt02.jpg",
    },
  ];
  const Advance = [
    {
      image: "../Images/stdnt02.jpg",
    },
    {
      image: "../Images/stdnt04.jpg",
    },
    {
      image: "../Images/stdnt01.jpg",
    },
    {
      image: "../Images/stdnt05.jpg",
    },
    {
      image: "../Images/Student08.jpg",
    },
  ];
  const Graphic = [
    {
      image: "../Images/Student08.jpg",
    },
    {
      image: "../Images/stdnt05.jpg",
    },
    {
      image: "../Images/stdnt02.jpg",
    },
    {
      image: "../Images/stdnt01.jpg",
    },
    {
      image: "../Images/stdnt06.jpg",
    },
  ];
  const Dataji = [
    {
      image: "../Images/stdnt06.jpg",
    },
    {
      image: "../Images/stdnt05.jpg",
    },
    {
      image: "../Images/stdnt04.jpg",
    },
    {
      image: "../Images/stdnt03.jpg",
    },
    {
      image: "../Images/stdnt02.jpg",
    },
  ];
  // {
  //   image: "Images/Certificate.png",
  // },
  // {
  //   image: "Images/44course.jpeg",
  // },

  const responsive3 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 720 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2,
    },
  };
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  // console.log("category===========", Categoryid);
  const a = {
    "Online Marketing Course": excel,
    "WordPress Developer Course": website,
    "Online Advanced Accounting": graphic,
    "Online Graphic Designing": graphic,
    // Tally: ["./Images/Maam.JPG", "./Images/22Cerficate.webp"],
    "Online Marketing Course": DigitalMarketing1,
    "Data Analytics": SEO,
    "Online SEO Course": SMM,
    "Best Online Digital Marketing Course in India": website,
  };

  // const data = location.state;

  const GetData = () => {
    fetch(`http://localhost:3000/courses/categories/name/${Categoryid}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("datahere+++++++++", data);
        setCourseData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // const courseData = [
  //   {
  //     image: "Images/11course.jpg",
  //     title: "Web Application",
  //     description:
  //       "Transforming ideas into impactful web applications, delivering efficiency,here we have to provide innovation, and user satisfaction for your digital journey",
  //   },
  //   {
  //     image: "Images/22course.png",
  //     title: "Tracking & guide",
  //     description:
  //       "Providing comprehensive tracking and guiding solutions,here we have to provide ensuring seamless navigation and informed decision-making.",
  //   },
  //   {
  //     image: "Images/33course.jpg",
  //     title: "Digital marketing",
  //     description:
  //       "Elevating brands with strategic digital marketing solutions, maximizing online presence and driving growth through targeted campaigns",
  //   },
  //   {
  //     image: "Images/44course.jpeg",
  //     title: "Mobile Application",
  //     description:
  //       "Crafting intuitive mobile applications, blending innovation and functionality to enhance user engagement and streamline digital experiences.",
  //   },
  // ];
  const [isOpen, setIsOpen] = useState(Array(courseData.length).fill(false));

  const handleToggleDetails = (index) => {
    const updatedOpenState = isOpen.map((state, i) =>
      i === index ? !state : false
    );
    setIsOpen(updatedOpenState);
  };

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
  console.log("courseData++++++", courseData);

  // const filteredCourses = courseData.filter((course) => {
  //   return course.categoryID.name === category;
  // });

  // console.log("filteredCourses", filteredCourses);
  // console.log("filteredCourses", filteredCourses[0].categoryID.name);

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? `${words.slice(0, wordLimit).join(" ")}... Read more`
      : text;
  };

  return (
    <div>
      {/* <div
        className={styles.ContainerLargeScreenSize}
        style={{ backgroundImage: "url(../Images/bCourseImageDone.jpg)" }}
      >
        <div className={styles.TextContainer}>
          <h1 className={styles.UpperText}>Course Of Excellent Quality</h1>
          <p className={styles.paraText}>
            Our courses offer an unparalleled blend of expertise and innovation,
            ensuring a transformative learning journey.
          </p>
        </div>
      </div>
      <div
        className={styles.ContainerMiddleScreenSize}
        style={{
          backgroundImage: "url(./Images/bCourseImageDoneSmallTooo.jpg)",
        }}
      >
        <div className={styles.TextContainer}>
          <h1 className={styles.UpperText}>Course Of Excellent Quality</h1>
          <p className={styles.paraText}>
            Our courses offer an unparalleled blend of expertise and innovation,
            ensuring a transformative learning journey.
          </p>
        </div>
      </div> */}
      <div
        className={styles.topMainConatiner}
        style={{ backgroundImage: "url(../Images/div.png)" }}
      >
        <div className={styles.TunTun}>
          {/* {category === "Web Development" && ( */}
          <div className={styles.TheMain}>
            <div className={styles.TheLeftConatiner}>
              <div className={styles.CareerTopTextContainer}>
                <p className={styles.CareerTopText}>
                  Career Preparation Program
                </p>
              </div>
              {/* {course.categoryID._id === Categoryid} */}
              <h1 className={styles.GetJobTopText}>
                Get Job-ready for {courseData[0]?.categoryID?.name}
              </h1>
              <p className={styles.SmallLeftTopText}>
                Master Front-End and Back-End Technologies to Build Stunning,
                Responsive Websites
              </p>
              <div className={styles.DisplayFlexIconAll}>
                <div className={styles.iconTextMainDiv}>
                  <div className={styles.iconDiv}>
                    <HiOutlineUsers color="black" size="25px" />
                  </div>
                  <div className={styles.LeftIconTextConatiner}>
                    <h3>8,285 +</h3>
                    <p>Aspirants</p>
                    <p>Mentored</p>
                  </div>
                </div>
                <div className={styles.iconTextMainDiv}>
                  <div className={styles.iconDiv}>
                    <HiOutlineUsers color="black" size="25px" />
                  </div>
                  <div className={styles.LeftIconTextConatiner}>
                    <h3>8,285 +</h3>
                    <p>Aspirants</p>
                    <p>Mentored</p>
                  </div>
                </div>
                <div className={styles.iconTextMainDiv}>
                  <div className={styles.iconDiv}>
                    <HiOutlineUsers color="black" size="25px" />
                  </div>
                  <div className={styles.LeftIconTextConatiner}>
                    <h3>8,285 +</h3>
                    <p>Aspirants</p>
                    <p>Mentored</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.RightConatiner}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <div className={styles.OurTopDiv}>
                  <h3
                    style={{
                      color: "white",
                      fontWeight: "400",
                      fontSize: "16px",
                    }}
                  >
                    Our Alumni
                  </h3>
                </div>
                <h3 style={{ fontWeight: "500" }} className={styles.HaveText}>
                  have secured jobs at 100+ top global brands!
                </h3>
              </div>
              <div className={styles.RightFlexConatiner}>
                <div className={styles.TopOneRight}>
                  <div className={styles.BoxRightPinkContainer}>
                    <p className={styles.PinkBoxPara}>Job on Linkedin</p>
                    <p className={styles.PinkBoxPara}>Alone</p>
                    <h2 className={styles.PinkBoxHeading}>34000+</h2>
                  </div>
                  <div
                    className={styles.BoxRightPinkContainer}
                    style={{ backgroundColor: "lightcyan", padding: "10px" }}
                  >
                    <img src="../Images/stdnt01.jpg" className={styles.Image} />
                    <p
                      className={styles.PinkBoxPara}
                      style={{
                        color: "black",
                        fontWeight: "500",
                        fontSize: "12px",
                        marginTop: "6px",
                      }}
                    >
                      Rajveer singh
                    </p>
                  </div>
                  <div
                    className={styles.BoxRightPinkContainer}
                    style={{ backgroundColor: "lightcyan", padding: "10px" }}
                  >
                    <img src="../Images/stdnt03.jpg" className={styles.Image} />
                    <p
                      className={styles.PinkBoxPara}
                      style={{
                        color: "black",
                        fontWeight: "500",
                        fontSize: "12px",
                        marginTop: "6px",
                      }}
                    >
                      Rajveer singh
                    </p>
                  </div>
                </div>

                <div className={styles.BottomOneRight}>
                  <div
                    className={styles.BoxRightPinkContainer}
                    style={{ backgroundColor: "lightcyan", padding: "10px" }}
                  >
                    <img src="../Images/stdnt05.jpg" className={styles.Image} />
                    <p
                      className={styles.PinkBoxPara}
                      style={{
                        color: "black",
                        fontWeight: "500",
                        fontSize: "12px",
                        marginTop: "6px",
                      }}
                    >
                      Rajveer singh
                    </p>
                  </div>
                  <div
                    className={styles.BoxRightPinkContainer}
                    style={{ backgroundColor: "lightcyan", padding: "10px" }}
                  >
                    <img src="../Images/stdnt04.jpg" className={styles.Image} />
                    <p
                      className={styles.PinkBoxPara}
                      style={{
                        color: "black",
                        fontWeight: "500",
                        fontSize: "12px",
                        marginTop: "6px",
                      }}
                    >
                      Rajveer singh
                    </p>
                  </div>

                  <div className={styles.BoxRightPinkContainer}>
                    <p className={styles.PinkBoxPara}>Job on Linkedin</p>
                    <p className={styles.PinkBoxPara}>Alone</p>
                    <h2 className={styles.PinkBoxHeading}>34000+</h2>
                  </div>
                  <div
                    className={styles.BoxRightPinkContainer}
                    style={{ backgroundColor: "lightcyan", padding: "10px" }}
                  >
                    <img src="../Images/stdnt06.jpg" className={styles.Image} />
                    <p
                      className={styles.PinkBoxPara}
                      style={{
                        color: "black",
                        fontWeight: "500",
                        fontSize: "12px",
                        marginTop: "6px",
                      }}
                    >
                      Rajveer singh
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.CarouselImage}>
                <Carousel
                  responsive={responsive3}
                  showDots={false}
                  autoPlay={true}
                  autoPlaySpeed={1300}
                  infinite={true}
                  // customTransition="all .30"
                  // transitionDuration={2000}
                  arrows={false}
                >
                  {Web.map((list, index) => (
                    <div className={styles.InnerContainer1111}>
                      <img
                        src={list?.image ? list.image : "Images/33course.jpg"}
                        className={styles.ContainerImage}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
          {/* )} */}
          {/* {category === "Digital Marketing" && (
            <div className={styles.TheMain}>
              <div className={styles.TheLeftConatiner}>
                <div className={styles.CareerTopTextContainer}>
                  <p className={styles.CareerTopText}>
                    Career Preparation Program
                  </p>
                </div>
                <h1 className={styles.GetJobTopText}>
                  Get Job-ready for Digital Marketing
                </h1>
                <p className={styles.SmallLeftTopText}>
                  Master SEO, Content Marketing, Social Media, PPC, and
                  Analytics for Online Success!
                </p>
                <div className={styles.DisplayFlexIconAll}>
                  <div className={styles.iconTextMainDiv}>
                    <div className={styles.iconDiv}>
                      <HiOutlineUsers color="black" size="25px" />
                    </div>
                    <div className={styles.LeftIconTextConatiner}>
                      <h3>8,285 +</h3>
                      <p>Aspirants</p>
                      <p>Mentored</p>
                    </div>
                  </div>
                  <div className={styles.iconTextMainDiv}>
                    <div className={styles.iconDiv}>
                      <HiOutlineUsers color="black" size="25px" />
                    </div>
                    <div className={styles.LeftIconTextConatiner}>
                      <h3>8,285 +</h3>
                      <p>Aspirants</p>
                      <p>Mentored</p>
                    </div>
                  </div>
                  <div className={styles.iconTextMainDiv}>
                    <div className={styles.iconDiv}>
                      <HiOutlineUsers color="black" size="25px" />
                    </div>
                    <div className={styles.LeftIconTextConatiner}>
                      <h3>8,285 +</h3>
                      <p>Aspirants</p>
                      <p>Mentored</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.RightConatiner}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <div className={styles.OurTopDiv}>
                    <h3
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "16px",
                      }}
                    >
                      Our Alumni
                    </h3>
                  </div>
                  <h3 style={{ fontWeight: "500" }} className={styles.HaveText}>
                    have secured jobs at 100+ top global brands!
                  </h3>
                </div>
                <div className={styles.RightFlexConatiner}>
                  <div className={styles.TopOneRight}>
                    <div className={styles.BoxRightPinkContainer}>
                      <p className={styles.PinkBoxPara}>Job on Linkedin</p>
                      <p className={styles.PinkBoxPara}>Alone</p>
                      <h2 className={styles.PinkBoxHeading}>34000+</h2>
                    </div>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/Student08.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt04.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>
                  </div>

                  <div className={styles.BottomOneRight}>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt03.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt06.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>

                    <div className={styles.BoxRightPinkContainer}>
                      <p className={styles.PinkBoxPara}>Job on Linkedin</p>
                      <p className={styles.PinkBoxPara}>Alone</p>
                      <h2 className={styles.PinkBoxHeading}>34000+</h2>
                    </div>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt02.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.CarouselImage}>
                  <Carousel
                    responsive={responsive3}
                    showDots={false}
                    autoPlay={true}
                    autoPlaySpeed={1300}
                    infinite={true}
                    // customTransition="all .30"
                    // transitionDuration={2000}
                    arrows={false}
                  >
                    {Digital.map((list, index) => (
                      <div className={styles.InnerContainer1111}>
                        <img
                          src={list?.image ? list.image : "Images/33course.jpg"}
                          className={styles.ContainerImage}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          )}
          {category === "Advanced Accounting" && (
            <div className={styles.TheMain}>
              <div className={styles.TheLeftConatiner}>
                <div className={styles.CareerTopTextContainer}>
                  <p className={styles.CareerTopText}>
                    Career Preparation Program
                  </p>
                </div>
                <h1 className={styles.GetJobTopText}>
                  Get Job-ready for Advanced Accounting
                </h1>
                <p className={styles.SmallLeftTopText}>
                  Master Financial Reporting, Auditing, Taxation, and Managerial
                  Accounting Techniques
                </p>
                <div className={styles.DisplayFlexIconAll}>
                  <div className={styles.iconTextMainDiv}>
                    <div className={styles.iconDiv}>
                      <HiOutlineUsers color="black" size="25px" />
                    </div>
                    <div className={styles.LeftIconTextConatiner}>
                      <h3>8,285 +</h3>
                      <p>Aspirants</p>
                      <p>Mentored</p>
                    </div>
                  </div>
                  <div className={styles.iconTextMainDiv}>
                    <div className={styles.iconDiv}>
                      <HiOutlineUsers color="black" size="25px" />
                    </div>
                    <div className={styles.LeftIconTextConatiner}>
                      <h3>8,285 +</h3>
                      <p>Aspirants</p>
                      <p>Mentored</p>
                    </div>
                  </div>
                  <div className={styles.iconTextMainDiv}>
                    <div className={styles.iconDiv}>
                      <HiOutlineUsers color="black" size="25px" />
                    </div>
                    <div className={styles.LeftIconTextConatiner}>
                      <h3>8,285 +</h3>
                      <p>Aspirants</p>
                      <p>Mentored</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.RightConatiner}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <div className={styles.OurTopDiv}>
                    <h3
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "16px",
                      }}
                    >
                      Our Alumni
                    </h3>
                  </div>
                  <h3 style={{ fontWeight: "500" }} className={styles.HaveText}>
                    have secured jobs at 100+ top global brands!
                  </h3>
                </div>
                <div className={styles.RightFlexConatiner}>
                  <div className={styles.TopOneRight}>
                    <div className={styles.BoxRightPinkContainer}>
                      <p className={styles.PinkBoxPara}>Job on Linkedin</p>
                      <p className={styles.PinkBoxPara}>Alone</p>
                      <h2 className={styles.PinkBoxHeading}>34000+</h2>
                    </div>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt02.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt04.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>
                  </div>

                  <div className={styles.BottomOneRight}>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt01.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt05.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>

                    <div className={styles.BoxRightPinkContainer}>
                      <p className={styles.PinkBoxPara}>Job on Linkedin</p>
                      <p className={styles.PinkBoxPara}>Alone</p>
                      <h2 className={styles.PinkBoxHeading}>34000+</h2>
                    </div>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/Student08.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.CarouselImage}>
                  <Carousel
                    responsive={responsive3}
                    showDots={false}
                    autoPlay={true}
                    autoPlaySpeed={1300}
                    infinite={true}
                    // customTransition="all .30"
                    // transitionDuration={2000}
                    arrows={false}
                  >
                    {Advance.map((list, index) => (
                      <div className={styles.InnerContainer1111}>
                        <img
                          src={list?.image ? list.image : "Images/33course.jpg"}
                          className={styles.ContainerImage}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          )}
          {category === "Graphic Designing" && (
            <div className={styles.TheMain}>
              <div className={styles.TheLeftConatiner}>
                <div className={styles.CareerTopTextContainer}>
                  <p className={styles.CareerTopText}>
                    Career Preparation Program
                  </p>
                </div>
                <h1 className={styles.GetJobTopText}>
                  Get Job-ready for Graphic Designing
                </h1>
                <p className={styles.SmallLeftTopText}>
                  Master Design Principles, Software Tools, Branding, and
                  Creative Visual Communication
                </p>
                <div className={styles.DisplayFlexIconAll}>
                  <div className={styles.iconTextMainDiv}>
                    <div className={styles.iconDiv}>
                      <HiOutlineUsers color="black" size="25px" />
                    </div>
                    <div className={styles.LeftIconTextConatiner}>
                      <h3>8,285 +</h3>
                      <p>Aspirants</p>
                      <p>Mentored</p>
                    </div>
                  </div>
                  <div className={styles.iconTextMainDiv}>
                    <div className={styles.iconDiv}>
                      <HiOutlineUsers color="black" size="25px" />
                    </div>
                    <div className={styles.LeftIconTextConatiner}>
                      <h3>8,285 +</h3>
                      <p>Aspirants</p>
                      <p>Mentored</p>
                    </div>
                  </div>
                  <div className={styles.iconTextMainDiv}>
                    <div className={styles.iconDiv}>
                      <HiOutlineUsers color="black" size="25px" />
                    </div>
                    <div className={styles.LeftIconTextConatiner}>
                      <h3>8,285 +</h3>
                      <p>Aspirants</p>
                      <p>Mentored</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.RightConatiner}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <div className={styles.OurTopDiv}>
                    <h3
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "16px",
                      }}
                    >
                      Our Alumni
                    </h3>
                  </div>
                  <h3 style={{ fontWeight: "500" }} className={styles.HaveText}>
                    have secured jobs at 100+ top global brands!
                  </h3>
                </div>
                <div className={styles.RightFlexConatiner}>
                  <div className={styles.TopOneRight}>
                    <div className={styles.BoxRightPinkContainer}>
                      <p className={styles.PinkBoxPara}>Job on Linkedin</p>
                      <p className={styles.PinkBoxPara}>Alone</p>
                      <h2 className={styles.PinkBoxHeading}>34000+</h2>
                    </div>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/Student08.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt05.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>
                  </div>

                  <div className={styles.BottomOneRight}>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt02.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt01.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>

                    <div className={styles.BoxRightPinkContainer}>
                      <p className={styles.PinkBoxPara}>Job on Linkedin</p>
                      <p className={styles.PinkBoxPara}>Alone</p>
                      <h2 className={styles.PinkBoxHeading}>34000+</h2>
                    </div>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt06.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.CarouselImage}>
                  <Carousel
                    responsive={responsive3}
                    showDots={false}
                    autoPlay={true}
                    autoPlaySpeed={1300}
                    infinite={true}
                    // customTransition="all .30"
                    // transitionDuration={2000}
                    arrows={false}
                  >
                    {Graphic.map((list, index) => (
                      <div className={styles.InnerContainer1111}>
                        <img
                          src={list?.image ? list.image : "Images/33course.jpg"}
                          className={styles.ContainerImage}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          )}
          {category === "Data Analytics" && (
            <div className={styles.TheMain}>
              <div className={styles.TheLeftConatiner}>
                <div className={styles.CareerTopTextContainer}>
                  <p className={styles.CareerTopText}>
                    Career Preparation Program
                  </p>
                </div>
                <h1 className={styles.GetJobTopText}>Get Job-ready for Data</h1>
                <p className={styles.SmallLeftTopText}>
                  Learn essential data skills, analyze data that drives
                  decisions, and accelerate your career!
                </p>
                <div className={styles.DisplayFlexIconAll}>
                  <div className={styles.iconTextMainDiv}>
                    <div className={styles.iconDiv}>
                      <HiOutlineUsers color="black" size="25px" />
                    </div>
                    <div className={styles.LeftIconTextConatiner}>
                      <h3>8,285 +</h3>
                      <p>Aspirants</p>
                      <p>Mentored</p>
                    </div>
                  </div>
                  <div className={styles.iconTextMainDiv}>
                    <div className={styles.iconDiv}>
                      <HiOutlineUsers color="black" size="25px" />
                    </div>
                    <div className={styles.LeftIconTextConatiner}>
                      <h3>8,285 +</h3>
                      <p>Aspirants</p>
                      <p>Mentored</p>
                    </div>
                  </div>
                  <div className={styles.iconTextMainDiv}>
                    <div className={styles.iconDiv}>
                      <HiOutlineUsers color="black" size="25px" />
                    </div>
                    <div className={styles.LeftIconTextConatiner}>
                      <h3>8,285 +</h3>
                      <p>Aspirants</p>
                      <p>Mentored</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.RightConatiner}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <div className={styles.OurTopDiv}>
                    <h3
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "16px",
                      }}
                    >
                      Our Alumni
                    </h3>
                  </div>
                  <h3 style={{ fontWeight: "500" }} className={styles.HaveText}>
                    have secured jobs at 100+ top global brands!
                  </h3>
                </div>
                <div className={styles.RightFlexConatiner}>
                  <div className={styles.TopOneRight}>
                    <div className={styles.BoxRightPinkContainer}>
                      <p className={styles.PinkBoxPara}>Job on Linkedin</p>
                      <p className={styles.PinkBoxPara}>Alone</p>
                      <h2 className={styles.PinkBoxHeading}>34000+</h2>
                    </div>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt06.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt05.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>
                  </div>

                  <div className={styles.BottomOneRight}>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt04.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt03.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>

                    <div className={styles.BoxRightPinkContainer}>
                      <p className={styles.PinkBoxPara}>Job on Linkedin</p>
                      <p className={styles.PinkBoxPara}>Alone</p>
                      <h2 className={styles.PinkBoxHeading}>34000+</h2>
                    </div>
                    <div
                      className={styles.BoxRightPinkContainer}
                      style={{ backgroundColor: "lightcyan", padding: "10px" }}
                    >
                      <img
                        src="../Images/stdnt02.jpg"
                        className={styles.Image}
                      />
                      <p
                        className={styles.PinkBoxPara}
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Rajveer singh
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.CarouselImage}>
                  <Carousel
                    responsive={responsive3}
                    showDots={false}
                    autoPlay={true}
                    autoPlaySpeed={1300}
                    infinite={true}
                    // customTransition="all .30"
                    // transitionDuration={2000}
                    arrows={false}
                  >
                    {Dataji?.map((list, index) => (
                      <div className={styles.InnerContainer1111}>
                        <img
                          src={list?.image ? list.image : "Images/33course.jpg"}
                          className={styles.ContainerImage}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>

      {/* <div className={styles.CourseViewContainer}>
        <Carousel responsive={responsive} showDots={true}>
          {filteredCourses.map((list, index) => (
            <div
              className={
                isOpen[index]
                  ? styles.InnerContainerHeight
                  : styles.InnerContainer
              }
            >
              <div className={styles.imageContainer}>
                <Lottie
                  animationData={a[category][index]}
                  loop={true}
                  color="blue"
                  className={styles.ContainerImage}
                />
              </div>
              <div>
                <h1 className={styles.TopText}>{list?.name}</h1>
                <p className={styles.descriptionText}>
                  {truncateText(list?.description, 4)}
                </p>
                <div className={styles.CoursePriceContainer}>
                  <div className={styles.RealFinalPriceContainer}>
                    <p className={styles.RealPrice}>₹{list?.price}</p>
                    <p className={styles.FinalPrice}>
                      {" "}
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
                      {list?.OffpricePercent}%
                    </p>
                  </div>
                </div>
                <Link
                  className={styles.DetailsButton}
                  to={`/CourseDetail/${list._id}`}
                >
                  <h3 className={styles.DetailsButtonText}>View Details</h3>
                </Link>
                {isOpen[index] && (
                  <div className={styles.userInterface}>
                    <div className={styles.dataContainer}>
                      <div className={styles.dataItem}>
                        <h1 className={styles.dataLabel}>Course name</h1>
                        <p className={styles.dataValue}>abc course</p>
                      </div>
                      <div className={styles.dataItem}>
                        <h1 className={styles.dataLabel}>Details</h1>
                        <p className={styles.dataValue}>
                          We provides best services over the period and will
                          give you best experience
                        </p>
                      </div>
                      <div className={styles.dataItem}>
                        <h1 className={styles.dataLabel}>Amount</h1>
                        <p className={styles.dataValue}>500</p>
                      </div>
                      <div className={styles.dataItem}>
                        <h1 className={styles.dataLabel}>Facilities</h1>
                        <p className={styles.dataValue}>
                          I may also be bigger but a little smaller than the
                          about text.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div> */}

      <div className={styles.AllCourseConatiner}>
        <div className={styles.AllCourseConatinerTopText} data-aos="zoom-in">
          <h1 className={styles.AllCourseConatinerTopMainText}>
            {category} Course
          </h1>
          <p className={styles.AllCourseConatinerTopTextPara}>
            Learn essential data skills, analyze data that drives decisions, and
            accelerate your career!
          </p>
        </div>
        <Carousel
          responsive={responsive}
          showDots={false}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          arrows={false}
        >
          {courseData?.map((list, index) => {
            console.log("list ka naam", a[list.name], list.name);
            return (
              <>
                {list && list?.length !== 0 ? (
                  <div className={styles.AllCourseConatinerTheMain}>
                    <Lottie
                      animationData={a[list.name]}
                      loop={true}
                      color="blue"
                      className={styles.ContainerImageNiche}
                    />
                    <div className={styles.TheleftOne}>
                      <h1 className={styles.CourseDaName}>{list?.name}</h1>
                      <p className={styles.CourseDaDisc}>
                        Learn essential data skills, analyze data that drives
                        decisions, and accelerate your career Learn essential
                        data skills, analyze data that drives decisions, and
                        accelerate your career!
                      </p>
                      <div className={styles.CourseStartConrainer}>
                        <p>{list?.rating}</p>
                        <p
                          style={{
                            color: "#fc0067",
                            fontSize: "18px",
                          }}
                        >
                          <Star rating={list?.rating} fontSize="1rem" />
                        </p>
                        <p>{list?.review}</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "20px",
                          marginTop: "20px",
                        }}
                        className={styles.TargetDivCC}
                      >
                        <h3 className={styles.CourseDaRole}>
                          Targeted Job Role:
                        </h3>
                        <div className={styles.DataConatiner}>
                          <p>Data Analystics</p>
                        </div>
                      </div>
                      <div className={styles.DisplayFlexIconAll}>
                        <div className={styles.iconTextMainDiv}>
                          <div className={styles.iconDiv}>
                            <HiOutlineUsers color="black" size="25px" />
                          </div>
                          <div className={styles.LeftIconTextConatiner}>
                            <h3>Duration</h3>
                            <p>2 months</p>
                          </div>
                        </div>
                        <div className={styles.iconTextMainDiv}>
                          <div className={styles.iconDiv}>
                            <HiOutlineUsers color="black" size="25px" />
                          </div>
                          <div className={styles.LeftIconTextConatiner}>
                            <h3>Live Sessions</h3>
                            <p>46</p>
                          </div>
                        </div>
                      </div>
                      <Link
                        className={styles.ViewCourseDiv}
                        to={`/CourseDetail/${list?._id}`}
                      >
                        <p style={{ cursor: "pointer" }}>View Details</p>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <h1>no data</h1>
                  </>
                )}
              </>
            );
          })}
        </Carousel>
      </div>

      <>
        <div className={styles.AllCourseConatinerTopText} data-aos="zoom-in">
          <h1 className={styles.AllCourseConatinerTopMainText}>
            Learn About Our Experts
          </h1>
          <p className={styles.AllCourseConatinerTopTextPara}>
            Get insights and knowledge from our experienced and skilled
            professionals today.
          </p>
        </div>
        <div className={styles.MainContainer}>
          <div className={styles.TextContainer11}>
            <h1 className={styles.FreeHeadText}>Free Advance Classes</h1>
            <p>
              Participate in expert-guided, engaging live sessions tailored to
              expand your knowledge and sharpen your skills in your specific
              area of interest.
            </p>
            <div
              className={styles.ButtonAdvance}
              onClick={() => Navigate("../AllAdvanceclasses")}
            >
              <p className={styles.AdvanceText}>See all Advance Classes</p>
            </div>
          </div>
          <div
            style={{
              width: "800px",
              cursor: "pointer",
            }}
          >
            <Carousel
              responsive={responsive2}
              showDots={false}
              autoPlay={true}
              autoPlaySpeed={2000}
              infinite={true}
              arrows={false}
            >
              {dataLists.map((list, index) => (
                // <div className={styles.InnerContainer}>
                //   <div
                //     className={styles.Container}
                //     style={{
                //       backgroundImage: list?.image,
                //     }}
                //   ></div>
                // </div>
                <div
                  className={styles.Container}
                  style={
                    {
                      // backgroundImage: list?.image,
                    }
                  }
                  onClick={() => dispatch(openModal("registration"))}
                >
                  <img src={list?.image} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </>
      <WhyStudy />
      <MeetMentor />
      <AdmissionProcess />
      {/* <TargetRoles /> */}
    </div>
  );
};

export default CourseTab;
