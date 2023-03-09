import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../styles/Weather.module.css'
import { Box, Typography } from '@mui/material';

const Weather = () => {
  const { capital } = useParams();
  interface IData {
    temperature: number;
    weather_icons: any;
    wind_speed: number;
    precip: number;
  }

  const [
    { temperature,
      weather_icons,
      wind_speed,
      precip
    }, setdata] = useState<IData>({ temperature: 0, weather_icons: [], wind_speed: 0, precip: 0 });

  useEffect(() => {
    fetch(`http://api.weatherstack.com/current?access_key=68f83f417142a947f0a6b9f6f1f427d8&query=${capital}`)
      .then((res) => res.json())
      .then((res) => setdata(res.current))
      .catch((err) => console.log(err))
  }, [capital])

  return (
    <>
      <Box className={styles.main}>
        <Box className={styles.box}>
          <Box>
            <img src={weather_icons[0]} alt="" width="100px" height="100px" />
          </Box>
          <Box>
            <Typography variant="h5" component="h4" fontWeight="400" fontSize="18px">
              <span style={{ fontWeight: '600' }}>Temperature: </span>
              {temperature}
            </Typography>
            <Typography variant="h5" component="h4" fontWeight="400" fontSize="18px">
              <span style={{ fontWeight: '600' }}>Wind speed: </span>
              {wind_speed}
            </Typography>
            <Typography variant="h5" component="h4" fontWeight="400" fontSize="18px">
              <span style={{ fontWeight: '600' }}>Precipitation: </span>
              {precip}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Weather