import React from "react";
import styles from "./FreePageAdvance.module.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../Redux/Reducers/CreateSlice";
import EnrollwithUS from "../EnrollWithusComponent/EnrollwithUS";
import Faq from "../../FaqComponent/Faq";

const FreePageAdvance = () => {
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
  return (
    <div>
      <div
        className={styles.ContainerLargeScreenSize}
        style={{ backgroundImage: "url(./Images/bannerAdvance.jpg)" }}
      >
        <div className={styles.TextContainer}>
          <h1 className={styles.UpperText}>Transform Knowledge into Mastery</h1>
          <p className={styles.paraText}>
            Join advanced courses designed to elevate your skills and knowledge
            in your chosen field and excel.
          </p>
        </div>
      </div>
      <div>
        <h1 className={styles.TextHeading}>Our Master Classes</h1>
      </div>

      <div className={styles.InnerContainer}>
        {dataLists.map((list, index) => (
          <div
            className={styles.Container}
            onClick={() => dispatch(openModal("registration"))}
            style={
              {
                // backgroundImage: list?.image,
              }
            }
          >
            <img src={list?.image} />
          </div>
        ))}
      </div>
      <EnrollwithUS />
      <Faq />
    </div>
  );
};

export default FreePageAdvance;
