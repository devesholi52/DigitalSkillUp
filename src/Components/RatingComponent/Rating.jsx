import React from "react";
import styles from "./Rating.module.css";
import { GoDotFill } from "react-icons/go";
import { IoStarSharp } from "react-icons/io5";

const Rating = () => {
  const Data = [
    {
      UserImage: "../Images/33Peertopeer.avif",
      UserName: "Timothy K.",
      Star: "★★★★",
      time: "a week ago",
      Description:
        "I am a self taught programmer who has been programming for over 30 years. This is the best online course I have ever taken. Angela does an amazing job explaining the concepts, putting them in practice, yet moving along",
    },
    {
      UserImage: "../Images/33Peertopeer.avif",
      UserName: "Piyush K.",
      Star: "★★★★★",
      time: "a month ago",
      Description:
        "Hey Vivek here I loved this course as it helped me not only in doing coding stuffs but also motivated me to be discipline because every new thing you learn requires time and a lot of practise which comes with discipline .",
    },
    {
      UserImage: "../Images/33Peertopeer.avif",
      UserName: "Parkash K.",
      Star: "★★★",
      time: "a week ago",
      Description:
        "Was a great class, I started and took some other classes and came back to it. Angela covered many of the fundamentals to get you started in Web Development. The Web 3 stuff was super interesting but a large learning",
    },
    {
      UserImage: "../Images/33Peertopeer.avif",
      UserName: "Jeno Eugene M.",
      Star: "★★★★",
      time: "a week ago",
      Description:
        "Well built course through and through.I know it's really hard to keep a course of this length keep updated. I gave it 5 stars after I finished, it tells a lot.",
    },
  ];

  return (
    <div className={styles.Container}>
      <div className={styles.HeadingTxtContainer}>
        <IoStarSharp
          className={styles.IconStarTop}
          style={{ color: "#fc0067" }}
        />
        <h1 className={styles.IconText}>4.7 course rating</h1>
        <GoDotFill className={styles.IconStarTop} />
        <h1 className={styles.IconText}>377K ratings</h1>
      </div>
      <div className={styles.card}>
        {Data.map((e) => {
          return (
            <div className={styles.InnerConatiner}>
              <div className={styles.NameRatingConatiner}>
                <img src={e?.UserImage} className={styles.image} />
                <div>
                  <h3>{e?.UserName}</h3>
                  <p>{e?.Star}</p>
                </div>
              </div>
              <p className={styles.Disc}>{e?.Description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
