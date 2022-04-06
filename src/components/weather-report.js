import { CardContent, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "react-query";
import Forecast from "../services/forecast";
import Card from "@mui/material/Card";
import { getFormattedDate } from "../utils/date";

const WeatherReport = ({ selectedZipcode }) => {
  const { isLoading, data } = useQuery("forecast", async () => {
    return await Forecast.getWeather(selectedZipcode);
  });
  
  // Show loader till the data fetching continues
  if (isLoading) return <CircularProgress color="secondary" />;

  return (
    <>
      <div className="info-title">
        Showing data for location key: {selectedZipcode}
      </div>
      <div className="weather-info-container">
        {data.map((info, index) => {
          const date = new Date(info.EpochDate * 1000);
          return (
            <Card sx={{ height: 200, width: 300, margin: 1, padding: 2 }} key={index}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ marginBottom: 20 }}
                >
                  {getFormattedDate(date)}
                </Typography>
                <Typography variant="h6" component="div">
                  Max - {info.Temperature.Maximum.Value}
                </Typography>
                <Typography variant="h6" component="div">
                  Min - {info.Temperature.Minimum.Value}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default WeatherReport;
