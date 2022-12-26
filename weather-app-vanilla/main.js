import "./style.css";
import { getWeather } from "./weather";

getWeather(52.52, 13.41, "Asia/Tokyo").then((data) => {
  console.log(data);
});
