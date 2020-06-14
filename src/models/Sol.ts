import { WindSpeed } from "./WindSpeed";
import { Temperature } from "./Temperature";

export type Sol = {
  sol: number;
  earthDate: string;
  temperature: Temperature;
  windSpeed: WindSpeed;
};
