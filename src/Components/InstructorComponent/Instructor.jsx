import React from "react";
import styles from "./Instructor.module.css";
import { IoStarSharp } from "react-icons/io5";

const Instructor = () => {
  return (
    <>
      <div className={styles.Container}>
        <h1 className={styles.TopHeading}>Instructor</h1>
        <div className={styles.innerTopTextContainer}>
          <h2 className={styles.instructorName}>Dr. Angela Yu</h2>
          <p>Developer and Lead Instructor</p>
        </div>
        <div className={styles.UserContainer}>
          <div>
            <img src="../Images/33Peertopeer.avif" className={styles.image} />
          </div>
          <div className={styles.parentIconContainer}>
            <div className={styles.IconContainer}>
              <IoStarSharp />
              <p className={styles.Ratingtext}>4.7 Instructor Rating</p>
            </div>
            <div className={styles.IconContainer}>
              <IoStarSharp />
              <p className={styles.Ratingtext}>820,684 Reviews</p>
            </div>
            <div className={styles.IconContainer}>
              <IoStarSharp />
              <p className={styles.Ratingtext}>2,688,996 Students</p>
            </div>
            <div className={styles.IconContainer}>
              <IoStarSharp />
              <p className={styles.Ratingtext}>7 Courses</p>
            </div>
          </div>
        </div>
        <p className={styles.paratext}>
          I'm Angela, I'm a developer with a passion for teaching. I'm the lead
          instructor at the London App Brewery, London's leading Programming
          Bootcamp. I've helped hundreds of thousands of students learn to code
          and change their lives by becoming a developer.
        </p>
      </div>
      <div className={styles.Container} style={{ marginTop: "-30px" }}>
        {/* <h1 className={styles.TopHeading}>Instructor</h1> */}
        <div className={styles.innerTopTextContainer}>
          <h2 className={styles.instructorName}>Dr. Priyanshu Ti</h2>
          <p>Digital Marketing Expert</p>
        </div>
        <div className={styles.UserContainer}>
          <div>
            <img src="../Images/22course.png" className={styles.image} />
          </div>
          <div className={styles.parentIconContainer}>
            <div className={styles.IconContainer}>
              <IoStarSharp />
              <p className={styles.Ratingtext}>3.9 Instructor Rating</p>
            </div>
            <div className={styles.IconContainer}>
              <IoStarSharp />
              <p className={styles.Ratingtext}>654,980 Reviews</p>
            </div>
            <div className={styles.IconContainer}>
              <IoStarSharp />
              <p className={styles.Ratingtext}>3,688,996 Students</p>
            </div>
            <div className={styles.IconContainer}>
              <IoStarSharp />
              <p className={styles.Ratingtext}>10 Courses</p>
            </div>
          </div>
        </div>
        <p className={styles.paratext}>
          I'm Angela, I'm a developer with a passion for teaching. I'm the lead
          instructor at the London App Brewery, London's leading Programming
          Bootcamp. I've helped hundreds of thousands of students learn to code
          and change their lives by becoming a developer.
        </p>
      </div>
    </>
  );
};

export default Instructor;
