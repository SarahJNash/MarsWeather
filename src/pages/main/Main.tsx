import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import WeatherReport from "../../components/organisms/weatherReport/WeatherReport";
import { WeatherService } from "../../services/WeatherService";
import { Sol } from "../../models/Sol";
import Message from "../../components/atoms/message/Message";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Sol[]>();

  useEffect(() => {
    WeatherService.get()
      .then((result: Sol[]) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [setLoading]);

  let content: JSX.Element;
  if (loading) {
    content = <Message message="Loading..." />;
  } else if (error) {
    content = (
      <Message message="Sorry, there appears to have been a problem loading the weather" />
    );
  } else {
    content = <WeatherReport data={data} />;
  }

  return (
    <div className={styles.page}>
      <span className={styles.title}>The Weather at Elysium Planitia</span>
      <div className={styles.content}>
        <div className={styles.weatherContainer}>{content}</div>
      </div>
    </div>
  );
};

export default Main;
