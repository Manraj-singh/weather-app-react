//Package imports
import { useEffect, useState } from "react";
//File imports
import NavCities from "./components/NavCities";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";

import getFormattedWeatherData from "./services/weatherService";

function App() {
  //*STATES
  const [query, setQuery] = useState({ q: "mumbai" });
  const [units, setUnits] = useState("c");
  const [weather, setWeather] = useState(null);
  //?here useEffect essentially acts as componentDidMount which displays current location weather
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({ q: `${lat},${lon}` });
      });
    }
  }, []);
  //*useEffect used to get the weather data on initial render and subsequent renders when query changes
  //?here useEffect essentially acts as componentDidMount + componentDidUpdate
  useEffect(() => {
    const fetchWeather = async () => {
      //fetching weather details as per query(city name or lat,lon)
      await getFormattedWeatherData({ ...query }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query]);

  //custom function to change background color as per location temperature
  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = 22;
    if (weather.temp_c <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-3 px-16 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <NavCities setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} units={units} />

          <Forecast
            title="hourly forecast"
            units={units}
            items={weather.hourly}
          />
          <Forecast
            title="daily forecast"
            units={units}
            items={weather.daily}
          />
        </div>
      )}
    </div>
  );
}

export default App;
