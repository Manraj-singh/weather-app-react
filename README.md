# Weather App using Reactjs , Tailwindcss

Deployed on : 
## Tech Stack

*Reactjs, Tailwindcss, WeatherApi*

**Overview :**

a weather app using reactjs, tailwindcss to get weather details of current location or search any location along with forecast data hourly & daily

 **Features :**

 - Search city
    - users can search for a city to get weather data

- Current location
    - users can get their current location weather data

- Forecast data 
    - users can view hourly & daily weather forecast
- Unit system
    - Users can switch between Celcius and Farenheit units



## Run Locally

1) Clone the project

```bash
  git clone https://github.com/Manraj-singh/weather-app-react.git
```
alternatively , download the code zip file

2) install the nodemodules from package.json  :

```bash
  npm install
```

3) Go to weatherApi and get your API_KEY

```bash
  https://www.weatherapi.com/
```
4) Once you get the API key put the API_KEY in constants folders index.js :
```bash
const API_KEY = "<enter your api key here>";
```

5) finally start it on your local server

```bash
  npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Folder Structure
```
README.md
package-lock.json
package.json
public
   |-- favicon.ico
   |-- index.html
   |-- logo192.png
   |-- logo512.png
   |-- manifest.json
   |-- robots.txt
src
   |-- App.js
   |-- components
   |   |-- Forecast.jsx
   |   |-- Inputs.jsx
   |   |-- NavCities.jsx
   |   |-- TemperatureAndDetails.jsx
   |   |-- TimeAndLocation.jsx      
   |-- constants
   |   |-- index.js
   |-- index.css
   |-- index.js
   |-- services
   |   |-- weatherService.js
   |-- utils
   |   |-- index.js
tailwind.config.js
```

walkthrough of Src : 
- App.js is the entry to the App
- Components folder contains all the jsx components to be rendered in DOM
- constants folder contains the constant data such as api_key , base url etc
- services folder contains the api calls and return formatted data to be rendered in components
- utils folder contains utility functions
- tailwind.config.js constains tailwind configurations 
## How to deploy react app to github :

```bash
https://github.com/gitname/react-gh-pages
```
