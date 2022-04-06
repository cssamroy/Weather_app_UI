# Weather App

## Pre-requesties
- Node.js
- npm

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Approach
- Create a new react app from create-react-app architecture
- Used react-query for making API calls
- Used Mui for components
- Create a component with a text box that accepts a zip code
- Integrated the app with accuweather API
- The API for 7 day forecast isn't available and the one that gives you 10 or 15 days is breaking. So used a API for 5 days.

## Decisions taken
- Didn't need the recoil API here in this project. Felt as if it was going to be a overkill here. So went ahead with react-query