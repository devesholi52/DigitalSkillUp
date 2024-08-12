import React, { useEffect } from "react";
import styles from "../TermCondition/Termandcondition.module.css";

const Termandcondition = () => {
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
      <h1 className={styles.HeadingText}>Terms and Condition</h1>
      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        This is a legal and binding agreement between you, the user (referred to
        as “user” or “you”) of the Programs, as defined below, and
        DigitalSkillUp (together with its subsidiaries, and international
        affiliates, hereinafter " DigitalSkillUp ," "us," "we," or "our" or “the
        Company”) stating the terms that govern your use of the Platform, as
        defined below. The website www.DigitalSkillUp.com and mobile apps
        (collectively referred to as the “Platform”) and the information,
        services and other materials contained therein are provided and operated
        by DigitalSkillUp. DigitalSkillUp offers curated and specially designed
        online higher education and industry-relevant certification programs and
        career assistance services (“Programs”).
      </p>
      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        Please review our Terms of Use, Privacy Policy and other policies
        available on the Platform (collectively referred to as the “Terms”) that
        govern the use of the Platform and Programs. By accepting these Terms in
        any manner or accessing the website, you consent, agree, and undertake
        to abide, be bound by and adhere to the Terms and if you do not agree to
        these Terms, you are not entitled to avail of/use the Programs and any
        use thereafter shall be unauthorised.
      </p>
      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        Each Program may have a separate set of terms dealing with refunds,
        deferrals, payments, etc. governing such Programs, and our corporate
        clients may have executed separate written agreements with us, which, in
        the event of a conflict, will supersede these Terms to the extent of the
        conflicting provisions.
      </p>
      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        These Terms shall apply to DigitalSkillUp hosted mobile apps, WhatsApp
        groups, Facebook groups, Instagram pages, Facebook pages,
        email/SMS/phone communications and other social media forums hosted by
        DigitalSkillUp, which shall be deemed to be part of the ‘Platform’ by
        reference. You acknowledge that certain parts of the Platform, as
        mentioned above, are provided by third-party service providers, and you
        agree to abide by their terms and conditions. DigitalSkillUp shall not
        be responsible for any disruption of services caused by such third-party
        service providers.
      </p>
      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        Although you may "bookmark" a particular portion of the Platform and
        thereby bypass these Terms, your use of the Platform still binds you to
        these Terms.
      </p>
      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        We may change these Terms from time to time without prior notice. You
        should review this page regularly. Your continued use of the Platform
        and Programs after changes have been made will be taken to indicate that
        you have read and accepted those changes. You should not use the
        Platform or Programs if you are not happy with any changes to these
        Terms.
      </p>
      <p className={styles.paratext} style={{ marginBottom: "20px" }}>
        DigitalSkillUp makes no representations that the Platform operates (or
        is legally permitted to operate) in all geographic areas, or that the
        Platform, or information, services or products offered through the
        Platform are appropriate or available for use in other locations.
        Accessing the Platform from territories where the Platform, or any
        content or functionality of the Platform or its portions thereof is
        illegal, is expressly prohibited. If you choose to access the Platform,
        you agree and acknowledge that you do so on your own initiative and at
        your own risk and that you are solely responsible for compliance with
        all applicable laws.
      </p>
    </div>
  );
};

export default Termandcondition;
