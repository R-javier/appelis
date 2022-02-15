import React from "react";
import { FaSpinner } from "react-icons/fa";
import styles from "./Spinner.module.css";
function Loading() {
  return (
    <div className={styles.spinner}>
      <FaSpinner className={styles.spinning} size={80} />;
    </div>
  );
}

export default Loading;
