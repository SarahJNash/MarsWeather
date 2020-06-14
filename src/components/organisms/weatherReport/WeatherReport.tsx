import React from "react";
import styles from "./WeatherReport.module.scss";
import Sol from "../sol/Sol";
import { Weather } from "../../../models/Weather";

type Props = {
  data?: Weather;
};

const WeatherReport = (props: Props) => {
  const { data } = props;

  if (!data) {
    return null;
  }

  const sols = data.sols.map((s) => {
    return (
      <div className={styles.solContainer}>
        <Sol
          sol={s.sol}
          earthDate={new Date(s.earthDate)}
          tempMin={s.temperature.min}
          tempMax={s.temperature.max}
          windMax={s.windSpeed.max}
          windDirection={s.windSpeed.commonDirection}
        />
      </div>
    );
  });

  return <div className={styles.container}>{sols}</div>;
};

export default WeatherReport;
