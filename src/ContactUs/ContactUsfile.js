import React, { useEffect, useState } from 'react'
import styles from "../ContactUs/ContactUsfile.module.css"
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import ClipLoader from "react-spinners/ClipLoader";
import CEOfile from '../Components/CEOComponent/CEOfile';
import Awardsfile from '../Components/AwardsComponent/Awardsfile';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import CourseEnquiry from '../Components/CourseEnquiryComponent/CourseEnquiry';
import { Link } from 'react-router-dom';

const ContactUsfile = () => {
    const [admin, setAdmin] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);

        // Optionally, you can also scroll to the top when the component unmounts
        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

    const handleForm = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };

    const Submit = async () => {
        if (admin.name === "") {
            alert("please fill in");
            return;
        }
        if (admin.email === "") {
            alert("please fill in");
            return;
        }
        if (admin.message === "") {
            alert("please fill in");
            return;
        }
        setLoading(true);
        const res = await fetch("http://localhost:3000/ContactUs", {
            method: "POST",
            body: JSON.stringify(admin),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            // HANDLING ERRORS
            .then((res) => {
                console.log(res);
                if (res.status > 199 && res.status < 300) {
                    alert("Your Form is Submitted successfully.We will contact you soon.");
                    setLoading(false);
                    setAdmin({ name: "", email: "", message: "" })
                }
            });
    };

    return (
        <>
            <CourseEnquiry />
            <div className={styles.MainContainer}>
                <div className={styles.InnerContainerContactUs}>
                    <div className={styles.innerTextContainer}>
                        <h1 className={styles.ContactUSText}>Contact Us</h1>
                        <div className={styles.AddressIconTextContainer}>
                            <SlLocationPin style={{ fontSize: "50px", color: '#fff', marginTop: "-14px" }} />
                            <div>
                                <p className={styles.AdPhEmText}>Address</p>
                                <p className={styles.FullAddressText}>Brs Tower 1st Floor Near Blue Dart Courier Service Arya Nagar Chowk Peer Mazar Kankhal Road Jwalapur Haridwar UK 249407</p>
                            </div>
                        </div>
                        <div className={styles.AddressIconTextContainer}>
                            <MdOutlinePhone style={{ fontSize: "19px", color: '#fff', paddingTop: "2px" }} />
                            <div>
                                <p className={styles.AdPhEmText}>Phone</p>
                                <p className={styles.FullAddressText}>6472536495 <br></br> 9879876409</p>
                            </div>
                        </div>
                        <div className={styles.AddressIconTextContainer}>
                            <MdOutlineMailOutline style={{ fontSize: "18px", color: '#fff', paddingTop: "2px" }} />
                            <div>
                                <p className={styles.AdPhEmText}>Email</p>
                                <p className={styles.FullAddressText}>Contact@digitalskillup.in</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.InnerContainerWriteUs}>
                    <h1 className={styles.WriteUsText}>Or Write Us</h1>
                    <div className={styles.InputBoxContainer}>
                        <div className={styles.iconinputContainerWriteUsContainer}>
                            <FaRegUser style={{ fontSize: "16px", color: '#000' }} />
                            <input className={styles.inputBox}
                                placeholder='Name'
                                onChange={handleForm}
                                type="text"
                                id="name"
                                name="name"
                                value={admin.name} />
                        </div>
                        <div className={styles.iconinputContainerWriteUsContainer}>
                            <   TfiEmail style={{ fontSize: "14px", color: '#000' }} />
                            <input className={styles.inputBox}
                                placeholder='Email'
                                onChange={handleForm}
                                type="text"
                                id="email"
                                name="email"
                                value={admin.email} />
                        </div>
                        <textarea className={styles.inputBoxMessage}
                            placeholder='Enter Your Message'
                            rows={7}
                            onChange={handleForm}
                            type="text"
                            id="message"
                            name="message"
                            value={admin.message} />
                    </div>
                    {loading ? (
                        <div
                            className={styles.SendMessageConatiner}
                        >
                            <ClipLoader
                                color={"white"}
                                loading={loading}
                                size={30}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
                    ) : (
                        <div className={styles.SendMessageConatiner} onClick={Submit}>
                            <p1 className={styles.SendMessageText}>Send Message</p1>
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.WorkwithusConatiner}>
                <div className={styles.MainWorkwithusConatiner}>
                    <div className={styles.JoinOurTeamContainer}>
                        <p className={styles.JoinUsText}>Join Our Team</p>
                        <h1 className={styles.ReadyToWorkText}>Ready to work with us?</h1>
                    </div>
                    <Link className={styles.ButtonWorkUs} style={{ textDecoration: "none", cursor: "pointer" }}
                        to="/Instructor">
                        <h3 className={styles.OpenPositionText} style={{ cursor: "pointer" }}>See open positions</h3>
                        <MdOutlineArrowRightAlt className={styles.ArrowUnderJoinusText} style={{ cursor: "pointer" }} />
                    </Link>
                </div>
            </div>
            <Awardsfile />

        </>
    )
}

export default ContactUsfile