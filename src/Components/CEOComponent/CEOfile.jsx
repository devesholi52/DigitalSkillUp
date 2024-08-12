import React from "react";
import styles from "./CEOfile.module.css";

const CEOfile = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: "url(./Images/background1.jpg)" }}
    >
      <div className={styles.Maincontainer}>
        <img src="./Images/Maam.JPG" className={styles.image} />
      </div>
      <div className={styles.Textcontainer}>
        <div className={styles.Adjustimagediv}>
          <img src="./Images/Maam.JPG" className={styles.imageAdjust} />
        </div>
        <div className={styles.smallDiv}>
          <h1 className={styles.MainHeading}>WELCOME MESSAGE FROM</h1>
          <h1 className={styles.Subheading}>CEO TO NEW CLIENT</h1>
        </div>
        <div className={styles.smallDiv}>
          <h5 className={styles.InnerText}>Welcome Message</h5>
          <p className={styles.paratext}>
            Our Mission is clear. We are building to train over 10 Crores Career
            Aspirants living in under-resourced demographics of Bharat. We are
            tirelessly working to empower you Career Seekers with Professional &
            Practical Tech/Non-tech Skills to help you compete for your dream
            career opportunities on Global Podium. Ab Bharat ka har graduate
            seekhega Top Professional Skills easy to understand Language mein!
            Kahin bhi, Kabhi bhi!
          </p>
        </div>
        <div>
          <h5 className={styles.CEOName}>Naveen Chauhan</h5>
          <p className={styles.CEOPosition}>CEO & Founder</p>
        </div>
      </div>
    </div>
  );
};

export default CEOfile;
