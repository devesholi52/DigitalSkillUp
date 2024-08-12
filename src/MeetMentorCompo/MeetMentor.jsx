import React, { useEffect } from "react";
import styles from "./MeetMentor.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const MeetMentor = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
    // Aos.refresh();
  }, []);
  return (
    <div className={styles.Container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        data-aos="zoom-in"
      >
        <h1 className={styles.AllCourseConatinerTopMainText}>
          Meet Your Mentors
        </h1>
        <p className={styles.AllCourseConatinerTopTextPara}>
          Learn from the mentors who have been there and done that.
        </p>
      </div>
      <div className={styles.AAA}>
        <div className={styles.MainContainer}>
          <div className={styles.ImageContainer}>
            <img src="../Images/Maam.JPG" className={styles.Image} />
          </div>
          <h3 className={styles.Name}>Preeti Chauhan</h3>
          <p className={styles.Para}>Analytics Lead</p>
        </div>
        <div className={styles.MainContainer}>
          <div className={styles.ImageContainer}>
            <img src="../Images/MrNaveen.jpeg" className={styles.Image} />
          </div>
          <h3 className={styles.Name}>Naveen Chauhan</h3>
          <p className={styles.Para}>Analytics Lead</p>
        </div>
        <div className={styles.MainContainer}>
          <div className={styles.ImageContainer}>
            <img src="../Images/Maam.JPG" className={styles.Image} />
          </div>
          <h3 className={styles.Name}>Vinay Jha</h3>
          <p className={styles.Para}>Analytics Lead</p>
        </div>
        <div className={styles.MainContainer}>
          <div className={styles.ImageContainer}>
            <img src="../Images/Maam.JPG" className={styles.Image} />
          </div>
          <h3 className={styles.Name}>Tushar kumar</h3>
          <p className={styles.Para}>Analytics Lead</p>
        </div>
      </div>
    </div>
  );
};

export default MeetMentor;
