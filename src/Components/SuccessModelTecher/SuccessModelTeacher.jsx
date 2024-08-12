import React from "react";
import styles from "../SuccessModelTecher/SuccessModelReacher.module.css";
import { IoIosCloseCircle } from "react-icons/io";

const SuccessModelTeacher = ({ closeModel, closeModalOtp }) => {
  return (
    <div className={styles.modelWrapper}>
      <div className={styles.ModelContainer}>
        <img src="../Images/rightIcon1.jpg" className={styles.Image} />
        <div className={styles.iconContainer} onClick={() => closeModel()}>
          <IoIosCloseCircle className={styles.iconStyle} />
        </div>
        <h1 className={styles.TopText}>Thanks for Submitting your details</h1>
        <h3 className={styles.BottomText}>We will contact you soon.</h3>
      </div>
    </div>
  );
};

export default SuccessModelTeacher;
