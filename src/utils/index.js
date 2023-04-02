// * UTILITY functions below

import { DateTime } from "luxon";

export const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  secs = secs - 0;
  const date = DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
  return date;
};

export const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      return { lat, lon };
    });
  }
};
