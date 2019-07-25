import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const toFahrenheit = (c) => {
  return (c * 9 / 5) + 32;
}

const ForecastInfoItem = (props) => {
  const { info } = props;
  const minTempF = toFahrenheit(info.dailyInfo.minTemp).toFixed(2);
  const maxTempF = toFahrenheit(info.dailyInfo.maxTemp).toFixed(2);
  return (
    <Grid item>
      <Paper style={{padding: '20px'}}>
        <Typography variant="h6">
          {info.displayDate}
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary={'Min Temp'} secondary={`${info.dailyInfo.minTemp}°C / ${minTempF}°F`}/>
          </ListItem>
          <Divider component="li" style={{height: '2px'}}/>
          <ListItem>
            <ListItemText primary={'Mix Temp'} secondary={`${info.dailyInfo.maxTemp}°C / ${maxTempF}°F`}/>
          </ListItem>
          <Divider component="li"/>
          <ListItem>
            <ListItemText primary={'Condition'} secondary={info.dailyInfo.condition.description}/>
          </ListItem>
          <Divider component="li"/>
          <ListItem>
            <ListItemText primary={'Wind'} secondary={`${info.dailyInfo.wind} meter/sec`}/>
          </ListItem>
        </List>
      </Paper>
    </Grid>
  )
}

export default ForecastInfoItem;