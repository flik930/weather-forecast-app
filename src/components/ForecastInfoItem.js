import React from 'react';
import Grid from '@material-ui/core/Grid';

const ForecastInfoItem = (props) => {
  const { info } = props;
  return (
    <Grid item>
      {info.displayDate}
    </Grid>
  )
}

export default ForecastInfoItem;