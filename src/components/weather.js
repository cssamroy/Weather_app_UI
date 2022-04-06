import React, { useState } from "react";
import "./weather.scss";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import forecast from "../services/forecast";
import WeatherReport from "./weather-report";

const Weather = () => {
  const [zipcode, setZipcode] = useState("");
  const [selectedZipcode, setSelectedZipcode] = useState(null);

  // Fetching the city information from zipcode provided
  const onSubmit = async (event) => {
    event.preventDefault();
    const zipcodeValue = zipcode.trim();
    if (zipcodeValue) {
      const response = await forecast.getCity(zipcode.trim());
      setSelectedZipcode(response?.Key);
    }
  };

  return (
    <Container className="weather">
      <form onSubmit={onSubmit}>
        <InputLabel className="label" htmlFor="zipcode">
          ZIP Code
        </InputLabel>
        <Input
          className="zipcode-input"
          id="zipcode"
          type="text"
          onChange={(e) => setZipcode(e.target.value)}
          value={zipcode}
        />
      </form>
      {selectedZipcode && <WeatherReport selectedZipcode={selectedZipcode} />}
    </Container>
  );
};

export default Weather;
