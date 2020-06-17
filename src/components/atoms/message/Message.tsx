import React from "react";
import styles from "./Message.module.scss";

type Props = {
  message: string;
};
const Message = (props: Props) => {
  const { message } = props;
  return <div className={styles.container}>{message}</div>;
};

export default Message;
