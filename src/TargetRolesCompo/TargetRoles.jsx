import React from "react";
import styles from "./TargetRoles.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TargetRoles = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 720 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 2,
    },
  };
  const Awards = [
    {
      Name: "Big Data Engineer",
      Price: "₹6L - ₹15L",
    },
    {
      Name: "Statistical Analyst",
      Price: "₹4L - ₹9L",
    },
    {
      Name: "Data Scientist",
      Price: "₹3L - ₹9L",
    },
    {
      Name: "Data Engineer",
      Price: "₹6L - ₹10L",
    },
    {
      Name: "Machine Learning Engineer",
      Price: "₹7L - ₹16L",
    },
  ];
  return (
    <div className={styles.CourseViewContainer}>
      <div className={styles.innertextContainer}>
        <h1 style={{ color: "#312951", marginBottom: "5px" }}>
          Be the
          <span style={{ color: "#fc0067", marginLeft: "4px" }}>
            Bedrock of the Company!
          </span>
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ width: "100%" }}>
          <Carousel
            responsive={responsive}
            showDots={false}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
            // customTransition="all .30"
            // transitionDuration={2000}
            arrows={false}
            //   style={{ width: "800px" }}
          >
            {/* <div className={styles.TheMain}> */}
            {Awards.map((list, index) => (
              <div className={styles.InnerContainer}>
                <h3 className={styles.Name}>{list?.Name}</h3>
                <p className={styles.Para}>{list?.Price}</p>
              </div>
            ))}
            {/* </div> */}
          </Carousel>
        </div>
        <div style={{ width: "100%" }}>
          <Carousel
            responsive={responsive}
            showDots={false}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            // customTransition="all .30"
            // transitionDuration={2000}
            arrows={false}
            //   style={{ width: "800px" }}
          >
            {/* <div className={styles.TheMain}> */}
            {Awards.map((list, index) => (
              <div className={styles.InnerContainer}>
                <h3 className={styles.Name}>{list?.Name}</h3>
                <p className={styles.Para}>{list?.Price}</p>
              </div>
            ))}
            {/* </div> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TargetRoles;
