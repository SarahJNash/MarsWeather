import React from "react";
import styles from "./Measurement.module.scss";
import classNames from "classnames";

type Props = {
  label: string;
  value: number;
  units: string;
  style?: string;
};

const Measurement = (props: Props) => {
  const { label, value, units, style } = props;

  const classes = classNames(styles.container, style);
  return (
    <div className={classes}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>
        {value}
        <span className={styles.units}>{units}</span>{" "}
      </span>
    </div>
  );
};

export default Measurement;
