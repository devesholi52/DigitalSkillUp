import React, { useState } from "react";
import styles from "./Syllabus.module.css";
import { useEffect } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Syllabus = (courseDetail) => {
  const [open, setOpen] = useState(false);
  const { category } = useSelector((Select) => Select?.modal);

  const [CourseFAQ, setCourseFAQ] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    fetch("http://localhost:3000/CourseFaq", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCourseFAQ(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const OnlineMarketingCourse = [
    {
      Name: "Fundamentals of Online Marketing Strategies",
      element: [
        {
          name: "Overview of key digital marketing principles",
        },
        {
          name: "Importance of online marketing in today's world",
        },
        {
          name: "Understanding the modern customer journey online",
        },
        {
          name: "Differences between traditional and online marketing",
        },
      ],
    },
    {
      Name: "Mastering Search Engine Optimization Techniques",
      element: [
        {
          name: "Basics of keyword research and analysis",
        },
        {
          name: "Effective on-page and off-page SEO methods",
        },
        {
          name: "Understanding search engine ranking algorithms",
        },
        {
          name: "Essential tools for SEO optimization",
        },
      ],
    },
    {
      Name: "Developing Content Marketing Strategies",
      element: [
        {
          name: "Creating engaging and relevant digital content",
        },
        {
          name: "Utilizing blogs, videos, and infographics effectively",
        },
        {
          name: "Developing a consistent content marketing calendar",
        },
        {
          name: "Measuring content performance and return on investment",
        },
      ],
    },
    {
      Name: "Leveraging Social Media for Marketing Success",
      element: [
        {
          name: "Selecting the right social media platforms",
        },
        {
          name: "Crafting impactful social media marketing campaigns",
        },
        {
          name: "Engaging with your audience on social platforms",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Effective Pay-Per-Click Advertising (PPC)",
      element: [
        {
          name: "Introduction to Google Ads and Bing Ads",
        },
        {
          name: "Creating compelling ad copy and visuals",
        },
        {
          name: "Budgeting and bidding strategies for PPC",
        },
        {
          name: "Tracking and optimizing ad campaign performance",
        },
      ],
    },
    {
      Name: "Advanced Email Marketing Techniques",
      element: [
        {
          name: "Building and segmenting targeted email lists",
        },
        {
          name: "Designing effective email marketing campaigns",
        },
        {
          name: "Automating email marketing for better results",
        },
        {
          name: "Analyzing email campaign performance metrics",
        },
      ],
    },
    {
      Name: "Basics of Affiliate Marketing Programs",
      element: [
        {
          name: "Introduction to affiliate marketing partnerships",
        },
        {
          name: "Choosing the right affiliate marketing programs",
        },
        {
          name: "Tracking affiliate marketing performance metrics",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Utilizing Web Analytics and Reporting Tools",
      element: [
        {
          name: "Introduction to Google Analytics and tools",
        },
        {
          name: "Setting up and configuring tracking codes",
        },
        {
          name: "Tracking affiliate marketing performance metrics",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Implementing Mobile Marketing Strategies",
      element: [
        {
          name: "Understanding the mobile user experience",
        },
        {
          name: "Designing mobile-friendly websites and apps",
        },
        {
          name: "Strategies for effective mobile app marketing",
        },
      ],
    },
    {
      Name: "E-commerce and Online Sales Techniques",
      element: [
        {
          name: "Setting up a successful online store",
        },
        {
          name: "Optimizing product listings and descriptions",
        },
        {
          name: "Managing online payments and security measures",
        },
      ],
    },
  ];
  const OnlineSEOCourse = [
    {
      Name: "Fundamentals of Online Marketing Strategies",
      element: [
        {
          name: "Overview of key digital marketing principles",
        },
        {
          name: "Importance of online marketing in today's world",
        },
        {
          name: "Understanding the modern customer journey online",
        },
        {
          name: "Differences between traditional and online marketing",
        },
      ],
    },
    {
      Name: "Mastering Search Engine Optimization Techniques",
      element: [
        {
          name: "Basics of keyword research and analysis",
        },
        {
          name: "Effective on-page and off-page SEO methods",
        },
        {
          name: "Understanding search engine ranking algorithms",
        },
        {
          name: "Essential tools for SEO optimization",
        },
      ],
    },
    {
      Name: "Developing Content Marketing Strategies",
      element: [
        {
          name: "Creating engaging and relevant digital content",
        },
        {
          name: "Utilizing blogs, videos, and infographics effectively",
        },
        {
          name: "Developing a consistent content marketing calendar",
        },
        {
          name: "Measuring content performance and return on investment",
        },
      ],
    },
    {
      Name: "Leveraging Social Media for Marketing Success",
      element: [
        {
          name: "Selecting the right social media platforms",
        },
        {
          name: "Crafting impactful social media marketing campaigns",
        },
        {
          name: "Engaging with your audience on social platforms",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Effective Pay-Per-Click Advertising (PPC)",
      element: [
        {
          name: "Introduction to Google Ads and Bing Ads",
        },
        {
          name: "Creating compelling ad copy and visuals",
        },
        {
          name: "Budgeting and bidding strategies for PPC",
        },
        {
          name: "Tracking and optimizing ad campaign performance",
        },
      ],
    },
    {
      Name: "Advanced Email Marketing Techniques",
      element: [
        {
          name: "Building and segmenting targeted email lists",
        },
        {
          name: "Designing effective email marketing campaigns",
        },
        {
          name: "Automating email marketing for better results",
        },
        {
          name: "Analyzing email campaign performance metrics",
        },
      ],
    },
    {
      Name: "Basics of Affiliate Marketing Programs",
      element: [
        {
          name: "Introduction to affiliate marketing partnerships",
        },
        {
          name: "Choosing the right affiliate marketing programs",
        },
        {
          name: "Tracking affiliate marketing performance metrics",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Utilizing Web Analytics and Reporting Tools",
      element: [
        {
          name: "Introduction to Google Analytics and tools",
        },
        {
          name: "Setting up and configuring tracking codes",
        },
        {
          name: "Tracking affiliate marketing performance metrics",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Implementing Mobile Marketing Strategies",
      element: [
        {
          name: "Understanding the mobile user experience",
        },
        {
          name: "Designing mobile-friendly websites and apps",
        },
        {
          name: "Strategies for effective mobile app marketing",
        },
      ],
    },
    {
      Name: "E-commerce and Online Sales Techniques",
      element: [
        {
          name: "Setting up a successful online store",
        },
        {
          name: "Optimizing product listings and descriptions",
        },
        {
          name: "Managing online payments and security measures",
        },
      ],
    },
  ];
  const BestOnlineDigitalMarketingCourseinIndia = [
    {
      Name: "Fundamentals of Online Marketing Strategies",
      element: [
        {
          name: "Overview of key digital marketing principles",
        },
        {
          name: "Importance of online marketing in today's world",
        },
        {
          name: "Understanding the modern customer journey online",
        },
        {
          name: "Differences between traditional and online marketing",
        },
      ],
    },
    {
      Name: "Mastering Search Engine Optimization Techniques",
      element: [
        {
          name: "Basics of keyword research and analysis",
        },
        {
          name: "Effective on-page and off-page SEO methods",
        },
        {
          name: "Understanding search engine ranking algorithms",
        },
        {
          name: "Essential tools for SEO optimization",
        },
      ],
    },
    {
      Name: "Developing Content Marketing Strategies",
      element: [
        {
          name: "Creating engaging and relevant digital content",
        },
        {
          name: "Utilizing blogs, videos, and infographics effectively",
        },
        {
          name: "Developing a consistent content marketing calendar",
        },
        {
          name: "Measuring content performance and return on investment",
        },
      ],
    },
    {
      Name: "Leveraging Social Media for Marketing Success",
      element: [
        {
          name: "Selecting the right social media platforms",
        },
        {
          name: "Crafting impactful social media marketing campaigns",
        },
        {
          name: "Engaging with your audience on social platforms",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Effective Pay-Per-Click Advertising (PPC)",
      element: [
        {
          name: "Introduction to Google Ads and Bing Ads",
        },
        {
          name: "Creating compelling ad copy and visuals",
        },
        {
          name: "Budgeting and bidding strategies for PPC",
        },
        {
          name: "Tracking and optimizing ad campaign performance",
        },
      ],
    },
    {
      Name: "Advanced Email Marketing Techniques",
      element: [
        {
          name: "Building and segmenting targeted email lists",
        },
        {
          name: "Designing effective email marketing campaigns",
        },
        {
          name: "Automating email marketing for better results",
        },
        {
          name: "Analyzing email campaign performance metrics",
        },
      ],
    },
    {
      Name: "Basics of Affiliate Marketing Programs",
      element: [
        {
          name: "Introduction to affiliate marketing partnerships",
        },
        {
          name: "Choosing the right affiliate marketing programs",
        },
        {
          name: "Tracking affiliate marketing performance metrics",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Utilizing Web Analytics and Reporting Tools",
      element: [
        {
          name: "Introduction to Google Analytics and tools",
        },
        {
          name: "Setting up and configuring tracking codes",
        },
        {
          name: "Tracking affiliate marketing performance metrics",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Implementing Mobile Marketing Strategies",
      element: [
        {
          name: "Understanding the mobile user experience",
        },
        {
          name: "Designing mobile-friendly websites and apps",
        },
        {
          name: "Strategies for effective mobile app marketing",
        },
      ],
    },
    {
      Name: "E-commerce and Online Sales Techniques",
      element: [
        {
          name: "Setting up a successful online store",
        },
        {
          name: "Optimizing product listings and descriptions",
        },
        {
          name: "Managing online payments and security measures",
        },
      ],
    },
  ];
  const WordPressDeveloperCourse = [
    {
      Name: "Fundamentals of Online Marketing Strategies",
      element: [
        {
          name: "Overview of key digital marketing principles",
        },
        {
          name: "Importance of online marketing in today's world",
        },
        {
          name: "Understanding the modern customer journey online",
        },
        {
          name: "Differences between traditional and online marketing",
        },
      ],
    },
    {
      Name: "Mastering Search Engine Optimization Techniques",
      element: [
        {
          name: "Basics of keyword research and analysis",
        },
        {
          name: "Effective on-page and off-page SEO methods",
        },
        {
          name: "Understanding search engine ranking algorithms",
        },
        {
          name: "Essential tools for SEO optimization",
        },
      ],
    },
    {
      Name: "Developing Content Marketing Strategies",
      element: [
        {
          name: "Creating engaging and relevant digital content",
        },
        {
          name: "Utilizing blogs, videos, and infographics effectively",
        },
        {
          name: "Developing a consistent content marketing calendar",
        },
        {
          name: "Measuring content performance and return on investment",
        },
      ],
    },
    {
      Name: "Leveraging Social Media for Marketing Success",
      element: [
        {
          name: "Selecting the right social media platforms",
        },
        {
          name: "Crafting impactful social media marketing campaigns",
        },
        {
          name: "Engaging with your audience on social platforms",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Effective Pay-Per-Click Advertising (PPC)",
      element: [
        {
          name: "Introduction to Google Ads and Bing Ads",
        },
        {
          name: "Creating compelling ad copy and visuals",
        },
        {
          name: "Budgeting and bidding strategies for PPC",
        },
        {
          name: "Tracking and optimizing ad campaign performance",
        },
      ],
    },
    {
      Name: "Advanced Email Marketing Techniques",
      element: [
        {
          name: "Building and segmenting targeted email lists",
        },
        {
          name: "Designing effective email marketing campaigns",
        },
        {
          name: "Automating email marketing for better results",
        },
        {
          name: "Analyzing email campaign performance metrics",
        },
      ],
    },
    {
      Name: "Basics of Affiliate Marketing Programs",
      element: [
        {
          name: "Introduction to affiliate marketing partnerships",
        },
        {
          name: "Choosing the right affiliate marketing programs",
        },
        {
          name: "Tracking affiliate marketing performance metrics",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Utilizing Web Analytics and Reporting Tools",
      element: [
        {
          name: "Introduction to Google Analytics and tools",
        },
        {
          name: "Setting up and configuring tracking codes",
        },
        {
          name: "Tracking affiliate marketing performance metrics",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Implementing Mobile Marketing Strategies",
      element: [
        {
          name: "Understanding the mobile user experience",
        },
        {
          name: "Designing mobile-friendly websites and apps",
        },
        {
          name: "Strategies for effective mobile app marketing",
        },
      ],
    },
    {
      Name: "E-commerce and Online Sales Techniques",
      element: [
        {
          name: "Setting up a successful online store",
        },
        {
          name: "Optimizing product listings and descriptions",
        },
        {
          name: "Managing online payments and security measures",
        },
      ],
    },
  ];
  const OnlineGraphicDesigningCourse = [
    {
      Name: "Fundamentals of Online Marketing Strategies",
      element: [
        {
          name: "Overview of key digital marketing principles",
        },
        {
          name: "Importance of online marketing in today's world",
        },
        {
          name: "Understanding the modern customer journey online",
        },
        {
          name: "Differences between traditional and online marketing",
        },
      ],
    },
    {
      Name: "Mastering Search Engine Optimization Techniques",
      element: [
        {
          name: "Basics of keyword research and analysis",
        },
        {
          name: "Effective on-page and off-page SEO methods",
        },
        {
          name: "Understanding search engine ranking algorithms",
        },
        {
          name: "Essential tools for SEO optimization",
        },
      ],
    },
    {
      Name: "Developing Content Marketing Strategies",
      element: [
        {
          name: "Creating engaging and relevant digital content",
        },
        {
          name: "Utilizing blogs, videos, and infographics effectively",
        },
        {
          name: "Developing a consistent content marketing calendar",
        },
        {
          name: "Measuring content performance and return on investment",
        },
      ],
    },
    {
      Name: "Leveraging Social Media for Marketing Success",
      element: [
        {
          name: "Selecting the right social media platforms",
        },
        {
          name: "Crafting impactful social media marketing campaigns",
        },
        {
          name: "Engaging with your audience on social platforms",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Effective Pay-Per-Click Advertising (PPC)",
      element: [
        {
          name: "Introduction to Google Ads and Bing Ads",
        },
        {
          name: "Creating compelling ad copy and visuals",
        },
        {
          name: "Budgeting and bidding strategies for PPC",
        },
        {
          name: "Tracking and optimizing ad campaign performance",
        },
      ],
    },
    {
      Name: "Advanced Email Marketing Techniques",
      element: [
        {
          name: "Building and segmenting targeted email lists",
        },
        {
          name: "Designing effective email marketing campaigns",
        },
        {
          name: "Automating email marketing for better results",
        },
        {
          name: "Analyzing email campaign performance metrics",
        },
      ],
    },
    {
      Name: "Basics of Affiliate Marketing Programs",
      element: [
        {
          name: "Introduction to affiliate marketing partnerships",
        },
        {
          name: "Choosing the right affiliate marketing programs",
        },
        {
          name: "Tracking affiliate marketing performance metrics",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Utilizing Web Analytics and Reporting Tools",
      element: [
        {
          name: "Introduction to Google Analytics and tools",
        },
        {
          name: "Setting up and configuring tracking codes",
        },
        {
          name: "Tracking affiliate marketing performance metrics",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Implementing Mobile Marketing Strategies",
      element: [
        {
          name: "Understanding the mobile user experience",
        },
        {
          name: "Designing mobile-friendly websites and apps",
        },
        {
          name: "Strategies for effective mobile app marketing",
        },
      ],
    },
    {
      Name: "E-commerce and Online Sales Techniques",
      element: [
        {
          name: "Setting up a successful online store",
        },
        {
          name: "Optimizing product listings and descriptions",
        },
        {
          name: "Managing online payments and security measures",
        },
      ],
    },
  ];
  const OnlineAdvanceAccountingCourse = [
    {
      Name: "Fundamentals of Online Marketing Strategies",
      element: [
        {
          name: "Overview of key digital marketing principles",
        },
        {
          name: "Importance of online marketing in today's world",
        },
        {
          name: "Understanding the modern customer journey online",
        },
        {
          name: "Differences between traditional and online marketing",
        },
      ],
    },
    {
      Name: "Mastering Search Engine Optimization Techniques",
      element: [
        {
          name: "Basics of keyword research and analysis",
        },
        {
          name: "Effective on-page and off-page SEO methods",
        },
        {
          name: "Understanding search engine ranking algorithms",
        },
        {
          name: "Essential tools for SEO optimization",
        },
      ],
    },
    {
      Name: "Developing Content Marketing Strategies",
      element: [
        {
          name: "Creating engaging and relevant digital content",
        },
        {
          name: "Utilizing blogs, videos, and infographics effectively",
        },
        {
          name: "Developing a consistent content marketing calendar",
        },
        {
          name: "Measuring content performance and return on investment",
        },
      ],
    },
    {
      Name: "Leveraging Social Media for Marketing Success",
      element: [
        {
          name: "Selecting the right social media platforms",
        },
        {
          name: "Crafting impactful social media marketing campaigns",
        },
        {
          name: "Engaging with your audience on social platforms",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Effective Pay-Per-Click Advertising (PPC)",
      element: [
        {
          name: "Introduction to Google Ads and Bing Ads",
        },
        {
          name: "Creating compelling ad copy and visuals",
        },
        {
          name: "Budgeting and bidding strategies for PPC",
        },
        {
          name: "Tracking and optimizing ad campaign performance",
        },
      ],
    },
    {
      Name: "Advanced Email Marketing Techniques",
      element: [
        {
          name: "Building and segmenting targeted email lists",
        },
        {
          name: "Designing effective email marketing campaigns",
        },
        {
          name: "Automating email marketing for better results",
        },
        {
          name: "Analyzing email campaign performance metrics",
        },
      ],
    },
    {
      Name: "Basics of Affiliate Marketing Programs",
      element: [
        {
          name: "Introduction to affiliate marketing partnerships",
        },
        {
          name: "Choosing the right affiliate marketing programs",
        },
        {
          name: "Tracking affiliate marketing performance metrics",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Utilizing Web Analytics and Reporting Tools",
      element: [
        {
          name: "Introduction to Google Analytics and tools",
        },
        {
          name: "Setting up and configuring tracking codes",
        },
        {
          name: "Tracking affiliate marketing performance metrics",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Implementing Mobile Marketing Strategies",
      element: [
        {
          name: "Understanding the mobile user experience",
        },
        {
          name: "Designing mobile-friendly websites and apps",
        },
        {
          name: "Strategies for effective mobile app marketing",
        },
      ],
    },
    {
      Name: "E-commerce and Online Sales Techniques",
      element: [
        {
          name: "Setting up a successful online store",
        },
        {
          name: "Optimizing product listings and descriptions",
        },
        {
          name: "Managing online payments and security measures",
        },
      ],
    },
  ];
  const DataAnalyticsMentorshipProgram = [
    {
      Name: "Fundamentals of Online Marketing Strategies",
      element: [
        {
          name: "Overview of key digital marketing principles",
        },
        {
          name: "Importance of online marketing in today's world",
        },
        {
          name: "Understanding the modern customer journey online",
        },
        {
          name: "Differences between traditional and online marketing",
        },
      ],
    },
    {
      Name: "Mastering Search Engine Optimization Techniques",
      element: [
        {
          name: "Basics of keyword research and analysis",
        },
        {
          name: "Effective on-page and off-page SEO methods",
        },
        {
          name: "Understanding search engine ranking algorithms",
        },
        {
          name: "Essential tools for SEO optimization",
        },
      ],
    },
    {
      Name: "Developing Content Marketing Strategies",
      element: [
        {
          name: "Creating engaging and relevant digital content",
        },
        {
          name: "Utilizing blogs, videos, and infographics effectively",
        },
        {
          name: "Developing a consistent content marketing calendar",
        },
        {
          name: "Measuring content performance and return on investment",
        },
      ],
    },
    {
      Name: "Leveraging Social Media for Marketing Success",
      element: [
        {
          name: "Selecting the right social media platforms",
        },
        {
          name: "Crafting impactful social media marketing campaigns",
        },
        {
          name: "Engaging with your audience on social platforms",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Effective Pay-Per-Click Advertising (PPC)",
      element: [
        {
          name: "Introduction to Google Ads and Bing Ads",
        },
        {
          name: "Creating compelling ad copy and visuals",
        },
        {
          name: "Budgeting and bidding strategies for PPC",
        },
        {
          name: "Tracking and optimizing ad campaign performance",
        },
      ],
    },
    {
      Name: "Advanced Email Marketing Techniques",
      element: [
        {
          name: "Building and segmenting targeted email lists",
        },
        {
          name: "Designing effective email marketing campaigns",
        },
        {
          name: "Automating email marketing for better results",
        },
        {
          name: "Analyzing email campaign performance metrics",
        },
      ],
    },
    {
      Name: "Basics of Affiliate Marketing Programs",
      element: [
        {
          name: "Introduction to affiliate marketing partnerships",
        },
        {
          name: "Choosing the right affiliate marketing programs",
        },
        {
          name: "Tracking affiliate marketing performance metrics",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Utilizing Web Analytics and Reporting Tools",
      element: [
        {
          name: "Introduction to Google Analytics and tools",
        },
        {
          name: "Setting up and configuring tracking codes",
        },
        {
          name: "Tracking affiliate marketing performance metrics",
        },
        {
          name: "Analyzing social media metrics and performance",
        },
      ],
    },
    {
      Name: "Implementing Mobile Marketing Strategies",
      element: [
        {
          name: "Understanding the mobile user experience",
        },
        {
          name: "Designing mobile-friendly websites and apps",
        },
        {
          name: "Strategies for effective mobile app marketing",
        },
      ],
    },
    {
      Name: "E-commerce and Online Sales Techniques",
      element: [
        {
          name: "Setting up a successful online store",
        },
        {
          name: "Optimizing product listings and descriptions",
        },
        {
          name: "Managing online payments and security measures",
        },
      ],
    },
  ];

  return (
    <div className={styles.Container}>
      <h1 className={styles.TopText} data-aos="zoom-in">
        Digital Marketing{" "}
        <span style={{ color: "#fc0067", marginLeft: "2px" }}>
          Course Syllabus
        </span>
      </h1>
      <p className={styles.TopSubHeading}>
        One of the finest course we provide you
      </p>
      {courseDetail?.courseDetail?.name === "Online Marketing Course" && (
        <div className={styles.abc}>
          {OnlineMarketingCourse.map((e, index) => (
            <Items e={e} />
          ))}
        </div>
      )}
      {courseDetail?.courseDetail?.name === "Online SEO Course" && (
        <div className={styles.abc}>
          {OnlineSEOCourse.map((e, index) => (
            <Items e={e} />
          ))}
        </div>
      )}
      {courseDetail?.courseDetail?.name ===
        "Best Online Digital Marketing Course in India" && (
        <div className={styles.abc}>
          {BestOnlineDigitalMarketingCourseinIndia.map((e, index) => (
            <Items e={e} />
          ))}
        </div>
      )}
      {courseDetail?.courseDetail?.name === "WordPress Developer Course" && (
        <div className={styles.abc}>
          {WordPressDeveloperCourse.map((e, index) => (
            <Items e={e} />
          ))}
        </div>
      )}
      {courseDetail?.courseDetail?.name ===
        "Online Graphic Designing Course" && (
        <div className={styles.abc}>
          {OnlineGraphicDesigningCourse.map((e, index) => (
            <Items e={e} />
          ))}
        </div>
      )}
      {courseDetail?.courseDetail?.name ===
        "Online Advance Accounting Course" && (
        <div className={styles.abc}>
          {OnlineAdvanceAccountingCourse.map((e, index) => (
            <Items e={e} />
          ))}
        </div>
      )}
      {courseDetail?.courseDetail?.name ===
        "Data Analytics Mentorship Program" && (
        <div className={styles.abc}>
          {DataAnalyticsMentorshipProgram.map((e, index) => (
            <Items e={e} />
          ))}
        </div>
      )}
    </div>
  );
};

function Items({ e }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setOpen(!open)} className={styles.SyllabusHeadingBox}>
        <div className={styles.SyllabusHeadingMain}>
          <div className={styles.module}>
            <h3 className={styles.moduleName}>Module 1</h3>
            <h3 className={styles.SyllabusHeading}>{e?.Name}</h3>
          </div>
          <div className={styles.NumberTextDiv}>
            <div className={styles.SameSame}>
              <p>live classes</p>
              <div
                className={styles.NumberDiv}
                style={{ backgroundColor: "lightsalmon" }}
              >
                1
              </div>
            </div>
            <div className={styles.SameSame}>
              <p>live classes</p>
              <div
                className={styles.NumberDiv}
                style={{ backgroundColor: "lightgreen" }}
              >
                1
              </div>
            </div>
            <div className={styles.SameSame}>
              <p>live classes</p>
              <div
                className={styles.NumberDiv}
                style={{ backgroundColor: "lightskyblue" }}
              >
                1
              </div>
            </div>
            {open === true ? (
              <IoIosArrowUp className={styles.IconUPDown} />
            ) : (
              <IoIosArrowDown className={styles.IconUPDown} />
            )}
          </div>
        </div>
        {/* <div className={styles.BottomDivOpen}> */}
        {open &&
          e.element.map((item) => {
            return (
              <div className={styles.SyllabusContainer}>
                <div className={styles.SyllabusSubBox}>
                  <p
                    style={{
                      color: "black",
                      padding: "3px 20px",
                    }}
                  >
                    • {item.name}
                  </p>
                </div>
              </div>
            );
          })}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Syllabus;
