import React, { useEffect } from "react";
import styles from "./Testrimonial.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Aos from "aos";
// import "aos/dist/aos.css";

const Testrimonial = () => {
  // useEffect(() => {
  //   Aos.init({});
  //   Aos.refresh();
  // }, []);
  const CourseList = [
    {
      ParagraphText:
        "Choosing Digital Skill Up turned out to be one of my best choices. The engaging professors, experiential learning opportunities, and cooperative environment have significantly influenced my academic journey. Along with information, I've made friends throughout life and acquired priceless abilities that will definitely help me in my job.",
      TextName: "Rabon Tim",
      TextPosition: "Skl other prvistion",
      image: "Images/22passport.jpeg",
      title: "Web Application",
    },
    {
      ParagraphText:
        "I have the sincerest gratitude for my experience at Digital Skill Up. The encouraging environment and individualized attention I've received from my lecturers have enabled me to pursue my interests and succeed academically. With research opportunities, internships, and campus involvement, among other means, Digital Skill Up has equipped me with the necessary tools and resources to succeed in and out of the classroom.",
      TextName: "Mike Hasson",
      TextPosition: "tirumal and university",
      image: "Images/passport22.jpg",
      title: "Tracking & guide",
    },
    {
      ParagraphText:
        "Highly impressed with the educational resources offered. The user-friendly inte,kenwke wkef fer frf jf m,d qwdw dwd qwjd qwrface makes navigation a breeze, while the diverse range of subjects caters to all interests. A must-visit for anyone seeking quality online learning.",
      TextName: "Lako Huss",
      TextPosition: "Social and we gk",
      image: "Images/passport2222.jpg",
      title: "Digital marketing",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 781 },
      items: 3,
    },
    tabletSmall: {
      breakpoint: { max: 781, min: 560 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className={styles.Container}>
        <h1 className={styles.upperText}>
          What our
          <span
            style={{ color: "#fc0067", marginLeft: "8px", marginTop: "2px" }}
          >
            Customers
          </span>{" "}
          are saying
        </h1>
        {/* <h2 className={styles.UpperSecondText}>A word from our partners</h2> */}
        {/* <div className={styles.MainContainer}>
          <Carousel responsive={responsive} className={styles.crololo}>
            {CourseList.map((element) => (
              <div className={styles.innerContainer}>
                <div className={styles.paraContainer}>
                  <p className={styles.paraText}>{element?.ParagraphText}</p>
                </div>
                <div className={styles.ImageNameContainer}>
                  <img src={element?.image} className={styles.Image} />
                  <h1 className={styles.TextuserName}>{element?.TextName}</h1>
                </div>
              </div>
            ))}
          </Carousel>
        </div> */}
        <div className={styles.mainConatinerWhatwedo} data-aos="fade-right">
          {/* <Carousel responsive={responsive} className={styles.crololo}> */}
          <div className={styles.ContainerWhatweDo}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              {/* <h1 className={styles.TextWhatwedo}>What we do?</h1> */}
              <p className={styles.paraWhatweDo}>
                Choosing Digital Skill Up turned out to be one of my best
                choices. The engaging professors, experiential learning
                opportunities, and cooperative environment have significantly
                influenced my academic journey. Along with information, I've
                made friends throughout life and acquired priceless abilities
                that will definitely help me in my job.
              </p>
              <div className={styles.ImageNameContainer}>
                <img src="Images/22passport.jpeg" className={styles.Image} />
                <h1 className={styles.TextuserName}>Mayank Dangwal</h1>
              </div>
            </div>
          </div>
          <div className={styles.ContainerWhatweDo}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              {/* <h1 className={styles.TextWhatwedo}>What we do?</h1> */}
              <p className={styles.paraWhatweDo}>
                I have the sincerest gratitude for my experience at Digital
                Skill Up. The encouraging environment and individualized
                attention I've received from my lecturers have enabled me to
                pursue my interests and succeed academically. Digital Skill Up
                has equipped me with the necessary tools and resources to
                succeed in and out of the classroom.
              </p>
              <div className={styles.ImageNameContainer}>
                <img src="/Images/passport22.jpg" className={styles.Image} />
                <h1 className={styles.TextuserName}>Sarthak Tripathi</h1>
              </div>
            </div>
          </div>
          <div className={styles.ContainerWhatweDo}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              {/* <h1 className={styles.TextWhatwedo}>What we do?</h1> */}
              <p className={styles.paraWhatweDo}>
                Studying in Digital Skill Up has been a life-changing event. The
                dedication of the faculty and staff to student success is
                evident in every aspect of campus life. With a broad range of
                extracurricular and academic offerings in addition to
                cutting-edge facilities, Digital Skill Up provides a vibrant
                learning environment where students can succeed.
              </p>
              <div className={styles.ImageNameContainer}>
                <img src="Images/passport2222.jpg" className={styles.Image} />
                <h1 className={styles.TextuserName}>Vinay Pathak</h1>
              </div>
            </div>
          </div>
          {/* </Carousel> */}
        </div>
      </div>
    </div>
  );
};

export default Testrimonial;
