import "./style.css";
import { getWeather } from "./weather";

getWeather(52.52, 13.41, "Asia/Tokyo")
  .then(renderWeather)
  .catch((e) => {
    console.error(e);
    alert("Error getting weather");
  });

function renderWeather({ current, daily, hourly }) {
  renderCurrentWeather(current);
  // renderDailyWeather(daily);
  // renderHourly(hourly);
  document.body.classList.remove("blurred");
}
