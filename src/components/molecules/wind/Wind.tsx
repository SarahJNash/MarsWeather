import React from "react";
import styles from "./Wind.module.scss";
import { VictoryPolarAxis, VictoryTheme } from "victory";
import Measurement from "../../atoms/measurement/Measurement";

type Props = {
  speed: number;
  direction: number;
};
const Wind = (props: Props) => {
  const { speed, direction } = props;
  return (
    <div className={styles.container}>
      <span className={styles.title}>Wind:</span>
      <div className={styles.dataPanel}>
        <VictoryPolarAxis
          dependentAxis
          theme={VictoryTheme.material}
          axisAngle={90 - direction}
        />

        <Measurement
          label="max"
          value={speed}
          units="mph"
          styling={styles.text}
        />
      </div>
    </div>
  );
};

export default Wind;
