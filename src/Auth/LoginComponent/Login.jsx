import React, { useState } from "react";
import styles from "./Login.module.css";
import { IoLockClosedSharp, IoLockOpenSharp } from "react-icons/io5";

const Login = () => {
  const [icon, setIcon] = useState(false);
  return (
    <div className={styles.MainContainer}>
      <div className={styles.InnerContainer}>
        <div className={styles.imageContainer}>
          <img src="../Images/DigitalSkillup.png" className={styles.image} />
        </div>
        <h1 className={styles.LoginText}>Login</h1>
        <div className={styles.inputDiv}>
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
            <label htmlFor="Password" className={styles.label}>
              Password
            </label>
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            > */}
            <input
              placeholder="Enter Password"
              className={styles.InputBox}
              type={icon === true ? "text" : "password"}
            />
            <div
              onClick={() => setIcon(!icon)}
              className={styles.lockunlockIcon}
            >
              {icon === true ? <IoLockOpenSharp /> : <IoLockClosedSharp />}
            </div>
            {/* </div> */}
          </div>
          <p className={styles.ForgotPassText}>Forgot Password?</p>
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

export default Login;
