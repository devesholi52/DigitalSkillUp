import React, { useState, useEffect } from "react";
import styles from "./BlogDetail.module.css";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can also scroll to the top when the component unmounts
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState([]);

  useEffect(() => {
    getCourseDetail();
  }, [id]);

  const getCourseDetail = () => {
    fetch(`http://localhost:3000/blogs/${id}`, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlogDetail(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  console.log("xxxxxxxx", blogDetail);
  return (
    <div className={styles.Conatiner}>
      <img src={blogDetail?.photo} className={styles.Image} />
      <h1 className={styles.BigTopText}>{blogDetail?.name}</h1>
      <p className={styles.Sub}>{blogDetail?.description}</p>
      {/* <div className={styles.topnameTextConatiner}>
        <h2 className={styles.Name}>Vinay pathak</h2>
      </div> */}
      <div
        dangerouslySetInnerHTML={{ __html: blogDetail?.longDecription }}
        className={styles.CreatedAt}
      ></div>
    </div>
  );
};

export default BlogDetail;
