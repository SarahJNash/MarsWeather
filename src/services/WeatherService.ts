import { Weather } from "../models/Weather";

export abstract class WeatherService {
  static async get(): Promise<Weather> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {
          sols: [
            {
              sol: 256,
              earthDate: "2020-06-06T03:26:48Z",
              temperature: { min: -92.926, max: -6.563, average: -53.019 },
              windSpeed: {
                min: 0.27899999999999997,
                max: 21.011,
                average: 7.169,
                commonDirection: 292.5,
              },
            },
            {
              sol: 257,
              earthDate: "2020-06-07T03:26:48Z",
              temperature: { min: -92.023, max: -6.058, average: -66.941 },
              windSpeed: {
                min: 0.38,
                max: 22.916999999999998,
                average: 6.189,
                commonDirection: 22.5,
              },
            },
            {
              sol: 258,
              earthDate: "2020-06-08T03:26:48Z",
              temperature: { min: -110.701, max: -12.636, average: -64.855 },
              windSpeed: {
                min: 0.18899999999999997,
                max: 25.125999999999998,
                average: 6.447,
                commonDirection: 292.5,
              },
            },
            {
              sol: 259,
              earthDate: "2020-06-09T03:26:48Z",
              temperature: { min: -80.426, max: -2.563, average: -53.019 },
              windSpeed: {
                min: 1.27899999999999997,
                max: 14.011,
                average: 4.169,
                commonDirection: 292.5,
              },
            },
            {
              sol: 260,
              earthDate: "2020-06-10T03:26:48Z",
              temperature: { min: -92.926, max: -6.563, average: -53.019 },
              windSpeed: {
                min: 0.27899999999999997,
                max: 21.011,
                average: 7.169,
                commonDirection: 292.5,
              },
            },
            {
              sol: 261,
              earthDate: "2020-06-11T03:26:48Z",
              temperature: { min: -98.926, max: -9.563, average: -53.019 },
              windSpeed: {
                min: 0.87899999999999997,
                max: 34.011,
                average: 11.169,
                commonDirection: 0,
              },
            },
          ],
        } as Weather;
        resolve(data);
      }, 3000);
    });
  }
}
