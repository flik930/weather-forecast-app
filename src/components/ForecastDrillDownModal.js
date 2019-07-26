import React from 'react';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import ForecastInfoItem from './ForecastInfoItem';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxHeight: '80%',
  outline: 'none',
  padding: '10px',
  overflow: 'auto',
};

const ForecastDrillDownModal = (props) => {
  
  const toHour = (dt) => {
    return moment(dt*1000).utcOffset(props.city.timezone / 60).format('H:mm')
  }

  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Paper style={modalStyle}>
        <Typography variant="h4" component="div" style={{display: 'inline-block', padding: 10}}>
          {props.title}
        </Typography>
        <Typography variant="h6" component="div" style={{display: 'inline-block', padding: 10}}>
          {`hourly forecast`}
        </Typography>
        <Grid container spacing={1} direction="row"
          justify="center"
          alignItems="center">
          {
            props.data && props.data.map((hourlyData, index) => (
              <ForecastInfoItem 
              key={index} 
              title={`${toHour(hourlyData.dt)}`}
              minTemp={hourlyData.main.temp_min}
              maxTemp={hourlyData.main.temp_max}
              wind={hourlyData.wind.speed}
              condition={hourlyData.weather[0].description}
              conditionIconSrc={`http://openweathermap.org/img/wn/${hourlyData.weather[0].icon}@2x.png`}
              drillDown={true}
              />
            ))
          }
        </Grid>
      </Paper>
    </Modal>
  )
}

export default ForecastDrillDownModal;