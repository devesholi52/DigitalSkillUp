import React, { useEffect, useState } from "react";
import styles from "../ModelComponent/Model.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  openModal,
  openOtpModal,
} from "../Redux/Reducers/CreateSlice";
import SuccessModelTeacher from "../Components/SuccessModelTecher/SuccessModelTeacher";

const Model = ({ setIsOpen }) => {
  const { isOpen, modalType } = useSelector((state) => state.modal);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {};
  }, []);

  const dispatch = useDispatch();
  const [number, setNumber] = useState("");

  const [Register, setRegister] = useState({
    name: "",
    number: "",
    email: "",
    description: "",
  });

  // const Data = [
  //   {
  //     _id: "1",
  //     name: "Student",
  //   },
  //   {
  //     _id: "2",
  //     name: "Teacher",
  //   },
  // ];

  // console.log("Register.name", Register.name);

  const [otp, setOtp] = useState("");
  const [open, setOpen] = useState(false);
  const formHandel = (e) => {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setRegister({ ...Register, [name]: value });
    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // New line for email regex pattern
      if (!emailPattern.test(value)) {
        setEmailError("Invalid email format"); // New line for setting email error
      } else {
        setEmailError(""); // New line for clearing email error
      }
    }
  };
  const abc = (e) => {
    if (Register.number.length >= 10 && e.key !== "Backspace") {
      e.preventDefault();
    }
  };

  const SendOtp = () => {
    if (Register.name === "") {
      alert("please fill in");
      return;
    }
    if (Register?.number === "") {
      alert("please fill in");
      return;
    }
    if (Register?.role === "") {
      alert("please fill in");
      return;
    }
    if (Register?.description === "") {
      alert("please fill in");
      return;
    }
    if (emailError) {
      // New line to check email error before sending OTP
      alert("Please provide a valid email");
      return;
    }
    fetch("http://localhost:3000/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Register),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("first response", response);
        if (response?.error == "Number already registred") {
          alert("Number already registred");
        }
        if (response?.message == "6 Digit otp sent to your mobile number") {
          console.log("response?.lead?.number", response?.numberinlead?.number);
          setNumber(response?.numberinlead?.number);
          dispatch(openModal("otp"));
        }
      });
    // .finally(e => setLoading(false))
  };

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
          // alert(response.message);
          dispatch(closeModal());
          setOpen(true);
        } else {
          alert(response.message);
        }
      });
  };
  const [emailError, setEmailError] = useState("");

  const closeModel = () => {
    setOpen(false);
  };
  // console.log("isOpen in normal", isOpen);
  return (
    <>
      {open && <SuccessModelTeacher closeModel={closeModel} />}
      {isOpen && (
        <div className={styles.modelWrapper}>
          <div className={styles.ModelContainer}>
            <div
              className={styles.iconContainer}
              onClick={() => dispatch(closeModal())}
            >
              <IoIosCloseCircle className={styles.iconStyle} />
            </div>
            <div className={styles.imageContainer}>
              <img src="../Images/FinalLogo.png" className={styles.Image} />
            </div>

            <div className={styles.inputBoxContainer}>
              {modalType === "registration" && (
                <>
                  <h1 className={styles.RegisterText}>Register Yourself</h1>
                  <input
                    placeholder="Enter Your Name"
                    onChange={formHandel}
                    type="text"
                    id="name"
                    name="name"
                    value={Register.name}
                    className={styles.inputbox}
                  />
                  {/* <input
                    placeholder="Enter Your Email"
                    className={styles.inputbox}
                  /> */}
                  <input
                    placeholder="Enter Your Mobile Number"
                    onChange={formHandel}
                    type="number"
                    onKeyDown={abc}
                    id="number"
                    name="number"
                    value={Register.number}
                    className={styles.inputbox}
                  />
                  <input
                    placeholder="Enter Your email"
                    onChange={formHandel}
                    type="email"
                    id="email"
                    name="email"
                    value={Register.email}
                    className={styles.inputbox}
                  />
                  {emailError && (
                    <p
                      style={{
                        color: "red",
                        marginTop: "-20px",
                        marginLeft: "16px",
                      }}
                    >
                      {emailError}
                    </p>
                  )}
                  <input
                    placeholder="Enter your field"
                    onChange={formHandel}
                    type="description"
                    id="description"
                    name="description"
                    value={Register.description}
                    className={styles.inputbox}
                  />
                  {/* <select
                    name="role"
                    onChange={formHandel}
                    // id="user"
                    value={Register.role}
                    className={styles.inputbox}
                    style={{ color: "gray", border: "none" }}
                  >
                    <option default>Select Course</option>
                    {Data.map((e) => {
                      // console.log("i am here", e);
                      // console.log("e.name", e.name);
                      // console.log("Register.user", Register.user);
                      return (
                        <option key={e._id} value={e.name}>
                          {e.name}
                        </option>
                      );
                    })}
                  </select> */}
                  <div
                    className={styles.buttonContainer}
                    onClick={() => SendOtp()}
                  >
                    <h3 className={styles.buttonContainerText}>Send Otp</h3>
                  </div>
                  <p className={styles.paragraphText}>
                    We will send you a OTP on your registred mobile number
                  </p>
                </>
              )}
              {modalType === "otp" && (
                <>
                  <h1 className={styles.RegisterText}>OTP Confirmation</h1>
                  <p className={styles.RegisterTextBottompara}>
                    6 Digits OTP has been send to {Register.number}
                  </p>
                  <input
                    placeholder="Enter OTP"
                    onChange={(e) => setOtp(e.target.value)}
                    type="number"
                    id="otp"
                    name="otp"
                    value={otp}
                    className={styles.inputbox}
                  />
                  <div
                    className={styles.buttonContainer}
                    onClick={() => VerifyOtp()}
                  >
                    <h3 className={styles.buttonContainerText}>Submit</h3>
                  </div>
                  <p className={styles.paragraphText}>Please confirm via OTP</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
