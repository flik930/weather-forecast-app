import React, {useState} from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux'
import weatherForecast from './actionCreators/weatherForecastActionCreator';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ForecastInfoItem from './components/ForecastInfoItem';
import ForecastDrillDownModal from './components/ForecastDrillDownModal';

const App = () => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState('');
  const [modalState, setModalState] = useState({open: false});

  const dailyForecast = useSelector(state => state.dailyForecast);
  const city = useSelector(state => state.city);
  const error = useSelector(state => state.error);

  const handleChange = (e) => {
    setLocation(e.target.value);
  }

  const handleSearchClick = () => {
    dispatch(weatherForecast.request(location))
  }

  const handleForecastClick = (day) => {
    setModalState({open: true, title: day.displayDate, data: day.details});
  }

  const handleModalClose = () => {
    setModalState({open: false});
  }

  return (
    <div className="App">
      <ForecastDrillDownModal open={modalState.open} onClose={handleModalClose} title={modalState.title} data={modalState.data} city={city}/>
      <Container maxWidth="lg" style={{padding: 20}}>
        <Typography variant="h3" gutterBottom>
          Weather Forcast App
        </Typography>

        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <TextField
              id="city"
              label="Please Enter a City"
              placeholder="London"
              margin="normal"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleSearchClick}>
              Search
            </Button>
          </Grid>
          {
            error &&
            <Grid item>
              <span style={{color: 'red'}}>{error}</span>
            </Grid>
          }
        </Grid>

        <Grid container spacing={1} direction="row"
          justify="center"
          alignItems="center">
          {
            dailyForecast && dailyForecast.map((day, index) => (
              <ForecastInfoItem
                key={index}
                onClick={() => handleForecastClick(day)}
                title={day.displayDate}
                minTemp={day.dailyInfo.minTemp}
                maxTemp={day.dailyInfo.maxTemp}
                wind={day.dailyInfo.wind}
                condition={day.dailyInfo.condition.description}
              />
            ))
          }
        </Grid>
      </Container>
    </div>
  );
}

export default App;
