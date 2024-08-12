import React, { useEffect } from "react";
import styles from "../PrivacyPolicy/PrivacyPolicy.module.css";

const PrivacyPolicyfile = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can also scroll to the top when the component unmounts
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.PrivacyText}>Privacy & Policy</h1>
      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        <span
          style={{
            paddingRight: "4px",
            color: "#312951",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          Introduction:
        </span>{" "}
        At DigitalSkillUp, we are committed to protecting the privacy of our
        users. This Privacy Policy outlines the types of personal information we
        collect, how we use it, and the measures we take to safeguard your
        information. In doing so, it is essential that people’s privacy is
        protected through the lawful and appropriate means for handling the
        personal data. Therefore, we have implemented this privacy policy
        (hereinafter referred to as ‘‘policy’’).
      </p>
      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        <span
          style={{
            paddingRight: "4px",
            color: "#312951",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          Personal Information:
        </span>{" "}
        When you register for courses or use our services, we may collect
        personal information such as your name, email address, and phone number.
      </p>
      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        <span
          style={{
            paddingRight: "4px",
            color: "#312951",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          Refund Policy:
        </span>{" "}
        There is no refund policy.
      </p>
      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        <span
          style={{
            paddingRight: "4px",
            color: "#312951",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          Cookies:
        </span>{" "}
        Cookies are text files placed on your computer to collect standard
        Internet log information and visitor behaviour information. When you
        visit our websites, we may collect information from you automatically
        through cookies or similar technology.
      </p>
      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        Furthermore, we may allow third-party advertising companies (such as
        Facebook, Google, Twitter, Quora and Bing) to place cookies on our
        website. These cookies enable such companies to track your activity
        across various sites where they display Ads and record your activities,
        so they can show Ads that they consider relevant to you as you browse
        the Internet. These cookies store information about the content you are
        browsing, together with an identifier linked to your device or IP
        address.
      </p>
      <p
        className={styles.paratext}
        style={{
          marginBottom: "10px",
          color: "#312951",
          fontWeight: "600",
          fontSize: "16px",
        }}
      >
        How do we use cookies?
      </p>
      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        <span
          style={{
            color: "black",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          DigitalSkillUp
        </span>{" "}
        uses cookies in a range of ways to improve your experience on our
        website
      </p>

      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        • To recognize our website user and to enhance user experience when
        interacting with our website <br></br> • We moreover use cookies to help
        us to analyse the use and performance of our website and services
        <br></br> • We also use cookies to improve the delivery and value of
        various services and products offered by us.
      </p>
      {/* <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        cookies, however, our website uses:
      </p> */}
      <p
        className={styles.paratext}
        style={{
          marginBottom: "10px",
          color: "#312951",
          fontWeight: "600",
          fontSize: "16px",
        }}
      >
        What types of cookies do we use?
      </p>
      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        There are a few different types of cookies, however, our website uses:
      </p>

      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        • Persistent Cookies. We use persistent Cookies to improve your
        experience of using the Sites. This includes recording your acceptance
        of our Cookie Policy to remove the cookie message which first appears
        when you use the Sites.<br></br> • Session Cookies. Session Cookies are
        temporary and deleted from your machine when your web browser closes. We
        use session Cookies to help us track internet usage as described above.
        <br></br> • Analytical/Performance Cookies. Analytical cookies allow us
        to recognise and count the number of visitors and see how many visitors
        move around our website while they are using it. This helps us improve
        the way our website works, for example, by ensuring the users find what
        they are looking for.<br></br> • Functionality Cookies. Functionality
        Cookies recognise when you return to the website. This enables the
        company to create greater content for you and remember your likes and
        dislikes and other preferences.<br></br> • Targeting Cookies. Targeting
        Cookies records the visit to our website, the pages navigated to and the
        links clicked upon. It helps to formulate information relevant to the
        user’s area of interests.
      </p>

      <p
        className={styles.paratext}
        style={{
          marginBottom: "10px",
          color: "#312951",
          fontWeight: "600",
          fontSize: "16px",
        }}
      >
        Conflicts of Laws
      </p>
      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        This Policy is intended to comply with the laws and regulations in the
        place of establishment which is in Uttarakhand. In the event of any
        conflict between this Policy and applicable laws and regulations, all
        the settlement will be done under judiciary of Uttarakhand.
      </p>
    </div>
  );
};

export default PrivacyPolicyfile;
