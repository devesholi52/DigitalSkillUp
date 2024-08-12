import React, { useEffect, useState } from "react";
import styles from "./TopSectionCDetail.module.css";
import {
  closeModal,
  openModal,
  openModalInCourse,
  closeModalInCourse,
} from "../../Redux/Reducers/CreateSlice";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosCloseCircle } from "react-icons/io";
import Otp from "../OtpModule/Otp";
import Model from "../../ModelComponent/Model";
import { Star } from "../Star";
import { FaCloudUploadAlt, FaRegStar, FaStar } from "react-icons/fa";
import SuccessModelTeacher from "../SuccessModelTecher/SuccessModelTeacher";
import { HiOutlineUsers } from "react-icons/hi2";
import SmoothSlider from "../../SmoothSliderCompo/SmoothSlider";

const TopSectionCDetail = (courseDetail) => {
  const { modalTypeInCourse, isOpenInCourse } = useSelector(
    (Select) => Select?.modal
  );
  const { category } = useSelector((Select) => Select?.modal);

  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const [otp, setotp] = useState("");
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState("");

  const [Register, setRegister] = useState({
    name: "",
    number: "",
    // role: "",
    email: "",
    description: "",
  });

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

  const [emailError, setEmailError] = useState("");

  const abc = (e) => {
    if (Register.number.length >= 10 && e.key !== "Backspace") {
      e.preventDefault();
    }
  };
  const formHandel = (e) => {
    const { name, value } = e.target;
    setRegister({ ...Register, [name]: value });
    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // New line for email regex pattern
      if (!emailPattern.test(value)) {
        setEmailError("Invalid email format"); // New line for setting email error
      } else {
        setEmailError(""); // New line for clearing email error
      }
    }
  };

  const OpenModel = () => {
    dispatch(openModalInCourse("registration"));
  };

  const SendOtp = () => {
    if (Register.name === "") {
      alert("please fill in");
      return;
    }
    if (Register?.number === "") {
      alert("please fill in");
      return;
    }
    if (emailError) {
      // New line to check email error before sending OTP
      alert("Please provide a valid email");
      return;
    }
    if (Register?.description === "") {
      alert("please fill in");
      return;
    }
    console.log("Request body:", courseDetail?.courseDetail?.name);
    const payload = {
      ...Register,
      CourseName: courseDetail?.courseDetail?.name,
    };
    fetch("http://localhost:3000/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response?.error == "Number already registred") {
          alert("Number already registred");
        }
        if (response?.message == "6 Digit otp sent to your mobile number") {
          console.log("response?.lead?.number", response?.numberinlead?.number);
          setNumber(response?.numberinlead?.number);
          dispatch(openModalInCourse("otp"));
        }
      });
    // .finally(e => setLoading(false))
  };
  const VerifyOtp = () => {
    fetch("http://localhost:3000/OtpVerify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp, number }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success === true) {
          alert(response.message);
          dispatch(closeModalInCourse());
          setOpen(true);
        } else {
          alert(response.message);
        }
      });
  };
  const closeModel = () => {
    setOpen(false);
  };
  return (
    <>
      {open && <SuccessModelTeacher closeModel={closeModel} />}
      {isOpenInCourse && (
        <div className={styles.modelWrapper}>
          <div className={styles.ModelContainer}>
            <div
              className={styles.iconContainer}
              onClick={() => dispatch(closeModalInCourse())}
            >
              <IoIosCloseCircle className={styles.iconStyle} />
            </div>
            <div className={styles.imageContainer}>
              <img src="../Images/FinalLogo.png" className={styles.Image} />
            </div>

            <div className={styles.inputBoxContainer}>
              {modalTypeInCourse === "registration" && (
                <>
                  <h1 className={styles.RegisterText}>Register Yourself</h1>
                  <input
                    placeholder="Enter Your Name"
                    onChange={formHandel}
                    type="text"
                    id="name"
                    name="name"
                    value={Register.name}
                    className={styles.inputbox}
                  />
                  {/* <input
                    placeholder="Enter Your Email"
                    className={styles.inputbox}
                  /> */}
                  <input
                    placeholder="Enter Your Mobile Number"
                    onChange={formHandel}
                    type="number"
                    id="number"
                    name="number"
                    onKeyDown={abc}
                    value={Register.number}
                    className={styles.inputbox}
                  />
                  <input
                    placeholder="Enter Your email"
                    onChange={formHandel}
                    type="email"
                    id="email"
                    name="email"
                    value={Register.email}
                    className={styles.inputbox}
                  />
                  {emailError && (
                    <p
                      style={{
                        color: "red",
                        marginTop: "-20px",
                        marginLeft: "16px",
                      }}
                    >
                      {emailError}
                    </p>
                  )}
                  <input
                    placeholder="Enter your field"
                    onChange={formHandel}
                    type="description"
                    id="description"
                    name="description"
                    value={Register.description}
                    className={styles.inputbox}
                  />
                  {/* <select
                    name="role"
                    onChange={formHandel}
                    // id="user"
                    value={Register.role}
                    className={styles.inputbox}
                    style={{ color: "gray", border: "none" }}
                  >
                    <option default>Select Course</option>
                    {Data.map((e) => {
                      // console.log("i am here", e);
                      // console.log("e.name", e.name);
                      // console.log("Register.user", Register.user);
                      return (
                        <option key={e._id} value={e.name}>
                          {e.name}
                        </option>
                      );
                    })}
                  </select> */}
                  <div className={styles.buttonContainer} onClick={SendOtp}>
                    <h3 className={styles.buttonContainerText}>Send Otp</h3>
                  </div>
                  <p className={styles.paragraphText}>
                    We will send you a OTP on your registred mobile number
                  </p>
                </>
              )}
              {modalTypeInCourse === "otp" && (
                <>
                  <h1 className={styles.RegisterText}>OTP Confirmation</h1>
                  <input
                    placeholder="Enter OTP"
                    onChange={(e) => setotp(e.target.value)}
                    type="number"
                    id="otp"
                    name="otp"
                    value={otp}
                    className={styles.inputbox}
                  />
                  <div
                    className={styles.buttonContainer}
                    onClick={() => VerifyOtp()}
                  >
                    <h3 className={styles.buttonContainerText}>Submit</h3>
                  </div>
                  <p className={styles.paragraphText}>Please confirm via OTP</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      {/* <div className={styles.container}>
        <div style={{ margin: "auto", width: "76%", display: "flex" }}>
          <div className={styles.TextInputcontainer}>
            <h1 className={styles.tagLine}>
              {courseDetail?.courseDetail?.name}
            </h1>
            <div style={{ margin: "14px 0px" }}>
              <p style={{ color: "#fc0067", fontSize: "23px" }}>
                {" "}
                <Star
                  rating={courseDetail?.courseDetail?.rating}
                  fontSize="1.4rem"
                />
              </p>
              <h3>{courseDetail?.courseDetail?.review} Reviews</h3>
            </div>
            <p className={styles.DescriptionTxt}>
              {courseDetail?.courseDetail?.description}
            </p>

            <div
              className={styles.buttonDiv}
              onClick={OpenModel}
            >
              <p className={styles.ApplyNowButton}>Apply Now</p>
            </div>
          </div>
          <div className={styles.ImageContainer}>
            <img
              src={
                courseDetail?.courseDetail?.photo
                  ? courseDetail?.courseDetail?.photo
                  : "../Images/33course.jpg"
              }
              className={styles.TopImage}
            />
          </div>
        </div>
      </div> */}

      <div
        className={styles.topMainConatiner}
        style={{ backgroundImage: "url(../Images/div.png)" }}
      >
        <div className={styles.TunTun}>
          <div className={styles.TheMain}>
            <div className={styles.TheLeftConatiner}>
              <div className={styles.CareerTopTextContainer}>
                <p className={styles.CareerTopText}>
                  Career Preparation Program
                </p>
              </div>
              <h1 className={styles.GetJobTopText}>
                Get Job-ready for {courseDetail?.courseDetail?.name}
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
          <div style={{ backgroundColor: "transparent", overflow: "hidden" }}>
            <SmoothSlider />
          </div>
          {/* {category === "Digital Marketing" && (
            <div className={styles.TheMain}>
              <div className={styles.TheLeftConatiner}>
                <div className={styles.CareerTopTextContainer}>
                  <p className={styles.CareerTopText}>
                    Career Preparation Program
                  </p>
                </div>
                <h1 className={styles.GetJobTopText}>
                  Get Job-ready for {courseDetail?.courseDetail?.name}
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
                  Get Job-ready for {courseDetail?.courseDetail?.name}
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
                  Get Job-ready for {courseDetail?.courseDetail?.name}
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
                <h1 className={styles.GetJobTopText}>
                  Get Job-ready for {courseDetail?.courseDetail?.name}
                </h1>
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
                    {Dataji.map((list, index) => (
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
    </>
  );
};

export default TopSectionCDetail;
