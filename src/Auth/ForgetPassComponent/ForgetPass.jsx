import React, { useState } from "react";
import styles from "./ForgetPass.module.css";
import { IoLockClosedSharp, IoLockOpenSharp } from "react-icons/io5";

const ForgetPass = () => {
  const [icon1, setIcon1] = useState(false);
  const [icon2, setIcon2] = useState(false);
  return (
    <div className={styles.MainContainer}>
      <div className={styles.InnerContainer}>
        <div className={styles.imageContainer}>
          <img src="../Images/DigitalSkillup.png" className={styles.image} />
        </div>
        <h1 className={styles.LoginText}>Forgot Password</h1>
        <div className={styles.inputDiv}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "14px",
            }}
          >
            <label htmlFor="Previouspassword" className={styles.label}>
              Enter Password
            </label>
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
                // border: "1px solid black",
              }}
            > */}
            <input
              placeholder="Enter Password"
              className={styles.InputBox}
              type={icon1 === true ? "text" : "password"}
            />
            <div
              onClick={() => setIcon1(!icon1)}
              className={styles.lockunlockIcon}
            >
              {icon1 === true ? <IoLockOpenSharp /> : <IoLockClosedSharp />}
            </div>
            {/* </div> */}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "14px",
            }}
          >
            <label htmlFor="ConfirmPassword" className={styles.label}>
              Confirm Password
            </label>
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            > */}
            <input
              placeholder="Confirm Password"
              className={styles.InputBox}
              type={icon2 === true ? "text" : "password"}
            />
            <div
              onClick={() => setIcon2(!icon2)}
              className={styles.lockunlockIcon}
            >
              {icon2 === true ? <IoLockOpenSharp /> : <IoLockClosedSharp />}
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className={styles.ButtonDiv}>Submit</div>
      </div>
    </div>
  );
};

export default ForgetPass;
