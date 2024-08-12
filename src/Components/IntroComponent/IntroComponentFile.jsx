import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "./IntroComponentFile.module.css";
import Certificate from "../CeritficateComponent/Certificate";
import OtpContainerFile from "../OtpContainer/OtpContainerFile";
import Courses from "../CoursesComponent/Courses";
import Testrimonial from "../../TestrimonialComponent/Testrimonial";
import Faq from "../../FaqComponent/Faq";
import Lottie from "lottie-react";
import typingman from "../../ohhHello.json";
import { Link, useLocation } from "react-router-dom";
import OurMission from "../Mission/OurMission";
import StudentJourney from "../JourneyStudent/StudentJourney";
import EnrollwithUS from "../EnrollWithusComponent/EnrollwithUS";
import Aos from "aos";
import "aos/dist/aos.css";
import FreeAdvanceClasses from "../FreeAdvanceClassesComp/FreeAdvanceClasses";
import Awardsfile from "../AwardsComponent/Awardsfile";
import ExploreCourses from "../../ExploreCoursesComp/ExploreCourses";
import FreeResourses from "../../FreeResoursesComp/FreeResourses";
import LocationFile from "../../LocationComponent/LocationFile";

const IntroComponentFile = () => {
  const [typeEffect] = useTypewriter({
    words: ["Your Potential"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 40,
  });
  useEffect(() => {
    Aos.init({});
    Aos.refresh();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div>
      <div>
        <div style={{ backgroundColor: "#FED5E3" }}>
          <div className={styles.container}>
            {/* <Link
          to="/login"
          style={{
            position: "fixed",
            right: "45px",
            top: "80px",
          }}
        >
          Login
        </Link> */}
            <div className={styles.TextInputcontainer}>
              <h1 className={styles.tagLine}>
                Unlock
                <br />
                <span className={styles.x} style={{ color: "#fc0067" }}>
                  {typeEffect}
                </span>
                <br /> Online Learning
                <br />
                Your Path to Success
              </h1>
              <div className={styles.HiddenTextContainer}>
                <h1 className={styles.tagLineHidden}>Unlock</h1>
                <h1
                  className={styles.tagLineHidden}
                  style={{ color: "#fc0067" }}
                >
                  Your Potential
                </h1>
                <h1 className={styles.tagLineHidden}>Online Learning</h1>
                <h1 className={styles.tagLineHidden}>Your Path to Success</h1>
              </div>
              <p className={styles.bottomtagline}>
                Discover a world of knowledge with our diverse range of online
                courses. Elevate your skills, advance your career, and embrace
                lifelong learning.
              </p>
              <div
                className={styles.button}
                onClick={() => {
                  document
                    .getElementById("course")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <p className={styles.buttonText}>View Courses</p>
              </div>
            </div>
            <div className={styles.imageContainer}>
              {/* <img src="./Images/Maam.JPG" className={styles.TopImage} /> */}
              <Lottie
                animationData={typingman}
                loop={true}
                color="blue"
                className={styles.TopImage}
              />
            </div>
          </div>
        </div>
        {/* <div className={styles.main}>
          <div className={styles.Submain}>
            <h2 className={styles.H2Text}>Excellent</h2>
            <p className={styles.Ptext}>Average User Rating</p>
          </div>
          <div className={styles.Submain}>
            <h2 className={styles.H2Text}>50%</h2>
            <p className={styles.Ptext}>Average Salary Hike</p>
          </div>
          <div className={styles.Submain}>
            <h2 className={styles.H2Text}>95%</h2>
            <p className={styles.Ptext}>Happy With Outcome</p>
          </div>
        </div> */}
        <FreeAdvanceClasses />

        <h1 className={styles.AnimateTopText}>
          Your Pathway to Educational Excellence
        </h1>
        <div className={styles.animateThemain}>
          <div className={styles.animateTheBottomOne}>
            <p className={styles.animateTheParaText}>
              CHOOSE COURSE AND ENROLL YOURSELF
            </p>
          </div>
          <div className={styles.abc}>
            <svg
              width="200px"
              height="107px"
              viewBox="0 0 315 107"
              version="1.1"
              style={{ overflow: "visible" }}
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                sketchType="MSPage"
              >
                <path
                  id="Path-1"
                  className={styles.path}
                  fill="none"
                  stroke="none"
                  strokeWidth="5"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  // d="M20,20 C20,100 200,0 200,100"
                  d="M20,10 L40,35 C70,120 200,0 200,100"
                />
                <path
                  className={styles.dashed}
                  fill="none"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  // d="M20,20 C20,100 200,0 200,100"
                  d="M20,10 L40,35 C70,120 200,0 200,100"
                />
                <polyline id="arrow" points="0,-9 18,0 0,9 5,0" fill="#db5862">
                  <animateMotion
                    rotate="auto"
                    begin="0s"
                    dur="3s"
                    repeatCount="500"
                    fill="freeze"
                  >
                    <mpath xlinkHref="#Path-1" />
                  </animateMotion>
                </polyline>
              </g>
            </svg>
          </div>
          <div
            className={styles.animateTheBottomOne11}
            // data-aos="flip-left"
          >
            <p className={styles.animateTheParaText}>
              START AND COMPLETE ALL MODULE OF TRAINING
            </p>
          </div>
          <div className={styles.abc2}>
            <svg
              width="200px"
              height="107px"
              viewBox="0 0 315 107"
              version="1.1"
              style={{ overflow: "visible" }}
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                sketchType="MSPage"
              >
                <path
                  id="Path-2"
                  className={styles.path}
                  fill="none"
                  stroke="none"
                  strokeWidth="5"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  // d="M20,100 C20,0 200,100 200,20"
                  // d="M10,100 C20,50 100,90 200,70 L300,20"
                  d="M20,100 L40,65 C70,0 200,100 230,0"
                />
                <path
                  className={styles.dashed}
                  fill="none"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  // d="M20,100 C20,0 200,100 200,20"
                  d="M20,100 L40,65 C70,0 200,100 230,0"
                />
                <polyline id="arrow2" points="0,-9 18,0 0,9 5,0" fill="#db5862">
                  <animateMotion
                    rotate="auto"
                    begin="0s"
                    dur="3s"
                    repeatCount="500"
                    fill="freeze"
                  >
                    <mpath xlinkHref="#Path-2" />
                  </animateMotion>
                </polyline>
              </g>
            </svg>
          </div>
          <div
            className={styles.animateTheBottomOne22}
            // data-aos="flip-left"
          >
            <p className={styles.animateTheParaText}>
              GET PLACED IN TOP IT COMPANIES AND GET SUCCESS IN YOUR CAREER
            </p>
          </div>
        </div>
        <div
          style={{
            border: "1px solid lightgray",
            marginTop: "40px",
            boxShadow: "2px 2px 2px 1px rgba(0,0,0,0.6)",
          }}
        ></div>
      </div>

      <Certificate />
      <OtpContainerFile />
      <Courses />
      <ExploreCourses />
      <FreeResourses />
      <OurMission />
      <StudentJourney />
      <LocationFile />
      <Testrimonial />
      <Awardsfile />
      <EnrollwithUS />
      <Faq />
    </div>
  );
};

export default IntroComponentFile;
