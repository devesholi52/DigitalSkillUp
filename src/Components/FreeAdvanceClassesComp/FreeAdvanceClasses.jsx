import React from "react";
import Carousel from "react-multi-carousel";
import styles from "./FreeAdvanceClasses.module.css";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../Redux/Reducers/CreateSlice";
import { useDispatch } from "react-redux";

const FreeAdvanceClasses = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const dataLists = [
    {
      image: "./Images/1700.jpg",
    },
    {
      image: "./Images/top222.jpg",
    },
    {
      image: "./Images/negisir.jpg",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className={styles.MainContainer}>
        <div className={styles.TextContainer}>
          <h1 className={styles.FreeHeadText}>Free Advance Classes</h1>
          <p>
            Participate in expert-guided, engaging live sessions tailored to
            expand your knowledge and sharpen your skills in your specific area
            of interest.
          </p>
          <div
            className={styles.ButtonAdvance}
            onClick={() => Navigate("./AllAdvanceclasses")}
          >
            <p className={styles.AdvanceText}>See all Advance Classes</p>
          </div>
        </div>
        <div
          style={{
            width: "800px",
            cursor: "pointer",
          }}
        >
          <Carousel
            responsive={responsive}
            showDots={false}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
            arrows={false}
          >
            {dataLists.map((list, index) => (
              // <div className={styles.InnerContainer}>
              //   <div
              //     className={styles.Container}
              //     style={{
              //       backgroundImage: list?.image,
              //     }}
              //   ></div>
              // </div>
              <div
                className={styles.Container}
                style={
                  {
                    // backgroundImage: list?.image,
                  }
                }
                onClick={() => dispatch(openModal("registration"))}
              >
                <img src={list?.image} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div
        style={{
          width: "80%",
          border: "1px solid lightgray",
          margin: "auto",
          marginTop: "70px",
        }}
      ></div>
    </>
  );
};

export default FreeAdvanceClasses;
