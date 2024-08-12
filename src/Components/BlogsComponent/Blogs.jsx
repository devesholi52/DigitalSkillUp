import React, { useEffect, useState } from "react";
import styles from "./Blogs.module.css";
import { Link, useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  const [blogsData, setBlogsData] = useState([]);
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can also scroll to the top when the component unmounts
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  // const BlogData = [
  //   {
  //     ParagraphText:
  //       "Choosing Digital Skill Up turned out to be one of my best choices. The engaging professors, experiential learning opportunities, and cooperative environment have significantly influenced my academic journey. Along with information, I've made friends throughout life and acquired priceless abilities that will definitely help me in my job.",
  //     BlogName: "Digital marketing Via the sources",
  //     TextName: "Rabon Tim",
  //     CreatedAt: "24th Aug 2024",
  //     TextPosition: "Skl other prvistion",
  //     image: "./Images/44course.jpeg",
  //     title: "Web Application",
  //   },
  //   {
  //     ParagraphText:
  //       "I have the sincerest gratitude for my experience at Digital Skill Up. The encouraging environment and individualized attention I've received from my lecturers have enabled me to pursue my interests and succeed academically. With research opportunities, internships, and campus involvement, among other means, Digital Skill Up has equipped me with the necessary tools and resources to succeed in and out of the classroom.",
  //     TextName: "Mike Hasson",
  //     CreatedAt: "24th Aug 2024",
  //     BlogName: "Digital marketing Via the sources",
  //     TextPosition: "tirumal and university",
  //     image: "./Images/44aa.webp",
  //     title: "Tracking & guide",
  //   },
  //   {
  //     ParagraphText:
  //       "I have the sincerest gratitude for my experience at Digital Skill Up. The encouraging environment and individualized attention I've received from my lecturers have enabled me to pursue my interests and succeed academically. With research opportunities, internships, and campus involvement, among other means, Digital Skill Up has equipped me with the necessary tools and resources to succeed in and out of the classroom.",
  //     TextName: "Mike Hasson",
  //     CreatedAt: "24th Aug 2024",
  //     BlogName: "Digital marketing Via the sources",
  //     TextPosition: "tirumal and university",
  //     image: "./Images/33aa.png",
  //     title: "Tracking & guide",
  //   },
  //   {
  //     ParagraphText:
  //       "I have the sincerest gratitude for my experience at Digital Skill Up. The encouraging environment and individualized attention I've received from my lecturers have enabled me to pursue my interests and succeed academically. With research opportunities, internships, and campus involvement, among other means, Digital Skill Up has equipped me with the necessary tools and resources to succeed in and out of the classroom.",
  //     TextName: "Mike Hasson",
  //     CreatedAt: "28th Aug 2024",
  //     BlogName: "Digital marketing Via the sources",
  //     TextPosition: "tirumal and university",
  //     image: "./Images/22Cerficate.webp",
  //     title: "Tracking & guide",
  //   },
  //   {
  //     ParagraphText:
  //       "Highly impressed with the educational resources offered. The user-friendly inte,kenwke wkef fer frf jf m,d qwdw dwd qwjd qwrface makes navigation a breeze, while the diverse range of subjects caters to all interests. A must-visit for anyone seeking quality online learning.",
  //     TextName: "Lako Huss",
  //     CreatedAt: "24th Aug 2024",
  //     BlogName: "Digital marketing Via the sources",
  //     TextPosition: "Social and we gk",
  //     image: "./Images/Certificate.png",
  //     title: "Digital marketing",
  //   },
  //   {
  //     ParagraphText:
  //       "Highly impressed with the educational resources offered. The user-friendly inte,kenwke wkef fer frf jf m,d qwdw dwd qwjd qwrface makes navigation a breeze, while the diverse range of subjects caters to all interests. A must-visit for anyone seeking quality online learning.",
  //     TextName: "Lako Huss",
  //     CreatedAt: "10th Nov 2024",
  //     BlogName: "Digital marketing Via the sources",
  //     TextPosition: "Social and we gk",
  //     image: "./Images/44aa.webp",
  //     title: "Digital marketing",
  //   },
  //   {
  //     ParagraphText:
  //       "Highly impressed with the educational resources offered. The user-friendly inte,kenwke wkef fer frf jf m,d qwdw dwd qwjd qwrface makes navigation a breeze, while the diverse range of subjects caters to all interests. A must-visit for anyone seeking quality online learning.",
  //     TextName: "Lako Huss",
  //     CreatedAt: "14th Mar 2024",
  //     BlogName: "Digital marketing Via the sources",
  //     TextPosition: "Social and we gk",
  //     image: "./Images/33aa.png",
  //     title: "Digital marketing",
  //   },
  //   {
  //     ParagraphText:
  //       "Highly impressed with the educational resources offered. The user-friendly inte,kenwke wkef fer frf jf m,d qwdw dwd qwjd qwrface makes navigation a breeze, while the diverse range of subjects caters to all interests. A must-visit for anyone seeking quality online learning.",
  //     TextName: "Lako Huss",
  //     CreatedAt: "4th sep 2024",
  //     BlogName: "Digital marketing Via the sources",
  //     TextPosition: "Social and we gk",
  //     image: "./Images/44aa.webp",
  //     title: "Digital marketing",
  //   },
  // ];

  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    fetch("http://localhost:3000/blogs", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlogsData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={styles.Container}>
      {/* <div className={styles.TopContainer}> */}
      {/* <h1 style={{ maxWidth: "400px" }}>
          We are the Important Chaptor in Blogging chaptor
        </h1>
        <p style={{ maxWidth: "400px" }}>
          We are the Important Chaptor in Blogging chaptor We are the Important
          Chaptor in Blogging chaptor We are the Important Chaptor in Blogging
          chaptor We are the Important Chaptor in Blogging chaptor
        </p> */}
      <img src="./Images/blognewdesign.jpg" className={styles.TopImage} />
      {/* </div> */}
      <div className={styles.MainCardConatiner}>
        {blogsData.map((e) => {
          return (
            <Link
              className={styles.card}
              // onClick={() => navigate("/blogDetail")}
              to={`/blogDetail/${e._id}`}
            >
              <img src={e?.photo} className={styles.image} />
              <h3 className={styles.BlogText}>{e?.name}</h3>
              <p className={styles.CreatedAt}>{e?.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
