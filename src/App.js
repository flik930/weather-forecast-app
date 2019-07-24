import React, {useEffect, useState} from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useDispatch } from 'react-redux'
import weatherForecast from './actionCreators/weatherForecastActionCreator';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App() {
  const dispatch = useDispatch();

  const [location, setLocation] = useState('');

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

        <Card>
          <CardContent>

          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
