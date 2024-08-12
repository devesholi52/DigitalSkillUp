import React, { useEffect } from "react";
import styles from "./FreeResourses.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Aos from "aos";
// import "aos/dist/aos.css";

const FreeResourses = () => {
  const { category } = useSelector((Select) => Select?.modal);
  // useEffect(() => {
  //   Aos.init({});
  //   Aos.refresh();
  // }, []);
  return (
    <div className={styles.TheMain}>
      <div className={styles.divTextConatiner}>
        <h1 className={styles.Heading}>
          Upskill with our
          <span style={{ color: "#fc0067", marginLeft: "10px" }}>
            Free Resources
          </span>
        </h1>
        <p className={styles.Para}>
          Engage and excel with our diverse collection of free learning
          resources, from quizzes to e-books and interactive challenges-
          designed to lift your career at zero cost!
        </p>
      </div>
      <div className={styles.FourNameDiv}>
        <div className={styles.Name} data-aos="fade-right">
          Interview Bites
        </div>
        <div className={styles.Name} data-aos="fade-right">
          Quizzes
        </div>
        <div className={styles.Name} data-aos="fade-left">
          Articles
        </div>
        <div className={styles.Name} data-aos="fade-left">
          eBooks
        </div>
        <div className={styles.Name} data-aos="fade-left">
          Templates
        </div>
        <div className={styles.Name} data-aos="fade-left">
          CaseStudies
        </div>
      </div>
      <div className={styles.ThreeNameDiv}>
        <div className={styles.Name} data-aos="fade-right">
          Intractive Challenges
        </div>
        <div className={styles.Name} data-aos="fade-right">
          Courses
        </div>
        <div className={styles.Name} data-aos="fade-left">
          Exercises
        </div>
        <div className={styles.Name} data-aos="fade-left">
          Flashcards
        </div>
        <div className={styles.Name} data-aos="fade-left">
          Tools
        </div>
      </div>
      <Link className={styles.ExploreNow} to={`/course/${category}`}>
        Explore Now
      </Link>
    </div>
  );
};

export default FreeResourses;
