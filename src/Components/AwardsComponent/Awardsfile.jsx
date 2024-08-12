import React from "react";
import styles from "./Awards.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Awardsfile = () => {
  const Awards = [
    {
      image: "Images/t.png",
      Uppertext: "ok i am here",
      Heading: "alex 1",
      smallBottomtext: "we are happy to hire you as a fresher",
    },
    {
      image: "Images/a.png",
      Uppertext: "I am coming home",
      Heading: "alex 1",
      smallBottomtext: " elements must have an alt prop, either with",
    },
    {
      image: "Images/f.png",
      Uppertext: "ok i am here",
      Heading: "alex 1",
      smallBottomtext:
        "assigned a value but never used to hire you as a fresher",
    },
    {
      image: "Images/i.png",
      Uppertext: "ok i am here",
      Heading: "alex 1",
      smallBottomtext: "you as a fresher assigned a value but never used",
    },
    {
      image: "Images/igsb.png",
      Uppertext: "ok i am here",
      Heading: "alex 1",
      smallBottomtext: "5 years of experience",
    },
    // {
    //   image: "Images/Certificate.png",
    // },
    // {
    //   image: "Images/44course.jpeg",
    // },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 720 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 3,
    },
  };
  return (
    <div className={styles.CourseViewContainer}>
      <div className={styles.innertextContainer}>
        <h1 style={{ color: "#312951", marginBottom: "5px" }}>
          Prime{" "}
          <span style={{ color: "#fc0067", marginLeft: "4px" }}>
            Hiring Destinations
          </span>
        </h1>
      </div>
      <Carousel
        responsive={responsive}
        showDots={false}
        autoPlay={true}
        autoPlaySpeed={1300}
        infinite={true}
        // customTransition="all .30"
        // transitionDuration={2000}
        arrows={false}
      >
        {Awards.map((list, index) => (
          <div className={styles.InnerContainer}>
            <img
              src={list?.image ? list.image : "Images/33course.jpg"}
              className={styles.ContainerImage}
            />
            {/* <div
              style={{
                marginTop: "30px",
                textAlign: "center",
              }}
            >
              <p>{list?.Uppertext}</p>
              <h1 style={{ fontSize: "20px" }}>{list?.Heading}</h1>
              <p style={{ marginTop: "7px" }}>{list?.smallBottomtext}</p>
            </div> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Awardsfile;
