import React from "react";
import styles from "./CourseEnquiry.module.css";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();

  const BlogData = [
    {
      ParagraphText:
        "Why enroll in our courses? Gain expert knowledge, acquire practical skills, and earn industry-recognized certifications to advance your career and foster personal development.",
      TextName: "Join our Courses ",
      TextPosition: "Skl other prvistion",
      image: "./Images/5437683.jpg",
      title: "Web Application",
    },
    {
      ParagraphText:
        "Why collaborate with us? Expand your reach, use expert material to improve your educational offerings, and offer industry-recognized certifications and useful, career-focused skills.",
      TextName: "Collaboration ",
      TextPosition: "tirumal and university",
      image: "./Images/44aa.webp",
      title: "Tracking & guide",
    },
    {
      ParagraphText:
        "Why partner with us for placements? Connect your students with top employers, enhance their career prospects, and showcase your institution's commitment to successful job outcomes.",
      TextName: "Placement Partnership Program",
      TextPosition: "tirumal and university",
      image: "./Images/33aa.png",
      title: "Tracking & guide",
    },
  ];

  return (
    <div className={styles.Container}>
      <h1 className={styles.CourseEnquiryText}>
        Unlock New Opportunities Through Quality{" "}
        <span style={{ color: "#fc0067" }}> Education and Training</span>
      </h1>
      <div className={styles.MainCardConatiner}>
        {BlogData.map((e) => {
          return (
            <div
              className={styles.card}
              // onClick={() => navigate("/blogDetail")}
            >
              <img src={e?.image} className={styles.image} />
              <h3 className={styles.NameText}>{e?.TextName}</h3>
              <p className={styles.ParaText}>{e?.ParagraphText}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
