import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./DetailCourse.module.css";
import { IoCheckmarkOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { useParams } from "react-router-dom";
import OtpContainerFile from "../OtpContainer/OtpContainerFile";
import TopSectionCDetail from "../TopSectionCourseDeatil/TopSectionCDetail";
import { useEffect } from "react";
import moment from "moment";
import Instructor from "../InstructorComponent/Instructor";
import Rating from "../RatingComponent/Rating";
import StudentJourney from "../JourneyStudent/StudentJourney";
import Syllabus from "../SyllabusComponent/Syllabus";
import CompUnderCourseDetailsFile from "../CompUnderCourseDetails/CompUnderCourseDetailsFile";
import Faq from "../../FaqComponent/Faq";
import CertificateFile from "../CertificateComponent/CertificateFile";
import CourseFAQ from "../CourseFAQComponent/CourseFAQ";
import AdmissionProcess from "../AdmissionProcessCopmo/AdmissionProcess";
import SmoothSlider from "../../SmoothSliderCompo/SmoothSlider";

const DetailCourseFile = () => {
  const { id } = useParams();
  const [courseDetail, setCourseDetail] = useState([]);
  const [batchDetail, setBatchDetails] = useState([]);
  console.log("batchDeatl", batchDetail);

  // console.log("courseDetail.longDecription", courseDetail);

  const ArrayHere = [
    {
      name: "ram",
      description: "abc",
      Time: "12",
      Duration: "1234",
    },
    {
      name: "ram",
      description: "abc",
      Time: "12",
      Duration: "1234",
    },
  ];

  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    fetch("http://localhost:3000/batch/allbatches", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBatchDetails(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getCourseDetail();
  }, [id]);
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can also scroll to the top when the component unmounts
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const getCourseDetail = () => {
    fetch(`http://localhost:3000/courses/${id}`, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCourseDetail(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const ArrayofCourseFeature = [
    {
      number: 1,
      FeatureName: "sample Head",
      discription:
        "we provide you the best experience in our course readabilty formate",
    },
    {
      number: 2,
      FeatureName: "sample Head",
      discription:
        "we provide you the best experience in our course readabilty formate",
    },
    {
      number: 3,
      FeatureName: "sample Head",
      discription:
        "we provide you the best experience in our course readabilty formate",
    },
    {
      number: 4,
      FeatureName: "sample Head",
      discription:
        "we provide you the best experience in our course readabilty formate",
    },
    {
      number: 5,
      FeatureName: "sample Head",
      discription:
        "we provide you the best experience in our course readabilty formate",
    },
    {
      number: 6,
      FeatureName: "sample Head",
      discription:
        "we provide you the best experience in our course readabilty formate",
    },
  ];
  return (
    <div>
      <TopSectionCDetail courseDetail={courseDetail} />

      <div className={styles.BatchContainer}>
        <div className={styles.BatchMainContainer}>
          {/* <div
            style={{
              border: "1px solid black",
              width: "100%",
              height: "auto",
              paddingTop: "50px",
            }}
          > */}
          <div
            style={{ backgroundColor: "white", overflow: "visible" }}
            className={styles.AvailablebatchTextDiv}
          >
            <h1 className={styles.AvailablebatchText}>
              Available{" "}
              <span style={{ color: "#fc0067", paddingLeft: "3px" }}>
                {" "}
                Batch{" "}
              </span>
            </h1>
          </div>
          <table className={styles.tableContainer}>
            <thead className={styles.RowBackGround}>
              <tr>
                <th style={{ padding: "10px" }} className={styles.TextBatchTop}>
                  Batch Start Date
                </th>
                <th style={{ padding: "10px" }} className={styles.TextBatchTop}>
                  Shift
                </th>
                <th style={{ padding: "10px" }} className={styles.TextBatchTop}>
                  Duration
                </th>
                <th style={{ padding: "10px" }} className={styles.TextBatchTop}>
                  Seat
                </th>
              </tr>
            </thead>
            <tbody style={{ color: "white" }} className={styles.inneroneDivvv}>
              {batchDetail.map((e) => {
                if (e?.courseID?._id == id) {
                  return (
                    <tr
                      style={{
                        border: "1px solid black",
                        color: "black",
                        textAlign: "center",
                        borderBottom: "1px solid black",
                      }}
                    >
                      <td>
                        <p
                          style={{
                            padding: "14px 0px",
                            borderBottom: "1px solid lightgray",
                          }}
                          className={styles.BottomBatchdataText}
                        >
                          {moment(e?.timing).format("MM/DD/YYYY")}
                        </p>
                      </td>
                      <td>
                        <p
                          style={{
                            padding: "14px 0px",
                            borderBottom: "1px solid lightgray",
                          }}
                          className={styles.BottomBatchdataText}
                        >
                          {e?.shift}
                        </p>
                      </td>
                      <td>
                        <p
                          style={{
                            padding: "14px 0px",
                            borderBottom: "1px solid lightgray",
                          }}
                          className={styles.BottomBatchdataText}
                        >
                          {e?.duration}
                        </p>
                      </td>
                      <td>
                        <p
                          style={{
                            padding: "14px 0px",
                            borderBottom: "1px solid lightgray",
                          }}
                          className={styles.BottomBatchdataText}
                        >
                          Few Seats left
                        </p>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
          <div className={styles.tableContainerSmall}>
            {batchDetail.map((e) => {
              if (e?.courseID?._id == id) {
                return (
                  <>
                    <div className={styles.ProperDivSmall}>
                      <div className={styles.ProperDivSmallName}>
                        <h4>Batch Start Date</h4>
                      </div>
                      <p>{moment(e?.timing).format("MM/DD/YYYY")}</p>
                    </div>
                    <div className={styles.ProperDivSmall}>
                      <div className={styles.ProperDivSmallName}>
                        <h4>Shift</h4>
                      </div>
                      <p>{e?.shift}</p>
                    </div>
                    <div className={styles.ProperDivSmall}>
                      <div className={styles.ProperDivSmallName}>
                        <h4>Duration</h4>
                      </div>
                      <p>{e?.duration}</p>
                    </div>
                    <div className={styles.ProperDivSmall}>
                      <div className={styles.ProperDivSmallName}>
                        <h4>Seat</h4>
                      </div>
                      <p>Few Seats left</p>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
        <div className={styles.PriceContainer}>
          <h1 className={styles.CourseFeetext}>Course Fees</h1>
          <h1 className={styles.CourseFee}>
            {courseDetail && courseDetail.price && courseDetail.OffpricePercent
              ? Math.round(
                  courseDetail?.price -
                    (courseDetail.price * courseDetail.OffpricePercent) / 100
                )
              : "N/A"}
            /-
          </h1>
          <p style={{ fontSize: "14px" }}>(including GST)</p>
          <div className={styles.demoButton}>
            <p>Take Demo Class</p>
          </div>
          <p className={styles.paraBottomText}>
            Experience our demo class for just Rs. 499/- (refundable). Register
            now!
          </p>
        </div>
      </div>

      <SmoothSlider />
      <Syllabus courseDetail={courseDetail} />

      {/* <div className={styles.MainContainerForTwoContainer}> */}
      {/* <h1 className={styles.whatyoulearnText}>what you learn?</h1>
          <div className={styles.whatYouLearnContainer}>
            <div className={styles.whatYouLearninnerTextContainer}>
              <IoCheckmarkOutline className={styles.iconStyle} />
              <p className={styles.ParatextUnderwhatulearn}>
                Automate tasks on their computer good have the task the need
              </p>
            </div>
            <div className={styles.whatYouLearninnerTextContainer}>
              <IoCheckmarkOutline className={styles.iconStyle} />
              <p className={styles.ParatextUnderwhatulearn}>
                Programmatically generate and askjdhk ajkdhak wduiwedc
              </p>
            </div>
          </div>
          <div className={styles.whatYouLearnContainer}>
            <div className={styles.whatYouLearninnerTextContainer}>
              <IoCheckmarkOutline className={styles.iconStyle} />
              <p className={styles.ParatextUnderwhatulearn}>
                Automate tasks on their computer good have the task the need
              </p>
            </div>
            <div className={styles.whatYouLearninnerTextContainer}>
              <IoCheckmarkOutline className={styles.iconStyle} />
              <p className={styles.ParatextUnderwhatulearn}>
                Programmatically generate and askjdhk ajkdhak wduiwedc
              </p>
            </div>
          </div>
          <div className={styles.whatYouLearnContainer}>
            <div className={styles.whatYouLearninnerTextContainer}>
              <IoCheckmarkOutline className={styles.iconStyle} />
              <p className={styles.ParatextUnderwhatulearn}>
                Automate tasks on their computer good have the task the need
              </p>
            </div>
            <div className={styles.whatYouLearninnerTextContainer}>
              <IoCheckmarkOutline className={styles.iconStyle} />
              <p className={styles.ParatextUnderwhatulearn}>
                Programmatically generate and askjdhk ajkdhak wduiwedc
              </p>
            </div>
          </div>
          <div className={styles.whatYouLearnContainer}>
            <div className={styles.whatYouLearninnerTextContainer}>
              <IoCheckmarkOutline className={styles.iconStyle} />
              <p className={styles.ParatextUnderwhatulearn}>
                Automate tasks on their computer good have the task the need
              </p>
            </div>
            <div className={styles.whatYouLearninnerTextContainer}>
              <IoCheckmarkOutline className={styles.iconStyle} />
              <p className={styles.ParatextUnderwhatulearn}>
                Programmatically generate and askjdhk ajkdhak wduiwedc
              </p>
            </div>
          </div>
          <div className={styles.whatYouLearnContainer}>
            <div className={styles.whatYouLearninnerTextContainer}>
              <IoCheckmarkOutline className={styles.iconStyle} />
              <p className={styles.ParatextUnderwhatulearn}>
                Automate tasks on their computer good have the task the need
              </p>
            </div>
            <div className={styles.whatYouLearninnerTextContainer}>
              <IoCheckmarkOutline className={styles.iconStyle} />
              <p className={styles.ParatextUnderwhatulearn}>
                Programmatically generate and askjdhk ajkdhak wduiwedc
              </p>
            </div>
          </div>
          <div className={styles.whatYouLearnContainer}>
            <div className={styles.whatYouLearninnerTextContainer}>
              <IoCheckmarkOutline className={styles.iconStyle} />
              <p className={styles.ParatextUnderwhatulearn}>
                Automate tasks on their computer good have the task the need
              </p>
            </div>
            <div className={styles.whatYouLearninnerTextContainer}>
              <IoCheckmarkOutline className={styles.iconStyle} />
              <p className={styles.ParatextUnderwhatulearn}>
                Programmatically generate and askjdhk ajkdhak wduiwedc
              </p>
            </div>
          </div> */}
      {/* <div className={styles.whatWeContainer}>
          <h1 className={styles.whymeText}>Why we?</h1>
          <div className={styles.whyweInnerContainer}>
            <div className={styles.iconTextParaContainer}>
              <GoDotFill style={{ color: "#312951" }} />
              <p className={styles.whyweparatext}>
                Access quality educational content
              </p>
            </div>
            <div className={styles.iconTextParaContainer}>
              <GoDotFill style={{ color: "#312951" }} />
              <p className={styles.whyweparatext}>
                Enhance your knowledge base
              </p>
            </div>
            <div className={styles.iconTextParaContainer}>
              <GoDotFill style={{ color: "#312951" }} />
              <p className={styles.whyweparatext}>
                Discover personalized learning pathways
              </p>
            </div>
            <div className={styles.iconTextParaContainer}>
              <GoDotFill style={{ color: "#312951" }} />
              <p className={styles.whyweparatext}>
                Cultivate a culture of continuous learning
              </p>
            </div>
            <div className={styles.iconTextParaContainer}>
              <GoDotFill style={{ color: "#312951" }} />
              <p className={styles.whyweparatext}>
                Foster intellectual curiosity and growth
              </p>
            </div>
            <div className={styles.iconTextParaContainer}>
              <GoDotFill style={{ color: "#312951" }} />
              <p className={styles.whyweparatext}>
                Navigate complex subjects with ease
              </p>
            </div>
            <div className={styles.iconTextParaContainer}>
              <GoDotFill style={{ color: "#312951" }} />
              <p className={styles.whyweparatext}>
                Embrace lifelong learning with us
              </p>
            </div>
            <div className={styles.iconTextParaContainer}>
              <GoDotFill style={{ color: "#312951" }} />
              <p className={styles.whyweparatext}>
                Expand your educational horizons
              </p>
            </div>
            <div className={styles.iconTextParaContainer}>
              <GoDotFill style={{ color: "#312951" }} />
              <p className={styles.whyweparatext}>
                Master new skills effortlessly
              </p>
            </div>
            <div className={styles.iconTextParaContainer}>
              <GoDotFill style={{ color: "#312951" }} />
              <p className={styles.whyweparatext}>
                Unleash your full academic potential
              </p>
            </div>
            <div className={styles.iconTextParaContainer}>
              <GoDotFill style={{ color: "#312951" }} />
              <p className={styles.whyweparatext}>
                Cultivate critical thinking skills
              </p>
            </div>
            <div className={styles.iconTextParaContainer}>
              <GoDotFill style={{ color: "#312951" }} />
              <p className={styles.whyweparatext}>
                Navigate complex subjects effortlessly
              </p>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      {/* <div className={styles.CKeditorContainerSmall}>
        <div
          dangerouslySetInnerHTML={{ __html: courseDetail.longDecription }}
          className={styles.CVEditorStyle}
        ></div>
      </div> */}
      <h1 className={styles.AnimateTopText} data-aos="zoom-in">
        Your Pathway to Educational Excellence
      </h1>
      <div className={styles.animateThemain}>
        <div className={styles.animateTheBottomOne}>
          <p className={styles.animateTheParaText}>
            CHOOSE COURSE AND ENROLL YOURSELF
          </p>
        </div>
        <div className={styles.abc}>
          <svg
            width="200px"
            height="107px"
            viewBox="0 0 315 107"
            version="1.1"
            style={{ overflow: "visible" }}
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              sketchType="MSPage"
            >
              <path
                id="Path-1"
                className={styles.path}
                fill="none"
                stroke="none"
                strokeWidth="5"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                // d="M20,20 C20,100 200,0 200,100"
                d="M20,10 L40,35 C70,120 200,0 200,100"
              />
              <path
                className={styles.dashed}
                fill="none"
                stroke="black"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                // d="M20,20 C20,100 200,0 200,100"
                d="M20,10 L40,35 C70,120 200,0 200,100"
              />
              <polyline id="arrow" points="0,-9 18,0 0,9 5,0" fill="#db5862">
                <animateMotion
                  rotate="auto"
                  begin="0s"
                  dur="3s"
                  repeatCount="500"
                  fill="freeze"
                >
                  <mpath xlinkHref="#Path-1" />
                </animateMotion>
              </polyline>
            </g>
          </svg>
        </div>
        <div
          className={styles.animateTheBottomOne11}
          // data-aos="flip-left"
        >
          <p className={styles.animateTheParaText}>
            START AND COMPLETE ALL MODULE OF TRAINING
          </p>
        </div>
        <div className={styles.abc2}>
          <svg
            width="200px"
            height="107px"
            viewBox="0 0 315 107"
            version="1.1"
            style={{ overflow: "visible" }}
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              sketchType="MSPage"
            >
              <path
                id="Path-2"
                className={styles.path}
                fill="none"
                stroke="none"
                strokeWidth="5"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                // d="M20,100 C20,0 200,100 200,20"
                // d="M10,100 C20,50 100,90 200,70 L300,20"
                d="M20,100 L40,65 C70,0 200,100 230,0"
              />
              <path
                className={styles.dashed}
                fill="none"
                stroke="black"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                // d="M20,100 C20,0 200,100 200,20"
                d="M20,100 L40,65 C70,0 200,100 230,0"
              />
              <polyline id="arrow2" points="0,-9 18,0 0,9 5,0" fill="#db5862">
                <animateMotion
                  rotate="auto"
                  begin="0s"
                  dur="3s"
                  repeatCount="500"
                  fill="freeze"
                >
                  <mpath xlinkHref="#Path-2" />
                </animateMotion>
              </polyline>
            </g>
          </svg>
        </div>
        <div
          className={styles.animateTheBottomOne22}
          // data-aos="flip-left"
        >
          <p className={styles.animateTheParaText}>
            GET PLACED IN TOP IT COMPANIES AND GET SUCCESS IN YOUR CAREER
          </p>
        </div>
      </div>
      <div className={styles.outmainContainer}>
        <div>{/* <Instructor /> */}</div>
        <div className={styles.CKeditorContainer}>
          <h1 className={styles.WhatisText} data-aos="zoom-in">
            What is {courseDetail?.name}?
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: courseDetail.longDecription }}
            className={styles.CVEditorStyle}
          ></div>
        </div>
      </div>
      {/* <div className={styles.RatingandrateUSConatiner}>
        <Rating />
        <div className={styles.RateByUserConatiner}>
          <img src="../Images/ReviewUs.png" className={styles.ImgReview} />
          <h1 className={styles.reviewHeading}>★★★★</h1>
          <textarea
            placeholder="Please Review The Course"
            className={styles.TextAreaUnderreview}
          />
          <div className={styles.buttonReview}>
            <p>Submit</p>
          </div>
        </div>
      </div> */}
      <CertificateFile />
      <CompUnderCourseDetailsFile courseDetail={courseDetail} />
      <AdmissionProcess />
      <CourseFAQ />
      {/* <Syllabus /> */}

      {/* <StudentJourney />
      <div
        dangerouslySetInnerHTML={{ __html: courseDetail.longDecription }}
        className={styles.CVEditorStyle}
      ></div> */}
    </div>
  );
};

export default DetailCourseFile;

// <div className={styles.mapContainer}>
//   <div className={styles.mapSmallfirstContainer}>
//     <div className={styles.miniBatchdiv}>
//       <h6 className={styles.InnerBatchText}>Batch Name</h6>
//       <p className={styles.InnerBatchparatext}>{e?.name}</p>
//     </div>
//     <div className={styles.miniBatchdiv}>
//       <h6 className={styles.InnerBatchText}>Timing</h6>
//       <p className={styles.InnerBatchparatext}>
//         {moment(e?.timing).format("MM/DD/YYYY")}
//       </p>
//     </div>
//     <div className={styles.miniBatchdiv}>
//       <h6 className={styles.InnerBatchText}>Duration</h6>
//       <p className={styles.InnerBatchparatext}>{e?.duration}</p>
//     </div>
//   </div>
//   <div className={styles.mapContainerinerlongText}>
//     when an unknown printer took a galley of type and scrambled it
//     to make a type specimen book. It has survived not only five
//     centuries, but also the leap into electronic typesetting,
//     remaining essentially unchanged. It was popularised in the
//     1960s with the release of Letraset sheets
//   </div>
// </div>
