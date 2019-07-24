import React, {useEffect, useState} from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux'
import weatherForecast from './actionCreators/weatherForecastActionCreator';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ForcastInfoItem from './components/ForecastInfoItem';

function App() {
  const dispatch = useDispatch();

  const [location, setLocation] = useState('');

  const dailyForecast = useSelector(state => state.dailyForecast);

  useEffect(() => {
    dispatch(weatherForecast.request('London'));
  }, []);

  const handleChange = (e) => {
    setLocation(e.target.value);
  }

  const handleSearchClick = () => {
    dispatch(weatherForecast.request(location))
  }

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          Simple Weather Forcast App
        </Typography>

        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item>
            <TextField
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
        </Grid>

        <Grid container spacing={1} direction="row"
          justify="center"
          alignItems="center">
          {
            dailyForecast && dailyForecast.map((day, index) => (
              <ForcastInfoItem key={index} info={day}/>
            ))
          }
        </Grid>
      </Container>
    </div>
  );
}

export default App;
