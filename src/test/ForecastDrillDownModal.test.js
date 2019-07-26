import React from 'react';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ForecastDrillDownModal from '../components/ForecastDrillDownModal';

describe('ForecastDrillDownModal testing', () => {
  it('Title should exist', ()=> {
    const {getByText} = render(<ForecastDrillDownModal open={true}/>)

    expect(getByText('hourly forecast')).toBeInTheDocument();
  })
})