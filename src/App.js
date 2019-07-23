import React, {useEffect} from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useDispatch } from 'react-redux'
import fiveDaysWeatherForecast from './actionCreators/weatherForecastActionCreator';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fiveDaysWeatherForecast.request('London'));
  }, []);

  return (
    <div className="App">
      <Typography variant="h3" gutterBottom>
        Simple Weather Forcast App
      </Typography>

      <Card>
        <CardContent>

        </CardContent>
      </Card>
    </div>
  );
}

export default App;
