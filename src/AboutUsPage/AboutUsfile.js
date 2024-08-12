import React, { useEffect } from 'react'
import styles from "../AboutUsPage/AboutUsfile.module.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AboutCompany from '../Components/AboutCompanyComponent/AboutCompany';
import CEOfile from '../Components/CEOComponent/CEOfile';
import EnrollwithUS from '../Components/EnrollWithusComponent/EnrollwithUS';

const AboutUsfile = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);

        // Optionally, you can also scroll to the top when the component unmounts
        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 800 },
            items: 4,
        },
        middle: {
            breakpoint: { max: 800, min: 485 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 485, min: 0 },
            items: 2,
        },
    };


    const courseData = [
        {
            image: "Images/google.png",
        },
        {
            image: "Images/facebook.png",
        },
        {
            image: "Images/twitter.png",
        },
        {
            image: "Images/instagram.png",
        },
        {
            image: "Images/44course.jpeg",
        },
        {
            image: "Images/Certificate.png",
        },
        {
            image: "Images/44course.jpeg",
        },
    ];
    return (
        <>
            <div style={{ backgroundImage: "url(./Images/bgimageAbout.avif)" }} className={styles.container}>
                <h1 className={styles.topHeadingInImage}>Crafting innovative solutions to redefine <br></br>Your digital journey</h1>
            </div>

            <h1 className={styles.maintextwedo}>What <span
                style={{ color: "#fc0067", marginLeft: "5px", marginTop: "2px" }}
            >
                We
            </span> Do?</h1>
            <div className={styles.mainConatinerWhatwedo}>
                <div className={styles.ContainerWhatweDo}>
                    <div>
                        <h1 className={styles.TextWhatwedo}>Online workshops and seminars</h1>
                        <p className={styles.paraWhatweDo}>Digital Skill Up provides various Intractive online courses that engage students. Virtual classes that allow students to conduct exams, viva, and online dicussions. We also offer online workshops and seminars on specific topics or niche subjects by industry experts or faculty members with specialized expertise.</p>
                    </div>
                </div>
                <div className={styles.ContainerWhatweDo}>
                    <div>
                        <h1 className={styles.TextWhatwedo}>Online placement services</h1>
                        <p className={styles.paraWhatweDo}>Digital Skill Up is committed to support the student's career aspirations through our comprehensive online placement services. Through our user-friendly online platform, users can apply for various job opportunities. We offer a variety of virtual opportunities for students to enhance their professional skills and connect with potential employers.</p>
                    </div>
                </div>
                <div className={styles.ContainerWhatweDo}>
                    <div>
                        <h1 className={styles.TextWhatwedo}>Be a part of Digital Skill Up</h1>
                        <p className={styles.paraWhatweDo}>Become a member of our online platform. Faculty members have a dynamic opportunity to interact with students in a cutting-edge digital environment through Digital Skill Up. Faculty may easily provide course materials, communicate with students via chat rooms or live sessions, and give prompt feedback on assignments. </p>
                    </div>
                </div>
            </div>
            <AboutCompany />

            <>
                <h1 className={styles.TopTextHeading}>
                    Our Reliable
                    <span
                        style={{ color: "#fc0067", marginLeft: "5px", marginTop: "2px" }}
                    >
                        Team Member
                    </span>
                </h1>

                <div className={styles.viratoutermostContainer}>
                    <div className={styles.outerOne}>
                        <div className={styles.OwnerCEOContainer}>
                            <img src='Images/OwnerCEO.jpg' className={styles.OwnerImage} />
                            <h1 className={styles.OwnerdaName}>Vinay pathak</h1>
                        </div>
                        <div className={styles.KohliContainer}>
                            <h2 className={styles.KohliText}>Chief Executive Officer</h2>
                            <p className={styles.Kohlipara}>we use these components to instance with navigation, pagination, and autoplay features, along with some slides</p>
                        </div>
                    </div>
                    <div className={styles.outerOne}>
                        <div className={styles.OwnerCEOContainer}>
                            <img src='Images/Owner22.webp' className={styles.OwnerImage} />
                            <h1 className={styles.OwnerdaName}>Ajeet rana</h1>
                        </div>
                        <div className={styles.KohliContainer}>
                            <h2 className={styles.KohliText}>Director</h2>
                            <p className={styles.Kohlipara}>we use these components to create a Swiper instance with navigation, pagination, and autoplay features, along with some slides</p>
                        </div>
                    </div>
                    <div className={styles.outerOne}>
                        <div className={styles.OwnerCEOContainer}>
                            <img src='Images/owner33.jpg' className={styles.OwnerImage} />
                            <h1 className={styles.OwnerdaName}>Priyanka gaur</h1>
                        </div>
                        <div className={styles.KohliContainer}>
                            <h2 className={styles.KohliText}>Marketing Officer</h2>
                            <p className={styles.Kohlipara}>we use these components to create a Swiper instance with navigation, pagination, and autoplay features, along with some slides</p>
                        </div>
                    </div>
                </div>
            </>
            <CEOfile />
            <EnrollwithUS />
            <div className={styles.CourseViewContainer}>
                <h1 className={styles.OurCompanyPartnerText}>
                    <span
                        style={{ color: "#fc0067", marginLeft: "5px", marginTop: "2px" }}
                    >
                        Our
                    </span> Company & Partners</h1>
                <Carousel responsive={responsive} autoPlay={true} showDots={false}
                    arrows={false}
                    autoPlaySpeed={1300}
                    infinite={true} >
                    {courseData.map((list, index) => (
                        <div className={styles.imageContainer}>
                            <img
                                src={list?.image ? list.image : "Images/33course.jpg"}
                                className={styles.ContainerImage}
                            />
                            <p>Author name</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
}

export default AboutUsfile