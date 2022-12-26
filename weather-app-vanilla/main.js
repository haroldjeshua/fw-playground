import "./style.css";
import { getWeather } from "./weather";
import { ICON_MAP } from "./iconMap";

getWeather(52.52, 13.41, "Asia/Bangkok")
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

function setValue(selector, value, { parent = document }) {
  parent.querySelector(`[data-${selector}]`).textContent = value;
}

function getIconUrl(iconCode) {
  return `icons/${ICON_MAP.get(iconCode)}.svg`;
}

const currentIcon = document.querySelector("[data-current-icon]");
function renderCurrentWeather(current) {
  currentIcon.src = getIconUrl(current.iconCode);
  setValue("current-temp", current.currentTemp);
  setValue("current-high", current.highTemp);
  setValue("current-low", current.lowTemp);
  setValue("current-fl-high", current.highFeelsLike);
  setValue("current-fl-low", current.lowFeelsLike);
  setValue("current-wind", current.windSpeed);
  setValue("current-precip", current.precip);

  // document.querySelector("[data-current-temp]").textContent =
  // current.currentTemp;
}
