import React, { useEffect } from "react";
import styles from "./OurMission.module.css";
import { Link } from "react-router-dom";
// import Aos from "aos";
// import "aos/dist/aos.css";

const OurMission = () => {
  // useEffect(() => {
  //   Aos.init({});
  //   Aos.refresh();
  // }, []);
  return (
    <div className={styles.Container}>
      <div className={styles.MainContainer}>
        <div className={styles.aaaaa} data-aos="fade-right">
          <img src="./Images/Mission.png" className={styles.Image} />
        </div>
        <div className={styles.SubContainer}>
          <div style={{ width: "15%", border: "1px solid #f7410b" }}></div>
          <h1 className={styles.HeadingText} data-aos="fade-left">
            MISSION
          </h1>
          <p className={styles.ParaText}>
            Digital Skill Up Mission is very straightforward. We are creating
            training facilities to serve more than 10 crore career aspirants who
            reside in underserved areas of Bharat. We are working effortlessly
            to provide you, Career Seekers with Professional & Practical
            Tech/Non-Tech Skills so you can compete on Global Podium for your
            ideal career possibilities.
          </p>
          <Link
            to="/about"
            className={styles.viewmorecontainer}
            style={{
              backgroundColor: "#f7410b",
              textDecoration: "none",
              cursor: "pointer",
            }}
            data-aos="fade-right"
          >
            <p className={styles.viewmoreText}>View More</p>
          </Link>
        </div>
      </div>
      <div className={styles.MainContainer}>
        <div className={styles.bbbb} data-aos="fade-right">
          <img src="./Images/Vision.png" className={styles.Image} />
        </div>
        <div className={styles.SubContainer}>
          <div style={{ width: "10%", border: "1px solid #00CAD0" }}></div>
          <h1 className={styles.HeadingText} data-aos="fade-left">
            VISION
          </h1>
          <p className={styles.ParaText}>
            Being one of the top educational platforms in Bharat, we strive to
            create a dynamic learning environment that nurtures creativity,
            critical thinking and collaboration. By continuously enhancing our
            curriculum and facilities, we aim to inspire lifelong learning and
            prepare our students to thrive in an ever-evolving world.
          </p>
          <Link
            to="/about"
            className={styles.viewmorecontainer}
            style={{
              backgroundColor: "#00CAD0",
              textDecoration: "none",
              cursor: "pointer",
            }}
            data-aos="fade-right"
          >
            <p className={styles.viewmoreText}>View More</p>
          </Link>
        </div>
        <div className={styles.aaaaabbb} data-aos="fade-left">
          <img src="./Images/Vision.png" className={styles.Image} />
        </div>
      </div>
      <div className={styles.MainContainer}>
        <div className={styles.aaaaa} data-aos="fade-right">
          <img src="./Images/Values.png" className={styles.Image} />
        </div>
        <div className={styles.SubContainer}>
          <div style={{ width: "10%", border: "1px solid #FFB200" }}></div>
          <h1 className={styles.HeadingText} data-aos="fade-left">
            VALUES
          </h1>
          <p className={styles.ParaText}>
            At our Digital Skill Up educational platform, we uphold the values
            of excellence, integrity and inclusivity, ensuring high-quality and
            ethical education for all. Committed to Bharat's growth, we foster
            community, collaboration and sustainability in every learning
            experience.
          </p>
          <Link
            to="/about"
            className={styles.viewmorecontainer}
            style={{
              backgroundColor: "#FFB200",
              textDecoration: "none",
              cursor: "pointer",
            }}
            data-aos="fade-right"
          >
            <p className={styles.viewmoreText}>View More</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
