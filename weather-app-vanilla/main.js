import "./style.css";
import { getWeather } from "./weather";
import { ICON_MAP } from "./iconMap";

navigator.geolocation.getCurrentPosition(positionSucess, positionError);

function positionSucess({ coords }) {
  getWeather(
    coords.latitude,
    coords.longitude,
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
    .then(renderWeather)
    .catch((e) => {
      console.error(e);
      alert("Error getting weather");
    });
}

function positionError(params) {
  alert(
    "There was an error getting your location. Please allow us to use your location and refresh the page."
  );
}

function renderWeather({ current, daily, hourly }) {
  renderCurrentWeather(current);
  renderDailyWeather(daily);
  renderHourly(hourly);
  document.body.classList.remove("blurred");
}

function setValue(selector, value, { parent = document } = {}) {
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

const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: "short" });
const dailySection = document.querySelector("[data-day-section]");
const dayCardTemplate = document.querySelector("#day-card-template");

function renderDailyWeather(daily) {
  dailySection.innerHTML = "";
  daily.forEach((day) => {
    const el = dayCardTemplate.content.cloneNode(true);
    setValue("temp", day.maxTemp, { parent: el });
    setValue("date", DAY_FORMATTER.format(day.timestamp), { parent: el });
    el.querySelector("[data-icon]").src = getIconUrl(day.iconCode);
    dailySection.append(el);
  });
}

const HOUR_FORMATTER = new Intl.DateTimeFormat(undefined, { hour: "numeric" });
const hourlySection = document.querySelector("[data-hour-section]");
const hourRowTemplate = document.querySelector("#hour-row-template");

function renderHourly(hourly) {
  hourlySection.innerHTML = "";
  hourly.forEach((hour) => {
    const el = hourRowTemplate.content.cloneNode(true);
    setValue("temp", hour.temp, { parent: el });
    setValue("fl-temp", hour.feelsLike, { parent: el });
    setValue("wind", hour.windSpeed, { parent: el });
    setValue("precip", hour.precip, { parent: el });
    setValue("day", DAY_FORMATTER.format(hour.timestamp), { parent: el });
    setValue("time", HOUR_FORMATTER.format(hour.timestamp), { parent: el });
    el.querySelector("[data-icon]").src = getIconUrl(hour.iconCode);
    hourlySection.append(el);
  });
}
