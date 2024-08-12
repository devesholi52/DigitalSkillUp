import React, { useEffect, useState } from "react";
import styles from "./JoinInstructor.module.css";
import CEOfile from "../CEOComponent/CEOfile";
import { HiAnnotation } from "react-icons/hi";
import { HiAcademicCap } from "react-icons/hi";
import { ImFinder } from "react-icons/im";
import { ImSoundcloud2 } from "react-icons/im";
import { DiProlog } from "react-icons/di";
import { IoIosAlbums } from "react-icons/io";
import ClipLoader from "react-spinners/ClipLoader";
import SuccessModelTeacher from "../SuccessModelTecher/SuccessModelTeacher";

const JoinInstructor = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can also scroll to the top when the component unmounts
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleForm = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const Submit = async () => {
    if (admin.name === "") {
      alert("please fill in");
      return;
    }
    if (admin.email === "") {
      alert("please fill in");
      return;
    }
    if (admin.number === "") {
      alert("please fill in");
      return;
    }
    if (admin.message === "") {
      alert("please fill in");
      return;
    }
    setLoading(true);
    const res = await fetch("http://localhost:3000/ContactUs", {
      method: "POST",
      body: JSON.stringify(admin),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          // alert(
          //   "Your Form is Submitted successfully.We will contact you soon."
          // );
          setOpen(true);
          setLoading(false);
          setAdmin({ name: "", email: "", message: "" });
        }
      });
  };

  const closeModel = () => {
    setOpen(false);
  };

  const BlogData = [
    {
      ParagraphText:
        "Embrace cutting-edge teaching methods and technologies, engage and inspire students with the latest educational tools, and be at the forefront of educational innovation.",
      TextName: "Innovative Environment",
      TextPosition: "Skl other prvistion",
      image: <HiAnnotation />,
      title: "Web Application",
    },
    {
      ParagraphText:
        " Contribute to transforming education and making it accessible to learners across Bharat, helping bridge educational gaps and empowering future generations.",
      TextName: "Impactful Work",
      TextPosition: "tirumal and university",
      image: <HiAcademicCap />,
      title: "Tracking & guide",
    },
    {
      ParagraphText:
        "Work alongside a diverse team of passionate educators and industry experts, fostering a supportive and dynamic atmosphere where ideas and creativity thrive.",
      TextName: "Collaborative Culture",
      TextPosition: "tirumal and university",
      image: <ImFinder />,
      title: "Tracking & guide",
    },
  ];
  return (
    <>
      {open && <SuccessModelTeacher closeModel={closeModel} />}
      <div
        className={styles.ContainerLargeScreenSize}
        style={{ backgroundImage: "url(./Images/JoinInstrucotrImage.jpg)" }}
      >
        <div className={styles.InnerMaineContainer}>
          <div className={styles.TextContainer}>
            <h1>
              Are you passionate about changing the future of student education
              in Bharat!!
            </h1>
            {/* <h1>To a New Level</h1> */}
            <p className={styles.paraText}>
              {" "}
              At Digital Skill Up, we are committed to providing inclusive,
              creative and high-quality learning opportunities. To join our team
              and assist us in completing this purpose, we are seeking committed
              and motivated educators.
            </p>
          </div>
          <img
            src="./Images/collegestudy.png"
            className={styles.ImageTeacher}
          />
        </div>
      </div>
      <div className={styles.WhytojoinContainer}>
        <h1 className={styles.TopText}>Why to Join Us?</h1>
        <div className={styles.MainCardConatiner}>
          {BlogData.map((e) => {
            return (
              <div className={styles.card}>
                <div className={styles.imageUnderWhy}>{e.image}</div>
                <h3 className={styles.NameText}>{e?.TextName}</h3>
                <p className={styles.ParaText}>{e?.ParagraphText}</p>
              </div>
            );
          })}
        </div>
      </div>

      <>
        <h1 className={styles.mainformHeading}>
          Empower Minds, Inspire Futures: Join Our Teaching Community Today!
        </h1>
        <div className={styles.teacherFormContainer}>
          <div>
            <img src="./Images/teacherInput.png" className={styles.image} />
          </div>
          <div className={styles.teacherFormMainContainer}>
            <div>
              <h3 className={styles.label}>Name</h3>
              <input
                placeholder="Enter Your Name"
                type="text"
                id="name"
                name="name"
                className={styles.InputBox}
                onChange={handleForm}
                value={admin.name}
              />
            </div>
            <div>
              <h3 className={styles.label}>Mobile Number</h3>
              <input
                placeholder="Enter Your Mobile Number"
                type="number"
                id="number"
                name="number"
                className={styles.InputBox}
                onChange={handleForm}
                value={admin.number}
              />
            </div>
            <div>
              <h3 className={styles.label}>Email</h3>
              <input
                placeholder="Enter Your Email"
                className={styles.InputBox}
                onChange={handleForm}
                type="text"
                id="email"
                name="email"
                value={admin.email}
              />
            </div>
            <div>
              <h3 className={styles.label}>Field You Want To Apply</h3>
              <textarea
                placeholder="Enter Your Field"
                className={styles.textarea}
                type="text"
                id="message"
                name="message"
                onChange={handleForm}
                value={admin.message}
              />
            </div>
            {loading ? (
              <div className={styles.SubmitBox}>
                <ClipLoader
                  color={"white"}
                  loading={loading}
                  size={30}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            ) : (
              <div className={styles.SubmitBox} onClick={Submit}>
                <h4>Submit</h4>
              </div>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default JoinInstructor;
