import React from "react";
import styles from "./StudentJourney.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LiaFantasyFlightGames } from "react-icons/lia";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiGameFill } from "react-icons/ri";
import { FaLayerGroup } from "react-icons/fa";
import { HiRectangleGroup } from "react-icons/hi2";
import { SiNintendogamecube } from "react-icons/si";

const StudentJourney = () => {
  const Awards = [
    {
      image: <BsPersonWorkspace />,
      Heading: "Interactive Engagement",
      Description:
        "Throughout their journey, students actively engage with instructors and peers through various interactive activities. They participate in group discussions, debates, Q&A sessions, interactive lectures and collaborative projects, sharing their perspectives and learning from others.",
    },
    {
      image: <FaLayerGroup />,
      Heading: "Practical Learning",
      Description:
        "Students begin their journey by participating in hands-on activities and experiments that allow them to apply theoretical concepts in real-world scenarios. They engage in practical sessions where they conduct experiments, simulations or projects under the guidance of instructors.",
    },
    {
      image: <SiNintendogamecube />,
      Heading: "Case Study Method",
      Description:
        "As students progress, they delve into case studies that provide insights into real-life situations, challenges, and solutions within their field of study. They analyze and discuss case studies to develop critical thinking skills, problem-solving abilities, and a deeper understanding of industry practices.",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <div className={styles.CourseViewContainer}>
      <div className={styles.innertextContainer}>
        <h1
          style={{ color: "#312951", marginBottom: "5px" }}
          className={styles.MainTopText}
        >
          Journey of the Students
          <span style={{ color: "#fc0067", marginLeft: "8px" }}>
            in Digital Skill Up
          </span>
        </h1>
        {/* <p style={{ width: "800px" }}>
          As India’s largest higher education company, we have been honoured
          with several awards.As India’s largest higher education company, we
          have been honoured with several awards.
        </p> */}
      </div>
      <div>
        <Carousel
          responsive={responsive}
          showDots={false}
          autoPlay={true}
          autoPlaySpeed={1000}
          infinite={true}
          arrows={false}
        >
          {Awards.map((list, index) => (
            <div className={styles.InnerContainer}>
              {/* <img
                src={list?.image ? list.image : "../Images/33course.jpg"}
                className={styles.ContainerImage}
                style={{ height: "120px", width: "120px" }}
              /> */}
              <div
                style={{
                  fontSize: "150px",
                  color: "#312951",
                }}
              >
                {list.image}
              </div>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1 style={{ fontSize: "23px", fontWeight: "600" }}>
                  {list?.Heading}
                </h1>
                <p style={{ margin: "10px 0px", textAlign: "left" }}>
                  {list?.Description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default StudentJourney;

// import React from "react";
// import styles from "./StudentJourney.module.css";
// import { useNavigate } from "react-router-dom";
// import { BsPersonWorkspace } from "react-icons/bs";
// import { FaLayerGroup } from "react-icons/fa";
// import { SiNintendogamecube } from "react-icons/si";
// import Carousel from "react-multi-carousel";

// const StudentJourney = (courseDetail) => {
//   const navigate = useNavigate();

//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 700 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 700, min: 0 },
//       items: 1,
//     },
//   };

//   const BlogData = [
//     {
//       ParagraphText:
//         "Throughout their journey, students actively engage with instructors and peers through various interactive activities. They participate in group discussions, debates, and collaborative projects, sharing their perspectives and learning from others.",
//       TextName: "Interactive Engagement",
//       TextPosition: "Skl other prvistion",
//       image: <BsPersonWorkspace />,
//       title: "Web Application",
//     },
//     {
//       ParagraphText:
//         "Students begin their journey by participating in hands-on activities and experiments that allow them to apply theoretical concepts in real-world scenarios. They engage in practical sessions where they conduct experiments, simulations, or projects under the guidance of instructors.",
//       TextName: "Practical Learning",
//       TextPosition: "tirumal and university",
//       image: <FaLayerGroup />,
//       title: "Tracking & guide",
//     },
//     {
//       ParagraphText:
//         "As students progress, they delve into case studies that provide insights into real-life situations, challenges, and solutions within their field of study. They analyze and discuss case studies to develop critical thinking skills, problem-solving abilities, and a deeper understanding of industry practices.",
//       TextName: "Case Study Method:",
//       TextPosition: "tirumal and university",
//       image: <SiNintendogamecube />,
//       title: "Tracking & guide",
//     },
//   ];

//   return (
//     <div className={styles.Container}>
//       <h1 className={styles.TopText}>
//         Why Learn {courseDetail?.courseDetail?.name} With Digital Skill Up?
//       </h1>
//       <div className={styles.MainCardConatiner}>
//         {BlogData.map((e) => {
//           return (
//             <div className={styles.card}>
//               <div className={styles.image}>{e.image}</div>
//               <h3 className={styles.NameText}>{e?.TextName}</h3>
//               <p className={styles.ParaText}>{e?.ParagraphText}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default StudentJourney;
