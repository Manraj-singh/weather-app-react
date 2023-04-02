import { API_KEY, BASE_URL } from "../constants";
import { formatToLocalTime } from "../utils";

//*Custom function to get Weather data based on endpoint and params passed
const getWeatherData = (endpoint, searchParams) => {
  const url = new URL(BASE_URL + endpoint);
  url.search = new URLSearchParams({ ...searchParams, key: API_KEY });

  return fetch(url).then((res) => res.json());
};

//* Used to format the current weather data and return the data we need in a single formatted object
const formatCurrentWeather = (data) => {
  //using destructuring to get data
  const {
    location: { lat, lon, name, country, tz_id: timezone, localtime_epoch: dt },
    current: {
      temp_c,
      temp_f,
      feelslike_c,
      feelslike_f,
      humidity,
      condition: { icon, text: details },
      wind_kph: speed,
    },
  } = data;

  const {
    day: { maxtemp_c, mintemp_c, maxtemp_f, mintemp_f },
    astro: { sunrise, sunset },
  } = data.forecast.forecastday[0];

  return {
    lat,
    lon,
    temp_c,
    temp_f,
    feelslike_c,
    feelslike_f,
    maxtemp_c,
    maxtemp_f,
    mintemp_c,
    mintemp_f,
    humidity,
    timezone,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

//* Used to format the  weather forecast data and return the data we need in a single formatted object
const formatForecastWeather = (data) => {
  const {
    location: { tz_id: timezone, localtime },
  } = data;
  let hourly = data.forecast.forecastday[0].hour;
  let daily = data.forecast.forecastday.slice(1, 7);

  daily = daily.map((d) => {
    return {
      title: formatToLocalTime(d.date_epoch, timezone, "ccc"),
      temp_c: d.day.avgtemp_c,
      temp_f: d.day.avgtemp_f,
      icon: d.day.condition.icon,
    };
  });
  let time = localtime.split(" ")[1].split(":")[0];
  time = time > 19 ? 19 : time;
  hourly = hourly.splice(time, 5).map((d) => {
    return {
      title: formatToLocalTime(d.time_epoch, timezone, "hh:mm a"),
      temp_c: d.temp_c,
      temp_f: d.temp_f,
      icon: d.condition.icon,
    };
  });

  return { timezone, daily, hourly };
};

//we call this method to get and format the current weather data and forecast data and return necessary data as single object
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "forecast.json",
    searchParams
  ).then(formatCurrentWeather);

  const formattedForecastWeather = await getWeatherData("forecast.json", {
    ...searchParams,
    days: 6,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export default getFormattedWeatherData;
