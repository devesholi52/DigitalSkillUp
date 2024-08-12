import React, { useEffect, useState } from "react";
import styles from "./ExploreCourses.module.css";
import { SelectedCategory } from "../Redux/Reducers/CreateSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoArrowRedo } from "react-icons/io5";
import { Link } from "react-router-dom";

const ExploreCourses = () => {
  function getUniqueCategories(courseDAta) {
    let category = [];

    courseDAta.map((course) => {
      let flag = true;

      for (let i = 0; i < category.length; i++) {
        if (course?.categoryID?._id === category[i]?._id) {
          flag = false;
          break;
        }
      }

      if (flag) category?.push(course?.categoryID);
    });

    return category;
  }
  const [courseData, setCourseData] = useState([]);
  const dispatch = useDispatch();
  const { category } = useSelector((Select) => Select?.modal);

  const a = [
    "../Images/Design.png",
    "../Images/Design.png",
    "../Images/Data.png",
    "../Images/AppDevelopment.png",
    "../Images/webdevlopment0011.png",
  ];
  // http://localhost:3000
  // http://localhost:3000
  useEffect(() => {
    GetData();
  }, [courseData]);
  const GetData = () => {
    fetch("http://localhost:3000/courses/allcourses", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCourseData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleCategorySelect = (category) => {
    dispatch(SelectedCategory(category));
  };
  const categories = getUniqueCategories(courseData);

  return (
    <div
      className={styles.TheMain}
      style={{ backgroundImage: "url(../Images/div.png)" }}
    >
      <div className={styles.TopContainer}>
        <div className={styles.TopContainerLeftTextWithCard}>
          <div className={styles.TopContainerLeftText}>
            <h1 className={styles.ExploreText}>Explore Top Career Domains</h1>
            <p className={styles.ParaText}>
              Discover career paths that truly resonate with your passion &
              explore mentorship programs that align perfectly with you.
            </p>
          </div>
          <Link
            className={styles.CardSingle}
            onClick={() => handleCategorySelect(categories[0].name)}
            to={`/course/${"Digital Marketing"}`}
          >
            <div className={styles.ImageCard}>
              <img
                src="./Images/DigitalMarketing0011.png"
                className={styles.Img}
              />
            </div>
            <h1 className={styles.CategoryName}>{categories[0]?.name}</h1>
            <div className={styles.SeeProgramDiv}>
              <p className={styles.SeeProgramText}>See Program</p>
              <IoArrowRedo className={styles.Icon} />
            </div>
          </Link>
        </div>

        <div className={styles.TopContainerRight}>
          {categories.map((list, index) => {
            return (
              <>
                {index > 0 && (
                  <Link
                    to={`/course/${list?.name}`}
                    className={styles.Card}
                    onClick={() => handleCategorySelect(list?.name)}
                  >
                    <div className={styles.ImageCard}>
                      <img src={a[index]} className={styles.Img} />
                    </div>
                    <h1 className={styles.CategoryName}>{list?.name}</h1>
                    <div className={styles.SeeProgramDiv}>
                      <p className={styles.SeeProgramText}>See Program</p>
                      <IoArrowRedo className={styles.Icon} />
                    </div>
                  </Link>
                )}
              </>
            );
          })}
        </div>
      </div>
      {/* <h1>hello</h1> */}
    </div>
  );
};

export default ExploreCourses;
