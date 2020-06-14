import React from "react";
import styles from "./Sol.module.scss";
import moment from "moment";
import Wind from "../../molecules/wind/Wind";
import Temperature from "../../molecules/temperature/Temperature";

type Props = {
  sol: number;
  earthDate: Date;
  tempMin: number;
  tempMax: number;
  windMax: number;
  windDirection: number;
};

const Sol = (props: Props) => {
  const { sol, earthDate, tempMax, tempMin, windMax, windDirection } = props;

  return (
    <div className={styles.container}>
      <span className={styles.title}>Sol {sol}</span>
      <span className={styles.date}>{moment(earthDate).format("ll")}</span>
      <div className={styles.temp}>
        <Temperature tempMax={tempMax} tempMin={tempMin} />
      </div>
      <div className={styles.wind}>
        <Wind speed={windMax} direction={windDirection} />
      </div>
    </div>
  );
};

export default Sol;
