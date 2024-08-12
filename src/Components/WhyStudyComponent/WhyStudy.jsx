import React from "react";
import styles from "./WhyStudy.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { useSelector } from "react-redux";

const WhyStudy = () => {
  const { category } = useSelector((Select) => Select?.modal);
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
  return (
    <div style={{ margin: "80px 0px" }}>
      <div className={styles.AllCourseConatinerTopText} data-aos="zoom-in">
        <h1 className={styles.AllCourseConatinerTopMainText}>
          Why study {category}?
        </h1>
        <p className={styles.AllCourseConatinerTopTextPara}>
          Ranked as the second-best job, a career in the data domain provides a
          fast track for advancement.
        </p>
      </div>
      <div
        className={styles.Main}
        style={{ backgroundImage: "url(../Images/div.png)" }}
      >
        <div className={styles.TheLeft}>
          <div className={styles.TheLeftTextCOnatiner}>
            <h1 className={styles.TheHighText}>High-Growth Sector</h1>
            <p className={styles.TheHighpARA}>
              Experience ultra-fast growth in career & salary owing to the
              sector’s high demand.
            </p>
          </div>
          <div className={styles.ImageConatiner}>
            <img src="../Images/graphfinel20202.png" className={styles.Image} />
          </div>
        </div>
        <div className={styles.TheLeft}>
          <div
            style={{
              width: "400px",
              cursor: "pointer",
            }}
          >
            <Carousel
              responsive={responsive}
              showDots={false}
              autoPlay={true}
              autoPlaySpeed={2000}
              infinite={true}
              arrows={false}
            >
              <div className={styles.crouselPara}>
                <BiSolidQuoteAltLeft className={styles.Iconji} />
                <p className={styles.ParaRghtText}>
                  Learn essential data skills, analyze data that drives
                  decisions, and accelerate your careerLearn essential data
                  skills, analyze data that drives decisions, and accelerate
                  your careerLearn essential data skills, analyze data that
                  drives decisions, and accelerate your career
                </p>
              </div>
            </Carousel>
          </div>
          <div
            style={{ marginTop: "30px" }}
            className={styles.MostDemandedConatiner}
          >
            <h3>Most-In Demand</h3>
            <p className={styles.ParaRghtText}>
              The demand for data analysts is projected to grow by 35% from 2022
              to 2032, significantly faster than the average for all
              occupations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyStudy;
