import React from "react";
import styles from "./WeatherReport.module.scss";
import Sol from "../sol/Sol";

const WeatherReport = () => {
  return (
    <div className={styles.container}>
      <div className={styles.solContainer}>
        <Sol
          sol={243}
          earthDate={new Date("2020-06-06T03:26:48Z")}
          tempMin={21}
          tempMax={78}
          windMax={45}
          windDirection={180}
        />
      </div> <div className={styles.solContainer}>
        <Sol
          sol={243}
          earthDate={new Date("2020-06-06T03:26:48Z")}
          tempMin={21}
          tempMax={78}
          windMax={45}
          windDirection={180}
        />
      </div> <div className={styles.solContainer}>
        <Sol
          sol={243}
          earthDate={new Date("2020-06-06T03:26:48Z")}
          tempMin={21}
          tempMax={78}
          windMax={45}
          windDirection={180}
        />
      </div> <div className={styles.solContainer}>
        <Sol
          sol={243}
          earthDate={new Date("2020-06-06T03:26:48Z")}
          tempMin={21}
          tempMax={78}
          windMax={45}
          windDirection={180}
        />
      </div>
      <div className={styles.solContainer}>
        <Sol
          sol={243}
          earthDate={new Date("2020-06-06T03:26:48Z")}
          tempMin={21}
          tempMax={78}
          windMax={45}
          windDirection={180}
        />
      </div>
      <div className={styles.solContainer}>
        <Sol
          sol={243}
          earthDate={new Date("2020-06-06T03:26:48Z")}
          tempMin={21}
          tempMax={78}
          windMax={45}
          windDirection={180}
        />
      </div>

    </div>
  );
};

export default WeatherReport;
