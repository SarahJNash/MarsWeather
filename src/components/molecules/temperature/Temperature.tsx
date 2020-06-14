import React from "react";
import styles from "./Temperature.module.scss";
import Measurement from "../../atoms/measurement/Measurement";

type Props = {
  tempMax: number;
  tempMin: number;
};

const Temperature = (props: Props) => {
  const { tempMax, tempMin } = props;

  return (
    <div className={styles.container}>
      Temp:
      <div>
        <Measurement
          label="max"
          value={tempMax}
          units="°C"
          style={styles.text}
        />
        <Measurement
          label="min"
          value={tempMin}
          units="°C"
          style={styles.text}
        />
      </div>
    </div>
  );
};

export default Temperature;
