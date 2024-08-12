import React, { useEffect } from "react";
import styles from "./AdmissionProcess.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../Redux/Reducers/CreateSlice";

const AdmissionProcess = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
    // Aos.refresh();
  }, []);
  const dispatch = useDispatch();
  return (
    <div className={styles.TopMost}>
      <div className={styles.TextContainerTop} data-aos="zoom-in">
        <h3 className={styles.AdmissionText}>Admission Process</h3>
        <p className={styles.ParaTextTop}>
          There are 3 simple steps in the Admission Process which is detailed
          below:
        </p>
      </div>
      <div className={styles.TheMain}>
        <div className={styles.Box1}>
          <h3 className={styles.step}>Step 1</h3>
          <h3 className={styles.heading}>Complete Application Form</h3>
          <p className={styles.paragraph}>
            Fill out an application form online
          </p>
        </div>
        <div className={styles.Box}>
          <h3 className={styles.step}>Step 2</h3>
          <h3 className={styles.heading}>Get Shortlisted & Receive your OL</h3>
          <p className={styles.paragraph}>
            Our admission commitee will review profile.Upon qualifying,offer
            letter will be sent to you
          </p>
        </div>
        <div className={styles.Box}>
          <h3 className={styles.step}>Step 3</h3>
          <h3 className={styles.heading}>
            Block your seat & Begin the prep course
          </h3>
          <p className={styles.paragraph}>
            Block your seat with a payment to enrol on the programme
          </p>
        </div>
      </div>
      <div
        className={styles.Button}
        onClick={() => dispatch(openModal("registration"))}
      >
        Register Now
      </div>
    </div>
  );
};

export default AdmissionProcess;
