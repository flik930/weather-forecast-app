import React from 'react';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import ForecastInfoItem from './ForecastInfoItem';
import Grid from '@material-ui/core/Grid';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  outline: 'none',
  padding: '20px'
};

const ForecastDrillDownModal = (props) => {

  
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Paper style={modalStyle}>
        <Typography variant="h6" component="span" style={{marginRight: 10}}>
          {props.title}
        </Typography>
        <Typography variant="subtitle1" component="span">
          {`3 hours forecast`}
        </Typography>
        <Grid container spacing={1} direction="row"
          justify="center"
          alignItems="center">
          {
            props.data && props.data.map((hourlyData, index) => (
              <ForecastInfoItem 
              key={index} 
              title={hourlyData.dt}
              minTemp={hourlyData.main.temp_min}
              maxTemp={hourlyData.main.temp_max}
              wind={hourlyData.wind.speed}
              condition={hourlyData.weather[0].description}
              />
            ))
          }
        </Grid>
      </Paper>
    </Modal>
  )
}

export default ForecastDrillDownModal;