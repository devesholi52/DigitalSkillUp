import React from "react";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.InnerContainer}>
        <div className={styles.imageContainer}>
          <img src="../Images/DigitalSkillup.png" className={styles.image} />
        </div>
        <h1 className={styles.LoginText}>Sign Up</h1>
        <div className={styles.inputDiv}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "14px",
            }}
          >
            <label htmlFor="Name" className={styles.label}>
              Name
            </label>
            <input placeholder="Enter Your Name" className={styles.InputBox} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "14px",
            }}
          >
            <label htmlFor="Email" className={styles.label}>
              Email
            </label>
            <input
              placeholder="Enter Your E-Mail"
              className={styles.InputBox}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "14px",
            }}
          >
            <label htmlFor="Number" className={styles.label}>
              Number
            </label>
            <input
              placeholder="Enter Your Number"
              className={styles.InputBox}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "14px",
            }}
          >
            <label htmlFor="Password" className={styles.label}>
              Password
            </label>
            <input placeholder="Enter Password" className={styles.InputBox} />
          </div>
          <p className={styles.TermPrivacyText}>
            by Continuing, I agree to the
            <span
              style={{ color: "#fc0067", margin: "0px 3px", fontSize: "13px" }}
            >
              Terms of Use
            </span>
            &
            <span
              style={{ color: "#fc0067", margin: "0px 3px", fontSize: "13px" }}
            >
              Privacy Policy
            </span>
          </p>
        </div>
        <div className={styles.ButtonDiv}>Continue</div>
      </div>
    </div>
  );
};

export default Signup;
