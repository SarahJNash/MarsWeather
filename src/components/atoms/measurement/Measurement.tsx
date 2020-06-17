import React from "react";
import styles from "./Measurement.module.scss";
import classNames from "classnames";

type Props = {
  label: string;
  value: number;
  units: string;
  styling?: string;
};

const Measurement = (props: Props) => {
  const { label, value, units, styling } = props;

  const classes = classNames(styles.container, styling);
  return (
    <div data-testid="measurement" className={classes}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>
        {value.toFixed(2)}
        <span className={styles.units}>{units}</span>
      </span>
    </div>
  );
};

export default Measurement;
