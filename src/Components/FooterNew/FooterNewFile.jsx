import React from "react";
import styles from "./FooterNewFile.module.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import FooterIconFile from "../FooterIconsComp/FooterIconFile";
export const FooterNewFile = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#de7da547", color: "white" }}>
        <div className={styles.firstDiv22}>
          <div className={styles.ImageDiv}>
            <img
              src="../Images/DigitalSkillup.png"
              style={{ height: "100%", width: "100%" }}
              alt=""
            />
          </div>
          {/* <Link to="/"> <img style={{ height: "80px" }} src="/GooglePlay.png" alt="" /></Link> */}
          {/* <div style={{ display: "flex", gap: "10px" }}>
              <a rel="noopener noreferrer" target="_blank">
                <FaInstagram className={styles.SocialIcon} />
              </a>
              <a rel="noopener noreferrer" target="_blank">
                <FaFacebook className={styles.SocialIcon} />
              </a>
              <a rel="noopener noreferrer" target="_blank">
                <FaLinkedin className={styles.SocialIcon} />
              </a>
            </div> */}
          <div className={styles.iconnnnnbig}>
            <FooterIconFile />
          </div>
        </div>
        <div
          // className="container footer"
          className={styles.MainContainer}
        >
          <div className={styles.firstDiv11}>
            <div className={styles.ImageDiv}>
              <img
                src="../Images/DigitalSkillup.png"
                style={{ height: "100%", width: "100%" }}
                alt=""
              />
            </div>
            {/* <Link to="/"> <img style={{ height: "80px" }} src="/GooglePlay.png" alt="" /></Link> */}
            {/* <div style={{ display: "flex", gap: "10px" }}>
              <a rel="noopener noreferrer" target="_blank">
                <FaInstagram className={styles.SocialIcon} />
              </a>
              <a rel="noopener noreferrer" target="_blank">
                <FaFacebook className={styles.SocialIcon} />
              </a>
              <a rel="noopener noreferrer" target="_blank">
                <FaLinkedin className={styles.SocialIcon} />
              </a>
            </div> */}
            <div className={styles.iconnnnnbig}>
              <FooterIconFile />
            </div>
          </div>
          <div className={styles.SecondThriedDiv}>
            <p className={styles.SecondThriedDivTopText}>Quick Links</p>
            <Link className={styles.linkText} to="/PrivacyPolicy">
              Privacy policy
            </Link>
            <Link className={styles.linkText} to="/TermandConditions">
              Terms & Conditions
            </Link>
            <Link className={styles.linkText} to="/contact">
              Contact Us
            </Link>
            <Link className={styles.linkText} to="/about">
              About Us
            </Link>
            <Link className={styles.linkText} to="/blogs">
              Blogs
            </Link>
            {/* <Link
              style={{
                color: "white",
                fontSize: "1.2rem",
                marginBottom: "8px",
                color: "#bfbfbf",
              }}
              to="/"
            >
              About Us
            </Link> */}
          </div>{" "}
          <div className={styles.SecondThriedDiv}>
            <p className={styles.SecondThriedDivTopText}>Courses </p>
            <Link className={styles.linkText} to="/">
              Digital Marketing
            </Link>
            <Link className={styles.linkText} to="/">
              Canva
            </Link>
            <Link className={styles.linkText} to="/">
              Tally
            </Link>
            <Link className={styles.linkText} to="/">
              Digital Creator
            </Link>
          </div>
          <div className={styles.SecondThriedDivXX}>
            <p className={styles.SecondThriedDivTopTextXX}>Address </p>
            <Link className={styles.linkText}>
              Brs Tower 1st Floor Near Blue Dart Courier Service Arya Nagar
              Chowk Peer Mazar Kankhal Road Jwalapur Haridwar UK 249407
            </Link>
          </div>
        </div>
        <div className={styles.BottomsmallFooter}>
          <p style={{ color: "black" }} className={styles.BottomBlackText}>
            Copyright © 2024 All Rights Reserved
            <a
              target="_blank"
              style={{ color: "black", marginLeft: "10px", fontWeight: "500" }}
              className={styles.ancorText}
            >
              IITCE PVT LTD
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterNewFile;
