import React from "react";
import styles from "./CompUnderCourseDetails.module.css";
import { useNavigate } from "react-router-dom";
import { HiAnnotation } from "react-icons/hi";
import { HiAcademicCap } from "react-icons/hi";
import { ImFinder } from "react-icons/im";
import { ImSoundcloud2 } from "react-icons/im";
import { DiProlog } from "react-icons/di";
import { LiaToolsSolid } from "react-icons/lia";
import { IoIosAlbums } from "react-icons/io";
import { FaTools } from "react-icons/fa";
// import Aos from "aos";
// import "aos/dist/aos.css";
import { useEffect } from "react";
import { MdOutlineAssistant } from "react-icons/md";

const CompUnderCourseDetailsFile = (courseDetail) => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   Aos.init();
  //   Aos.refresh();
  // }, []);

  const BlogData = [
    {
      ParagraphText:
        "Engage in, hands-on learning by working on real projects, gaining practical skills and experience applicable in professional settings. These projects provide invaluable experience, preparing you for real-world challenges and enhancing your employability upon graduation. ",
      TextName: "Real Project Experience",
      TextPosition: "Skl other prvistion",
      image: <HiAnnotation />,
      title: "Web Application",
    },
    {
      ParagraphText:
        "Receive instruction on advanced techniques, staying ahead in your field and mastering cutting-edge industry practices. Our curriculum integrates the latest advancements, ensuring you are equipped with the most relevant skills and knowledge demanded by employers in today's competitive market.",
      TextName: "Advanced Techniques",
      TextPosition: "tirumal and university",
      image: <HiAcademicCap />,
      title: "Tracking & guide",
    },
    {
      ParagraphText:
        "Access premium tools and resources, empowering you with the same resources used by industry professionals. Our platform provides exclusive access to cutting-edge software and tools, enabling you to hone your skills and stay at the forefront of technological advancements in your field.",
      TextName: "Premium Tools Access",
      TextPosition: "tirumal and university",
      image: <FaTools />,
      title: "Tracking & guide",
    },
    {
      ParagraphText:
        "Benefit from personalized mentorship and guidance, receiving support tailored to your individual learning needs and career aspirations. Our experienced mentors are committed to your success, providing personalized feedback, advice, and support to help you achieve your goals and excel in your field.",
      TextName: "Personalized Mentorship",
      TextPosition: "tirumal and university",
      image: <ImSoundcloud2 />,
      title: "Tracking & guide",
    },
    {
      ParagraphText:
        "Receive comprehensive job assistance, including resume building, interview preparation, and job placement support to launch your career. Our dedicated career services team is here to support you every step of the way, helping you secure rewarding employment opportunities aligned with your skills and aspirations.",
      TextName: "Comprehensive Job Assistance",
      TextPosition: "Social and we gk",
      image: <MdOutlineAssistant />,
      title: "Digital marketing",
    },
    {
      ParagraphText:
        " Earn a recognized certification upon course completion, validating your expertise and enhancing your professional credibility. Our certifications are widely respected in the industry, providing you with a competitive edge and opening doors to exciting career opportunities in your chosen field.",
      TextName: "Recognized Certification",
      TextPosition: "Social and we gk",
      image: <IoIosAlbums />,
      title: "Digital marketing",
    },
  ];

  return (
    <div className={styles.Container}>
      <h1 className={styles.TopText} data-aos="zoom-in">
        Why Learn {courseDetail?.courseDetail?.name} With Digital Skill Up?
      </h1>
      <div className={styles.MainCardConatiner}>
        {/* {BlogData.map((e) => { */}

        {/* return ( */}
        <div className={styles.card} data-aos="fade-right">
          <div className={styles.image}>
            <HiAnnotation />
          </div>
          <h3 className={styles.NameText}>Real Project Experience</h3>
          <p className={styles.ParaText}>
            Engage in, hands-on learning by working on real projects, gaining
            practical skills and experience applicable in professional settings.
            These projects provide invaluable experience, preparing you for
            real-world challenges and enhancing your employability upon
            graduation.
          </p>
        </div>
        <div className={styles.card} data-aos="fade-down">
          <div className={styles.image}>
            <HiAcademicCap />
          </div>
          <h3 className={styles.NameText}>Advanced Techniques</h3>
          <p className={styles.ParaText}>
            Receive instruction on advanced techniques, staying ahead in your
            field and mastering cutting-edge industry practices. Our curriculum
            integrates the latest advancements, ensuring you are equipped with
            the most relevant skills and knowledge demanded by employers in
            today's competitive market.
          </p>
        </div>
        <div className={styles.card} data-aos="fade-left">
          <div className={styles.image}>
            <LiaToolsSolid />
          </div>
          <h3 className={styles.NameText}>Premium Tools Access</h3>
          <p className={styles.ParaText}>
            Access premium tools and resources, empowering you with the same
            resources used by industry professionals. Our platform provides
            exclusive access to cutting-edge software and tools, enabling you to
            hone your skills and stay at the forefront of technological
            advancements in your field.
          </p>
        </div>
        <div className={styles.card} data-aos="fade-right">
          <div className={styles.image}>
            <ImSoundcloud2 />
          </div>
          <h3 className={styles.NameText}>Personalized Mentorship</h3>
          <p className={styles.ParaText}>
            Benefit from personalized mentorship and guidance, receiving support
            tailored to your individual learning needs and career aspirations.
            Our experienced mentors are committed to your success, providing
            personalized feedback, advice, and support to help you achieve your
            goals and excel in your field.
          </p>
        </div>
        <div className={styles.card} data-aos="fade-up">
          <div className={styles.image}>
            <MdOutlineAssistant />
          </div>
          <h3 className={styles.NameText}>Comprehensive Job Assistance</h3>
          <p className={styles.ParaText}>
            Receive comprehensive job assistance, including resume building,
            interview preparation, and job placement support to launch your
            career. Our dedicated career services team is here to support you
            every step of the way, helping you secure rewarding employment
            opportunities aligned with your skills and aspirations.
          </p>
        </div>
        <div className={styles.card} data-aos="fade-left">
          <div className={styles.image}>
            <IoIosAlbums />
          </div>

          <h3 className={styles.NameText}>Recognized Certification</h3>
          <p className={styles.ParaText}>
            Earn a recognized certification upon course completion, validating
            your expertise and enhancing your professional credibility. Our
            certifications are widely respected in the industry, providing you
            with a competitive edge and opening doors to exciting career
            opportunities in your chosen field.
          </p>
        </div>
        {/* ) */}
        {/* })} */}
      </div>
    </div>
  );
};

export default CompUnderCourseDetailsFile;
