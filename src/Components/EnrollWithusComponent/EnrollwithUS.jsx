import React, { useState } from "react";
import styles from "./EnrollwithUS.module.css";
import Otp from "../OtpModule/Otp";

const EnrollwithUS = () => {
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState("");

  const [Register, setRegister] = useState({
    name: "",
    number: "",
    // role: "",
    email: "",
    description: "",
  });

  const Data = [
    {
      _id: "1",
      name: "Student",
    },
    {
      _id: "2",
      name: "Teacher",
    },
  ];

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
    if (Register?.description === "") {
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
      <div
        className={styles.TheMainContainer}
        style={{ backgroundImage: "url(../Images/div.png)" }}
      >
        <div className={styles.Container}>
          <div className={styles.ImageContainer}>
            <img src="./Images/EnrollWithus.png" className={styles.Image} />
          </div>
          <div className={styles.ContainerInputBox}>
            <input
              placeholder="Enter Your Name"
              className={styles.InputBox}
              type="text"
              id="name"
              name="name"
              onChange={formHandel}
              value={Register?.name}
            />
            <input
              placeholder="Enter Your Number"
              className={styles.InputBox}
              type="number"
              onKeyDown={abc}
              id="number"
              name="number"
              onChange={formHandel}
              value={Register?.number}
            />
            {/* <div style={{ width: "450px" }}> */}
            <input
              placeholder="Enter Your email"
              onChange={formHandel}
              type="email"
              id="email"
              name="email"
              value={Register.email}
              className={styles.InputBox}
            />
            {emailError && (
              <p style={{ color: "red", marginTop: "-20px" }}>{emailError}</p>
            )}
            {/* </div> */}
            <input
              placeholder="Enter your field"
              onChange={formHandel}
              type="description"
              id="description"
              name="description"
              value={Register.description}
              className={styles.InputBox}
            />
            {/* <select
            name="role"
            onChange={formHandel}
            // id="user"
            value={Register.role}
            className={styles.Selectbox}
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

            <div className={styles.ButtonContainer} onClick={SendOtp}>
              <p className={styles.ButtonText}>Submit</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollwithUS;
