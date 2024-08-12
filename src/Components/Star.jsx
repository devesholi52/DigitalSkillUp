import React from "react";
import { FaCloudUploadAlt, FaRegStar, FaStar } from "react-icons/fa";

export const Star = ({ rating, fontSize }) => {
  return (
    <>
      {[...Array(5)].map((e, i) => {
        return (
          <React.Fragment key={i}>
            {i + 1 > rating ? (
              <FaRegStar
                color="#fc0067"
                style={{
                  cursor: "pointer",
                  fontSize: fontSize ? fontSize : "25px",
                }}
              />
            ) : (
              <FaStar
                color="#fc0067"
                style={{
                  cursor: "pointer",
                  fontSize: fontSize ? fontSize : "25px",
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};
