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

const gridStyle = {
  cursor: 'pointer'
}

const ForecastInfoItem = (props) => {
  const { minTemp, maxTemp, wind, condition } = props;
  const minTempF = toFahrenheit(minTemp).toFixed(2);
  const maxTempF = toFahrenheit(maxTemp).toFixed(2);

  return (
    <Grid item style={gridStyle} onClick={props.onClick}>
      <Paper style={{padding: '20px'}}>
        <Typography variant="h6">
          {props.title}
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary={'Min Temp'} secondary={`${minTemp}°C / ${minTempF}°F`}/>
          </ListItem>
          <Divider component="li" style={{height: '2px'}}/>
          <ListItem>
            <ListItemText primary={'Mix Temp'} secondary={`${maxTemp}°C / ${maxTempF}°F`}/>
          </ListItem>
          <Divider component="li"/>
          <ListItem>
            <ListItemText primary={'Condition'} secondary={condition}/>
          </ListItem>
          <Divider component="li"/>
          <ListItem>
            <ListItemText primary={'Wind'} secondary={`${wind} meter/sec`}/>
          </ListItem>
        </List>
      </Paper>
    </Grid>
  )
}

export default ForecastInfoItem;