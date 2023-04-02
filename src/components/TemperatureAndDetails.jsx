import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

//!Note : in this compoent we check for the selected units and display the celcius or farheniet values accordingly
function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp_c,
    maxtemp_c,
    mintemp_c,
    temp_f,
    maxtemp_f,
    mintemp_f,
    sunrise,
    sunset,
    speed,
    humidity,
    feelslike_c,
    feelslike_f,
  },
  units,
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-4 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={icon} alt="" className="w-20" />
        <p className="text-5xl">{`${(units === "c"
          ? temp_c
          : temp_f
        ).toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{`${(units === "c"
              ? feelslike_c
              : feelslike_f
            ).toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">{sunrise}</span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">{sunset}</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{`${(units === "c"
            ? maxtemp_c
            : maxtemp_f
          ).toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${(units === "c"
            ? mintemp_c
            : mintemp_f
          ).toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
