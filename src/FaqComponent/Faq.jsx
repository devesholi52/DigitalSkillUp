import React, { useState } from "react";
import styles from "./Faq.module.css";
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
function Faq() {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.container} id="faq">
      <h2 className={styles.FrequentlyTopText}>Frequently Asked Questions</h2>
      <div className={styles.accordion}>
        {a.map((e) => (
          <div className={styles.accordion_item} key={e.id}>
            <button
              id="accordion-button-1"
              aria-expanded={active === e.id ? true : false}
              onClick={() => (active === e.id ? setActive(0) : setActive(e.id))}
            >
              <span className={styles.accordion_title}>{e.q}</span>
              <span className={styles.icon} aria-hidden="true"></span>
            </button>
            <div className={styles.accordion_content}>
              <p className={styles.paratextInner}>{e.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
