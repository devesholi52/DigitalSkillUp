import React, { useState } from "react";
import styles from "./CourseFAQ.module.css";
import { useEffect } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";

const a = [
  {
    id: 1,
    q: "What kind of courses you provide” ?",
    a: "When Pyschic Master are online, then you can “CHAT” with Pyschic Master live.",
  },
  {
    id: 2,
    q: "Is there any live class happening ?",
    a: "“Ask” questions answer are replied within 24 hours",
  },
  {
    id: 3,
    q: " what should be course structure?",
    a: "In this Pyschic Master read your zodiac sunshine with Vedic method",
  },
  {
    id: 4,
    q: "Is there any registration fee?",
    a: "You can reach us at contact@digitalskillup.com",
  },
];

function CourseFAQ() {
  const [active, setActive] = useState(0);
  const [CourseFAQ, setCourseFAQ] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    fetch("http://localhost:3000/CourseFaq", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCourseFAQ(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={styles.container} id="faq" data-aos="fade-right">
      <h2 className={styles.FrequentlyTopText}>Frequently Asked Questions</h2>
      <div className={styles.accordion}>
        {CourseFAQ.map((e) => (
          <div className={styles.accordion_item} key={e._id}>
            <button
              id="accordion-button-1"
              aria-expanded={active === e._id ? true : false}
              onClick={() =>
                active === e._id ? setActive(0) : setActive(e._id)
              }
            >
              <span className={styles.accordion_title}>{e.Question}</span>
              <span className={styles.icon} aria-hidden="true"></span>
            </button>
            <div className={styles.accordion_content}>
              <p className={styles.paratextInner}>{e.Answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseFAQ;
