import React, { useEffect, useState } from "react";
import styles from "./Certificate.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Aos from "aos";
// import "aos/dist/aos.css";
import { FaLaptopCode } from "react-icons/fa";

const Certificate = () => {
  const [isHovered, setIsHovered] = useState(null);
  // useEffect(() => {
  //   Aos.init({});
  //   Aos.refresh();
  // }, []);
  const dataLists = [
    {
      image: "url(./Images/11feedback.jpg)",
      image2: "url(./Images/22Cerficate.webp)",
      title: "ONLINE & OFFLINE CLASSES AVAILABLE",
      icon: "<FaLaptopCode />",
      desc: " Discover our learning options! Choose online classes with videos, interactive content, and virtual labs, or offline classes with in-person lectures and hands-on activities. Learn the way that works best for you!",
    },
    {
      image: "url(./Images/22Cerficate.webp)",
      image2: "url(./Images/22Cerficategradiant.jpg)",
      title: "BECOME CERTIFIED PROFESSIONAL",
      desc: "Advance your career with our certification programs! Choose from many courses, learn from experts, gain practical skills, and boost your credentials. Enroll now and take the next step toward success!",
    },
    {
      image: "url(./Images/33Peertopeer.avif)",
      image2: "url(./Images/11feedback.jpg)",
      title: "ONE TO ONE SESSION",
      desc: "Need help with your studies? Book a one-on-one session to clear your doubts! Get personal guidance from experts, understand tough concepts, and boost your confidence. Schedule now and take charge of your learning!",
    },
    // {
    //   image: "url(./Images/44course.jpeg)",
    //   image2: "url(./Images/11feedback.jpg)",
    //   title: "Course Transcript",
    //   desc: "Upon finishing courses, earn certificates recognizing your accomplishments. Validate your skills and enhance your career",
    // },
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
      breakpoint: { max: 1024, min: 705 },
      items: 3,
    },
    Undertablet: {
      breakpoint: { max: 705, min: 471 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 471, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className={styles.MainContainer}>
        <h1 className={styles.TopTextHeading}>
          Elevate your profile with our Personalized Certification
        </h1>

        <div className={styles.TopContainer} data-aos="fade-right">
          <Carousel
            responsive={responsive}
            className={styles.crololo}
            autoPlay={true}
          >
            {dataLists.map((e, index) => (
              <div
                className={styles.Container}
                style={{
                  backgroundImage: e?.image,
                }}
              >
                <div className={styles.innerdiv}>
                  {/* <div className={styles.innerTextcontainer}> */}
                  <h1 className={styles.TopText}>{e?.title}</h1>
                  <p className={styles.paragrphText}>{e?.desc}</p>
                  {/* </div> */}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
