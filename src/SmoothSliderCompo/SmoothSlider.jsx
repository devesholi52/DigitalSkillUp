import React, { useRef, useEffect } from "react";
import styles from "./SmoothSlider.module.css";

const SmoothSlider = () => {
  //   const logosRef = useRef(null);

  //   useEffect(() => {
  //     if (logosRef.current) {
  //       const copy = logosRef.current.cloneNode(true);
  //       logosRef.current.parentNode.appendChild(copy);
  //     }
  //   }, []);

  const Awards = [
    {
      image: "../Images/t.png",
      Uppertext: "ok i am here",
      Heading: "alex 1",
      smallBottomtext: "we are happy to hire you as a fresher",
    },
    {
      image: "../Images/a.png",
      Uppertext: "I am coming home",
      Heading: "alex 1",
      smallBottomtext: " elements must have an alt prop, either with",
    },
    {
      image: "../Images/f.png",
      Uppertext: "ok i am here",
      Heading: "alex 1",
      smallBottomtext:
        "assigned a value but never used to hire you as a fresher",
    },
    {
      image: "../Images/i.png",
      Uppertext: "ok i am here",
      Heading: "alex 1",
      smallBottomtext: "you as a fresher assigned a value but never used",
    },
    {
      image: "../Images/igsb.png",
      Uppertext: "ok i am here",
      Heading: "alex 1",
      smallBottomtext: "5 years of experience",
    },
    {
      image: "../Images/t.png",
      Uppertext: "ok i am here",
      Heading: "alex 1",
      smallBottomtext: "we are happy to hire you as a fresher",
    },
    {
      image: "../Images/a.png",
      Uppertext: "I am coming home",
      Heading: "alex 1",
      smallBottomtext: " elements must have an alt prop, either with",
    },
    {
      image: "../Images/f.png",
      Uppertext: "ok i am here",
      Heading: "alex 1",
      smallBottomtext:
        "assigned a value but never used to hire you as a fresher",
    },
    {
      image: "../Images/i.png",
      Uppertext: "ok i am here",
      Heading: "alex 1",
      smallBottomtext: "you as a fresher assigned a value but never used",
    },
    {
      image: "../Images/igsb.png",
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
  return (
    <div style={{ overflow: "hidden", height: "auto" }}>
      <div className={styles.logos}>
        {/* {Awards.map((list, index) => ( */}
        <div className={styles.logosslide}>
          <img src="../Images/33course.jpg" alt="33" />
          <img src="../Images/33course.jpg" alt="33" />
          <img src="../Images/33course.jpg" alt="33" />
          <img src="../Images/f.png" alt="f" />
          <img src="../Images/33course.jpg" alt="33" />
          <img src="../Images/33course.jpg" alt="33" />
          <img src="../Images/igsb.png" alt="igsb" />
          <img src="../Images/33course.jpg" alt="33" />
          <img src="../Images/i.png" alt="i" />
        </div>
        <div className={styles.logosslide}>
          <img src="../Images/33course.jpg" alt="33" />
          <img src="../Images/33course.jpg" alt="33" />
          <img src="../Images/33course.jpg" alt="33" />
          <img src="../Images/f.png" alt="f" />
          <img src="../Images/33course.jpg" alt="33" />
          <img src="../Images/33course.jpg" alt="33" />
          <img src="../Images/igsb.png" alt="igsb" />
          <img src="../Images/33course.jpg" alt="33" />
          <img src="../Images/i.png" alt="i" />
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default SmoothSlider;
