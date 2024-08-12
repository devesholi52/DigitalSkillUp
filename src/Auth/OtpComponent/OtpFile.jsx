import React from "react";
import styles from "./Otp.module.css";

const OtpFile = () => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.InnerContainer}>
        <div className={styles.imageContainer}>
          <img src="../Images/DigitalSkillup.png" className={styles.image} />
        </div>
        <h1 className={styles.LoginText}>Confirm OTP</h1>
        <p className={styles.SmallOtpText}>
          We’ve sent a OTP to{" "}
          <span
            style={{ color: "#fc0067", fontSize: "13px", marginRight: "2px" }}
          >
            Aman@gmail.com
          </span>
          . Please enter it to complete verification
        </p>
        <div className={styles.inputDiv}>
          <label htmlFor="Password" className={styles.label}>
            Enter Otp
          </label>
          <input placeholder="Enter OTP" className={styles.InputBox} />
        </div>
        <div className={styles.ButtonDiv}>Verify</div>
      </div>
    </div>
  );
};

export default OtpFile;
