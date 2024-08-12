import React, { useState, useEffect } from "react";
import styles from "./OtpContainerFile.module.css";
import { openModal } from "../../Redux/Reducers/CreateSlice";
import { useDispatch, useSelector } from "react-redux";
import Otp from "../OtpModule/Otp";
// import Aos from "aos";
// import "aos/dist/aos.css";

const OtpContainerFile = () => {
  // useEffect(() => {
  //   Aos.init({});
  //   Aos.refresh();
  // }, []);
  const { isOpen, modalType } = useSelector((Select) => Select?.modal);
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState("");

  const [Register, setRegister] = useState({
    name: "",
    number: "",
    email: "",
    description: "",
  });

  // console.log("Register.name", Register.name);

  const [otp, setOtp] = useState("");
  const [emailError, setEmailError] = useState("");

  const formHandel = (e) => {
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
    if (emailError) {
      // New line to check email error before sending OTP
      alert("Please provide a valid email");
      return;
    }
    if (Register?.description === "") {
      alert("please fill in");
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
          // console.log("response?.lead?.number", response?.numberinlead?.number);
          setNumber(response?.numberinlead?.number);
          setRegister({
            name: "",
            number: "",
            email: "",
            description: "",
          });
          setOpen(true);
        }
      });
    // .finally(e => setLoading(false))
  };

  const closemodel = () => {
    setOpen(false);
  };

  return (
    <>
      {open && <Otp closemodal={closemodel} number={number} />}
      <div className={styles.container} data-aos="fade-right">
        <img src="./Images/Confusion.png" className={styles.TopImage} />
        <div className={styles.TextInputcontainer}>
          <h1 className={styles.tagLine}>
            Confused About Your Path?
            <br />
            We're Here to Help
          </h1>
          <span className={styles.tagLine} style={{ color: "#fc0067" }}>
            Register Now!
          </span>
          {/* <p
            style={{
              fontSize: "1rem",
              fontFamily: "Poppins, sans-serif",
              color: "gray",
              fontWeight: "400",
            }}
            className={styles.bottomtagline}
          >
            Join the thousands who rely on us for their learning success
          </p> */}
          <input
            type="text"
            id="name"
            name="name"
            onChange={formHandel}
            value={Register?.name}
            placeholder="Enter Your Name"
            style={{
              borderRadius: "6px",
              border: "1px solid black",
              outline: "none",
            }}
            className={styles.textInput}
          />
          <input
            type="number"
            onKeyDown={abc}
            id="number"
            name="number"
            onChange={formHandel}
            value={Register?.number}
            placeholder="Enter Your Mobile Number"
            style={{
              borderRadius: "6px",
              border: "1px solid black",
              outline: "none",
            }}
            className={styles.textInput}
          />
          <div style={{ backgroundColor: "white" }}>
            <input
              type="text"
              id="email"
              name="email"
              onChange={formHandel}
              value={Register?.email}
              placeholder="Enter Your Email"
              style={{
                borderRadius: "6px",
                border: "1px solid black",
                outline: "none",
                backgroundColor: "white",
              }}
              className={styles.textInput}
            />
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}
          </div>
          <input
            type="text"
            id="description"
            name="description"
            onChange={formHandel}
            value={Register?.description}
            placeholder="Enter Your Field"
            style={{
              borderRadius: "6px",
              border: "1px solid black",
              outline: "none",
            }}
            className={styles.textInput}
          />
          <p className={styles.verficationText}>
            We’ll send an OTP for verification
          </p>
          <div
            className={styles.buttonDiv}
            // onClick={() => dispatch(openModal("otpQuestion"), openModal())}
            onClick={SendOtp}
          >
            Register
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpContainerFile;
