// import React from 'react'
// import styles from "../FooterComponent/Footer.module.css"
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaPhone } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { Link } from 'react-router-dom';


// const Footer = () => {
//     return (
//         <>
//             <div className={styles.TopMostContainer}>
//                 <div className={styles.Container}>
//                     <div className={styles.innerContainer}>
//                         {/* <div className={styles.imageiconContainer}> */}
//                         {/* <div className={styles.IconContainer}>
//                                 <FaLinkedin className={styles.icon} />
//                                 <FaFacebook className={styles.iconspecial} />
//                                 <FaInstagramSquare className={styles.icon} />
//                             </div> */}
//                         {/* </div> */}
//                         <div className={styles.CourseLinkContainer}>
//                             <div className={styles.CourseContainer}>
//                                 <h1 className={styles.TopText}>Quick Links</h1>
//                                 <p className={styles.ParentText}>Blogs</p>
//                                 <p className={styles.ParentText}>PlayBooks</p>
//                                 {/* <p className={styles.ParentText}>Tally</p>
//                                 <p className={styles.ParentText}>Web Design</p> */}
//                             </div>
//                             <div className={styles.CourseContainer}>
//                                 <h1 className={styles.TopText}>Other Links</h1>
//                                 <Link to="/TermandConditions" className={styles.ParentText} style={{ textDecoration: "none" }}>Terms Condition</Link>
//                                 <Link to="/PrivacyPolicy" className={styles.ParentText} style={{ textDecoration: "none" }}>Privacy Policy</Link>
//                             </div>
//                             <div className={styles.LogoDiv}>
//                                 <img
//                                     src="../Images/DigitalSkillup.png"
//                                     className={styles.image}
//                                 />
//                                 {/* <p className={styles.logoBottomtext}>Our mission is to provide a free, world-class education to anyone, anywhere.</p> */}

//                             </div>
//                             <div className={styles.CourseContainer}>
//                                 <h1 className={styles.TopText}>Contact</h1>
//                                 <div className={styles.IconNumberEmailContainer}>
//                                     <FaPhone style={{ marginTop: "3px", color: "#29347b" }} />
//                                     <p className={styles.ParentText}>9876765459</p>
//                                 </div>
//                                 <div className={styles.IconNumberEmailContainer}>
//                                     <MdEmail style={{ marginTop: "3px", color: "#29347b" }} />
//                                     <p className={styles.ParentText}>SkillUp@gmail.com</p>
//                                 </div>

//                                 {/* <Link to="/about" className={styles.ParentText} style={{ textDecoration: "none" }}>About Us</Link>
//                                 <Link to="/contact" className={styles.ParentText} style={{ textDecoration: "none" }}>Contact US</Link>
//                                 <Link to="/TermandConditions" className={styles.ParentText} style={{ textDecoration: "none" }}>Terms Condition</Link>
//                                 <Link to="/PrivacyPolicy" className={styles.ParentText} style={{ textDecoration: "none" }}>Privacy Policy</Link> */}
//                             </div>
//                             <div className={styles.CourseContainer}>
//                                 <h1 className={styles.TopText}>Quick Links</h1>
//                                 <Link to="/about" className={styles.ParentText} style={{ textDecoration: "none" }}>About Us</Link>
//                                 <Link to="/contact" className={styles.ParentText} style={{ textDecoration: "none" }}>Contact US</Link>
//                                 {/* <p className={styles.ParentText}>Blogs</p>
//                                 <p className={styles.ParentText}>PlayBooks</p> */}
//                                 {/* <p className={styles.ParentText}>Tally</p>
//                                 <p className={styles.ParentText}>Web Design</p> */}
//                             </div>
//                         </div>
//                     </div>
//                     {/* <div className={styles.CourseContainernone}>
//                         <p className={styles.TopText}>Address</p>
//                         <p className={styles.ParentText} style={{ cursor: "default" }}>Brs Tower 1st Floor Near Blue Dart Courier Service Arya Nagar Chowk Peer Mazar Kankhal Road Jwalapur Haridwar UK 249407</p>
//                     </div> */}
//                 </div>
//                 <div className={styles.Main}>
//                     <div className={styles.Mainkebaad}>
//                         <div className={styles.SubMain}>
//                             <h3 className={styles.SubMainHeading}>
//                                 Online Courses
//                             </h3>
//                             <div style={{ display: "flex", flexDirection: "row" }}>
//                                 <p className={styles.SubMainText} style={{ marginLeft: "0px" }}>
//                                     Digital Marketing |
//                                 </p>
//                                 <p className={styles.SubMainText}>
//                                     Canva |
//                                 </p>
//                                 <p className={styles.SubMainText}>
//                                     Tally
//                                 </p>
//                             </div>
//                         </div>
//                         <div className={styles.SubMain}>
//                             <h3 className={styles.SubMainHeading}>
//                                 Pre Recorded Courses
//                             </h3>
//                             <div style={{ display: "flex", flexDirection: "row" }}>
//                                 <p className={styles.SubMainText} style={{ marginLeft: "0px" }}>
//                                     Atlas |
//                                 </p>
//                                 <p className={styles.SubMainText}>
//                                     Python |
//                                 </p>
//                                 <p className={styles.SubMainText}>
//                                     C sharp |
//                                 </p>
//                                 <p className={styles.SubMainText}>
//                                     Mongo |
//                                 </p>
//                                 <p className={styles.SubMainText}>
//                                     Java |
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <div className={styles.CourseContaineractive}>
//                         <p className={styles.ParentText} style={{ cursor: "default", fontSize: "18px", color: "#29347b" }}>Our mission is to provide a free, world-class education to anyone, anywhere Good education can build a grate Skill.</p>
//                     </div> */}
//                     <div className={styles.CourseContaineractive}>
//                         <p className={styles.TopText}>Address</p>
//                         <p className={styles.ParentText} style={{ cursor: "default" }}>Brs Tower 1st Floor Near Blue Dart Courier Service Arya Nagar Chowk Peer Mazar Kankhal Road Jwalapur Haridwar UK 249407</p>
//                     </div>
//                 </div>

