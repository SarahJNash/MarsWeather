import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import WeatherReport from "../../components/organisms/weatherReport/WeatherReport";
import { WeatherService } from "../../services/WeatherService";
import Loading from "../../components/organisms/loading/Loading";
import { Weather } from "../../models/Weather";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Weather>();

  useEffect(() => {
    WeatherService.get().then((result: Weather) => {
      setData(result);
      setLoading(false);
    });
  }, [setLoading]);

  const content = loading ? <Loading /> : <WeatherReport data={data} />;

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
