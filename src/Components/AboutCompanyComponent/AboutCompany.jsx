import React from "react";
import styles from "./AboutCompany.module.css";

const AboutCompany = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.LeftinnerContainer}></div>
      <h1 className={styles.heading}>Leadership Thoughts</h1>
      <h1 className={styles.heading2}>From Our CEO</h1>
      <div className={styles.ABC}>
        <div className={styles.MainContainer}>
          <div className={styles.ImageTextConatiner}>
            <div className={styles.ImageContainer}>
              <img src="../Images/MrNaveen.jpeg" className={styles.Image} />
            </div>
            <div className={styles.InnerTextConatiner}>
              <h3 className={styles.Name}>NAVEEN CHAUHAN</h3>
              <p className={styles.Description}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
