import React from "react";
import styles from "./Main.module.scss";
import WeatherReport from "../../components/organisms/weatherReport/WeatherReport";

const Main = () => {
  //get data useeffect
  //while waiting show loading component
  //if data then show weather report

  return (
    <div className={styles.page}>
      <span className={styles.title}>The weather at Elysium Planitia</span>
      <div className={styles.content}>
        <div className={styles.weatherContainer}>
          <WeatherReport></WeatherReport>
        </div>
      </div>
    </div>
  );
};

export default Main;
