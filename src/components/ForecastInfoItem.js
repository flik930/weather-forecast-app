import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';
const toFahrenheit = (c) => {
  return (c * 9 / 5) + 32;
}

const ForecastInfoItem = (props) => {
  const { minTemp, maxTemp, wind, condition, conditionIconSrc, drillDown } = props;
  const minTempF = toFahrenheit(minTemp).toFixed(2);
  const maxTempF = toFahrenheit(maxTemp).toFixed(2);

  const gridStyle = {
    cursor: drillDown ? 'auto' : 'pointer',
    width: 216
  }

  return (
    <Grid item style={gridStyle} onClick={props.onClick}>
      <StyledPaper>
        <Typography variant="h6">
          {props.title}
        </Typography>
        <List dense={true}>
          <ListItem>
            <ListItemText primary={'Min Temp'} secondary={`${minTemp}°C / ${minTempF}°F`}/>
          </ListItem>
          <Divider component="li"/>
          <ListItem>
            <ListItemText primary={'Max Temp'} secondary={`${maxTemp}°C / ${maxTempF}°F`}/>
          </ListItem>
          <Divider component="li"/>
          <ListItem>
            <ListItemText primary={'Condition'} secondary={condition}/>
            <ListItemIcon style={{minWidth: 40}}>
              <img style={{width: 40}} src={conditionIconSrc} />
            </ListItemIcon>
          </ListItem>
          <Divider component="li"/>
          <ListItem>
            <ListItemText primary={'Wind'} secondary={`${wind} meter/sec`}/>
          </ListItem>
        </List>
      </StyledPaper>
    </Grid>
  )
}

export default ForecastInfoItem;

const StyledPaper = styled(Paper)`
  background-color: #fff !important;
  transition: all .2s ease-in !important;
  &:hover {
    background: #eee !important;
  }
  padding: 10px;
`