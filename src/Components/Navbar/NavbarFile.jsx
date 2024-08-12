import React, { useEffect, useRef, useState } from "react";
import styles from "./NavbarFile.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../Redux/Reducers/CreateSlice";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { IoBook } from "react-icons/io5";
import { MdRoundaboutRight } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import SemiTransparentOverlayFile from "../SemiTransparentOverlay/SemiTransparentOverlayFile";
import { Cursor } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";

const NavbarFile = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const dispatch = useDispatch();
  const sideNavRef = useRef(null);
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2500 });
    // Aos.refresh();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setIsSideNavOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideNavRef]);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.TopContainer}>
          <div
            style={{
              // border: "1px solid black",
              // width: "30%",
              // marginLeft: "20px",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className={styles.IConTop} onClick={toggleSideNav}>
              <AiOutlineMenu />
            </div>
            <Link to="/" style={{ height: "80%" }}>
              <img
                src="../Images/FinalLogo.png"
                // src="../Images/chintubhaiya.png"
                // src="../Images/babubahiya.png"
                style={{
                  height: "90%",
                  objectFit: "contain",
                  paddingLeft: "20px",
                  cursor: "pointer",
                }}
              />
            </Link>
          </div>
          <div className={styles.navbarContainer}>
            <Link
              to="/"
              className={
                currentPath === "/"
                  ? styles.NavBArActiveText
                  : styles.navbarText
              }
            >
              Home
            </Link>
            {/* <Link
              to="/course"
              className={
                currentPath === "/course"
                  ? styles.NavBArActiveText
                  : styles.navbarText
              }
            >
              Course
            </Link> */}

            <div
              onClick={async () => {
                await navigate("/");
                document
                  .getElementById("course")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              // to="/#course"
              // to="/courses"
              className={
                currentPath === "/courses"
                  ? styles.NavBArActiveText
                  : styles.navbarText
              }
            >
              Our Courses
            </div>
            <div className={styles.dropDownMainTextContainer}>
              <div>
                <h1 className={styles.DropDownMainText}>More</h1>
                <div className={styles.DropDownContainer}>
                  {/* <p className={styles.AboutUsText}>About Us</p> */}
                  <Link
                    to="/about"
                    style={{
                      fontWeight: "400",
                      textAlign: "left",
                      marginLeft: "13px",
                    }}
                    className={
                      currentPath === "/about"
                        ? styles.NavBArActiveText
                        : styles.navbarText
                    }
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    style={{
                      marginTop: "8px",
                      fontWeight: "400",
                      textAlign: "left",
                      marginLeft: "13px",
                    }}
                    className={
                      currentPath === "/contact"
                        ? styles.NavBArActiveText
                        : styles.navbarText
                    }
                  >
                    {" "}
                    Contact
                  </Link>
                  <Link
                    to="/blogs"
                    style={{
                      marginTop: "8px",
                      fontWeight: "400",
                      textAlign: "left",
                      marginLeft: "13px",
                    }}
                    className={
                      currentPath === "/blogs"
                        ? styles.NavBArActiveText
                        : styles.navbarText
                    }
                  >
                    Blogs
                  </Link>
                </div>
              </div>
            </div>

            <Link className={styles.InstructorButton} to="/Instructor">
              <h3 className={styles.InstructorbuttonText}>
                Join as Instructor
              </h3>
            </Link>
            <div
              className={styles.SignupButton}
              onClick={() => dispatch(openModal("registration"))}
            >
              <h3 className={styles.signupbuttonText}>Apply Now</h3>
            </div>
            {/* <div
              className={styles.SignupButton}
              onClick={() => dispatch(openModal("registration"))}
            >
              <h3 className={styles.signupbuttonText}>Profile</h3>
            </div> */}
          </div>
          <div className={styles.applyNowIconContainer}>
            <div
              className={styles.applyNowButton}
              onClick={() => dispatch(openModal("registration"))}
            >
              <h3 className={styles.applyNowText}>Apply Now</h3>
            </div>
          </div>
        </div>
      </div>

      <SemiTransparentOverlayFile
        isOpen={isSideNavOpen}
        onClose={toggleSideNav}
      />
      {isSideNavOpen && (
        <div
          ref={sideNavRef}
          className={`${styles.sideNav} ${isSideNavOpen ? styles.open : ""}`}
        >
          <Link to="/">
            <img
              src="../Images/FinalLogo.png"
              // src={require("../Images/FinalLogo.png")}
              // src="../Images/chintubhaiya.png"
              // src="../Images/babubahiya.png"
              style={{
                // height: "90%",
                height: "100px",
                width: "150px",
                objectFit: "contain",
                paddingLeft: "20px",
                cursor: "pointer",
              }}
            />
          </Link>

          <div
            className={styles.HeadlineTextIconContainer}
            style={
              {
                // marginTop: "90px",
              }
            }
          >
            <IoMdHome
              className={
                currentPath === "/"
                  ? styles.iconSidebarActive
                  : styles.iconSidebar
              }
            />
            <Link
              to="/"
              className={
                currentPath === "/"
                  ? styles.sideNavBArTextActive
                  : styles.sideNavBArText
              }
              onClick={() => setIsSideNavOpen(false)}
            >
              Home
            </Link>
          </div>
          <div className={styles.HeadlineTextIconContainer}>
            <IoBook
              className={styles.iconSidebar}
              style={{ marginTop: "4px" }}
            />
            <div
              onClick={async () => {
                await navigate("/");
                document
                  .getElementById("course")
                  .scrollIntoView({ behavior: "smooth" });
                setIsSideNavOpen(false);
              }}
              className={
                currentPath === "/courses"
                  ? styles.sideNavBArTextActive
                  : styles.sideNavBArText
              }
              // onClick={() => setIsSideNavOpen(false)}
            >
              Our Course
            </div>
          </div>
          <div
            className={styles.HeadlineTextIconContainerMore}
            ref={sideNavRef}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "15px",
              }}
              onClick={() => setOpenMore(!openMore)}
            >
              <IoBook
                className={styles.iconSidebar}
                style={{ marginTop: "4px" }}
              />
              {/* <Link
                to="/course"
                className={
                  currentPath === "/course"
                    ? styles.sideNavBArTextActive
                    : styles.sideNavBArText
                }
                onClick={() => setIsSideNavOpen(false)}
              >
                Course
              </Link> */}

              <h1 className={styles.sideNavBArText}>More</h1>
            </div>
            {openMore && (
              <div className={styles.MobileViewMoreContainer}>
                <div className={styles.InnerDropdownContainer}>
                  <MdRoundaboutRight
                    className={
                      currentPath === "/about"
                        ? styles.iconSidebarActiveDrop
                        : styles.iconSidebar
                    }
                  />
                  <Link
                    to="/about"
                    style={{ paddingLeft: "13px", fontWeight: "400" }}
                    className={
                      currentPath === "/about"
                        ? styles.NavBArActiveTextdrop
                        : styles.navbarText
                    }
                    onClick={() => setIsSideNavOpen(false)}
                  >
                    About
                  </Link>
                </div>
                <div className={styles.InnerDropdownContainer}>
                  <MdConnectWithoutContact
                    className={
                      currentPath === "/contact"
                        ? styles.iconSidebarActiveDrop
                        : styles.iconSidebar
                    }
                  />
                  <Link
                    to="/contact"
                    style={{
                      marginTop: "6px",
                      paddingLeft: "13px",
                      fontWeight: "400",
                    }}
                    className={
                      currentPath === "/contact"
                        ? styles.NavBArActiveTextdrop
                        : styles.navbarText
                    }
                    onClick={() => setIsSideNavOpen(false)}
                  >
                    {" "}
                    Contact
                  </Link>
                </div>
                <div className={styles.InnerDropdownContainer}>
                  <MdConnectWithoutContact
                    className={
                      currentPath === "/blogs"
                        ? styles.iconSidebarActiveDrop
                        : styles.iconSidebar
                    }
                  />
                  <Link
                    to="/blogs"
                    style={{
                      marginTop: "6px",
                      paddingLeft: "13px",
                      fontWeight: "400",
                    }}
                    className={
                      currentPath === "/blogs"
                        ? styles.NavBArActiveTextdrop
                        : styles.navbarText
                    }
                    onClick={() => setIsSideNavOpen(false)}
                  >
                    Blogs
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* <div className={styles.HeadlineTextIconContainer}>
            <MdRoundaboutRight
              className={
                currentPath === "/about"
                  ? styles.iconSidebarActive
                  : styles.iconSidebar
              }
            />
            <Link
              to="/Instructor"
              className={
                currentPath === "/Instructor"
                  ? styles.sideNavBArTextActive
                  : styles.sideNavBArText
              }
              onClick={() => setIsSideNavOpen(false)}
            >
              Join Instructor
            </Link>
          </div> */}

          {/* <div className={styles.HeadlineTextIconContainer}>
            <MdConnectWithoutContact
              className={
                currentPath === "/contact"
                  ? styles.iconSidebarActive
                  : styles.iconSidebar
              }
            />
            <Link
              to="/contact"
              className={
                currentPath === "/contact"
                  ? styles.sideNavBArTextActive
                  : styles.sideNavBArText
              }
              onClick={() => setIsSideNavOpen(false)}
            >
              Contact
            </Link>
          </div> */}
        </div>
      )}
    </>
  );
};

export default NavbarFile;
