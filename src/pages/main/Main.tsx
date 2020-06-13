import React from "react";
import styles from "./Main.module.scss";
import marsPhoto from "../../assets/mars.jpg";

const Main = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <img className={styles.background} src={marsPhoto} alt="Mars" />
      </div>
    </div>
  );
};

export default Main;
