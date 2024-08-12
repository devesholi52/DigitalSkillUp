import React, { useEffect, useState } from "react";
import styles from "../OtpModule/Otp.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { closeModal, openModal } from "../../Redux/Reducers/CreateSlice";
import { useDispatch } from "react-redux";
import SuccessModelTeacher from "../SuccessModelTecher/SuccessModelTeacher";
import SuccesModelCommon from "../SuccesModelCommon/SuccesModelCommon";

const Otp = ({ closemodal, number }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  const [otp, setOtp] = useState("");

  const VerifyOtp = () => {
    fetch("http://localhost:3000/OtpVerify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp, number }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success === true) {
          // closemodal();
          setOpen(true);
        } else {
          alert(response.message);
        }
      });
  };
  const closeModelll = () => {
    setOpen(false);
  };
  // alert("jdj sjs");
  return (
    <>
      {open && (
        <SuccesModelCommon
          closeModel={closeModelll}
          closeModalOtp={closemodal}
        />
      )}
      <div className={styles.modelWrapper}>
        <div className={styles.ModelContainer}>
          <div className={styles.iconContainer} onClick={closeModelll}>
            <IoIosCloseCircle className={styles.iconStyle} />
          </div>
          <div className={styles.imageContainer}>
            <img src="./Images/FinalLogo.png" className={styles.Image} />
          </div>
          <div className={styles.inputBoxContainer}>
            <h1 className={styles.RegisterText}>
              Begin the Journey <br /> Register Without Hesitation
            </h1>
            <input
              placeholder="Confirm OTP"
              className={styles.inputbox}
              onChange={(e) => setOtp(e.target.value)}
              type="number"
              id="otp"
              name="otp"
              value={otp}
            />
            <div className={styles.buttonContainer} onClick={VerifyOtp}>
              <h3 className={styles.buttonContainerText}>Enter Otp</h3>
            </div>
            <p className={styles.paragraphText}>
              Confirm Your Identity - Let Us Know It's You
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
