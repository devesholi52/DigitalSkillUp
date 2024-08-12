import React from "react";
import styles from "./SemiTransparentOverlayFile.module.css";

const SemiTransparentOverlayFile = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div className={styles.overlay} onClick={onClose}></div>
  ) : null;
};

export default SemiTransparentOverlayFile;
