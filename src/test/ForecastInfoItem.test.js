import React from 'react';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ForecastInfoItem from '../components/ForecastInfoItem';

describe('ForecastInfoItem testing', () => {
  it('Headers should exist', ()=> {
    const {getByText} = render(<ForecastInfoItem/>)

    expect(getByText('Min Temp')).toBeInTheDocument();
    expect(getByText('Max Temp')).toBeInTheDocument();
    expect(getByText('Condition')).toBeInTheDocument();
    expect(getByText('Wind')).toBeInTheDocument();
  })
})