//             </div>
//             <div className={styles.abc}>
//                 <div className={styles.abcInner}>
//                     <h1 className={styles.CopyRightText}>Copyright © 2024 All Rights Reserved IITCE PVT LTD</h1>
//                     <div className={styles.IconContainer}>
//                         <FaLinkedin className={styles.icon} />
//                         <FaFacebook className={styles.iconspecial} />
//                         <FaInstagramSquare className={styles.icon} />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Footer



import React, { useEffect } from 'react'
import styles from "../FooterComponent/Footer.module.css"
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
// import Aos from "aos";
// import "aos/dist/aos.css";

const Footer = () => {
    // useEffect(() => {
    //     Aos.init({});
    //     Aos.refresh();
    // }, []);
    return (
        <>
            <div className={styles.Conatiner} data-aos="fade-right">
                <img
                    src="../Images/DigitalSkillup.png"
                    className={styles.imageSmallScreen}
                />
                <div className={styles.MainConatiner}>
                    <div className={styles.LeftConatiner}>


                        <div className={styles.QuickinksConatiner} style={{ display: "flex", flexDirection: "column" }}>
                            <h1 className={styles.TopText}>Quick Links</h1>
                            <Link to="/blogs" style={{ textDecoration: "none" }} className={styles.ParentText}>Blogs</Link>
                            <Link to="/Instructor" style={{ textDecoration: "none" }} className={styles.ParentText}>Instructor</Link>
                        </div>

                        <div className={styles.OtherLinksConatiner} style={{ display: "flex", flexDirection: "column" }}>
                            <h1 className={styles.TopText}>Other Links</h1>
                            <Link to="/TermandConditions" className={styles.ParentText} style={{ textDecoration: "none" }}>Terms Condition</Link>
                            <Link to="/PrivacyPolicy" className={styles.ParentText} style={{ textDecoration: "none" }}>Privacy Policy</Link>
                        </div>
                        <div className={styles.CourseConatiner}>

                            <div className={styles.OnlineCourseConatiner}>
                                <h3 className={styles.TopText}>Online Courses</h3>
                                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                                    <p className={styles.SubMainText} style={{ cursor: "default" }}>
                                        Digital Marketing
                                    </p>
                                    <p className={styles.SubMainText} style={{ cursor: "default" }}>
                                        Canva
                                    </p>
                                    <p className={styles.SubMainText} style={{ cursor: "default" }}>
                                        Tally
                                    </p>
                                </div>
                            </div>

                            <div className={styles.PreRecordedContainer}>
                                <h3 className={styles.TopText}>Pre Recorded Courses</h3>
                                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                                    <p className={styles.SubMainText} style={{ cursor: "default" }}>
                                        Digital Marketing
                                    </p>
                                    <p className={styles.SubMainText} style={{ cursor: "default" }}>
                                        Canva
                                    </p>
                                    <p className={styles.SubMainText} style={{ cursor: "default" }}>
                                        Tally
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <div className={styles.LogoDiv}> */}
                    <img
                        src="../Images/DigitalSkillup.png"
                        className={styles.image}
                    />
                    {/* <p className={styles.logoBottomtext}>Our mission is to provide a free, world-class education to anyone, anywhere.</p> */}

                    {/* </div> */}
                    <div className={styles.rightConatiner}>
                        <div className={styles.QuickinksConatiner}>
                            <h1 className={styles.TopText}>Contact</h1>
                            <div className={styles.IconNumberEmailContainer}>
                                <FaPhone style={{ color: "#29347b" }} />
                                <p className={styles.ParentText}>9876765459</p>
                            </div>
                            <div className={styles.IconNumberEmailContainer}>
                                <MdEmail style={{ color: "#29347b" }} />
                                <p className={styles.ParentText}>SkillUp@gmail.com</p>
                            </div>
                        </div>

                        <div className={styles.OtherLinksConatiner}>
                            <h1 className={styles.TopText}>Quick Links</h1>
                            <Link to="/about" className={styles.ParentText}>About US</Link>
                            <Link to="/contact" className={styles.ParentText}>Contact US</Link>
                        </div>
                        <div className={styles.CourseContaineractive}>
                            <p className={styles.TopText}>Address</p>
                            <p className={styles.ParentText} style={{ cursor: "default" }}>Brs Tower 1st Floor Near Blue Dart Courier Service Arya Nagar Chowk Peer Mazar Kankhal Road Jwalapur Haridwar UK 249407</p>
                        </div>
                    </div>
                </div>
            </div >
            <div className={styles.abc}>
                <div className={styles.abcInner}>
                    <h1 className={styles.CopyRightText}>Copyright © 2024 All Rights Reserved IITCE PVT LTD</h1>
                    <div className={styles.IconContainer}>
                        <FaLinkedin className={styles.icon} />
                        <FaFacebook className={styles.iconspecial} />
                        <FaInstagramSquare className={styles.icon} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer