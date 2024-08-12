import React, { useEffect } from "react";
import styles from "./Certificate.module.css";

const CertificateFile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Textcontainer}>
        <h1 className={styles.WhyText}>Why Our Courses?</h1>
        <p className={styles.ParaText}>
          Choosing our courses on Digital Skill Up means embarking on a
          comprehensive and enriching learning journey. Our curriculum has been
          carefully developed to bridge the gap between theory and practice,
          ensuring that you not only understand concepts but also know how to
          apply them in real-world scenarios. With a strong emphasis on
          practical learning, our course includes hands-on activities, projects,
          and simulations that allow you to gain valuable experience and skills.
          Additionally, we incorporate the case study method, which enables you
          to analyze real-life situations, fostering critical thinking and
          problem-solving abilities. This approach provides you with deep
          insights into industry practices and prepares you for real-world
          challenges. Our teaching approach is centered on interactive
          involvement. Through debates, group discussions, and cooperative
          projects, our platform encourages active engagement and encourages you
          to express your ideas and pick up knowledge from your peers. Our
          knowledgeable instructors give you individualized comments and support
          to make sure you get the direction you need to be successful. To
          further enhance your educational experience, our platform provides
          access to a multitude of resources, such as libraries, labs, and
          instructional materials. You are selecting an education that will
          provide you the know-how, abilities, and self-assurance to succeed in
          your academic and career pursuits by selecting our course. Come along
          and let's start down the path to a better future.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="../Images/Orignalcertificate.jpg"
          className={styles.image}
          data-aos="flip-right"
        />
      </div>
    </div>
  );
};

export default CertificateFile;
