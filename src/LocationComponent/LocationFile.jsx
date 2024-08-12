import React from "react";
import styles from "./LocationFile.module.css";

const LocationFile = () => {
  return (
    <>
      <div className={styles.TopHeadingBox}>
        <h1 className={styles.TopHeading}>
          Our Career <span style={{ color: "#fc0067" }}>Schools </span>
        </h1>
        <p className={styles.TopHeadingPara}>
          Replicating online impact through offline centers city-by-city.
        </p>
      </div>
      <div
        className={styles.TheMain}
        style={{ backgroundImage: "url(../Images/0101mapmap.png)" }}
      >
        <div className={styles.TheMainBackground}>
          <div className={styles.Container}>
            {/* <div className={styles.IconDiConatiner}> */}
            <div className={styles.MainCard}>
              <div className={styles.ImageCard}>
                <img src="./Images/haridwar.jpg" className={styles.Img} />
              </div>
              <h3 className={styles.LocationMain}>Haridwar</h3>
              <h3 className={styles.Location}>Dehradun</h3>
            </div>
            {/* </div> */}
            <div className={styles.IconDiConatiner}>
              <div className={styles.LocationDiv}>
                <img
                  src="./Images/location0000.png"
                  className={styles.LocationImg}
                />
              </div>
              {/* <div>
              <img src="./images/curveline1.png" className={styles.Line11} />
            </div> */}

              <div className={styles.MainCard2}>
                <div className={styles.ImageCard}>
                  <img src="./Images/haridwar.jpg" className={styles.Img} />
                  {/* <p
                    style={
                      {
                      }
                    }
                  >
                    1st Floor, Plot no. 21, Manav Ashram Colony, Vasundhara
                    Colony, Gopal Pura Mode, Jaipur - Rajasthan - India (302018)
                  </p> */}
                </div>
                <h3 className={styles.LocationMain}>Ghaziabad</h3>
                <h3 className={styles.Location}>Delhi</h3>
              </div>
            </div>
            {/* <div className={styles.IconDiConatiner}> */}
            <div className={styles.MainCard3}>
              <div className={styles.ImageCard}>
                <img src="./Images/haridwar.jpg" className={styles.Img} />
              </div>
              <h3 className={styles.LocationMain}>Yamunanagar</h3>
              <h3 className={styles.Location}>Gurgaon</h3>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationFile;
