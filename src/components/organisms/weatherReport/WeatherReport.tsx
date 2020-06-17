import React from "react";
import styles from "./WeatherReport.module.scss";
import Sol from "../sol/Sol";
import { Sol as SolModel } from "../../../models/Sol";

type Props = {
  data?: SolModel[];
};

const WeatherReport = (props: Props) => {
  const { data } = props;

  if (!data) {
    return null;
  }
  data.splice(0, 1);
  const sols = data.map((s) => {
    return (
      <div className={styles.solContainer} key={s.sol}>
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
