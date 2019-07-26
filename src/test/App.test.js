import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import store from '../store';
import { Provider } from 'react-redux';
import mockData from './mockData';
import {render, fireEvent, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import axiosMock from 'axios'

jest.mock('axios');

describe('app testing', () => {
  afterEach(() => {
    cleanup();
    axiosMock.get.mockClear();
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Loading correct title ', () => {
    const {getByText} = render(
      <Provider store={store}><App/></Provider>,
    )
    expect(getByText('Weather Forecast App')).toBeInTheDocument()
 });

 it('fetching data when search clicked', async () => {
  const {getByText, getByLabelText} = render(
    <Provider store={store}><App/></Provider>,
  )
  axiosMock.get.mockResolvedValueOnce({
    data: mockData,
  })
  expect(axiosMock.get).toHaveBeenCalledTimes(0)
  userEvent.type(getByLabelText('Please Enter a City'), 'London');
  fireEvent.click(getByText('Search'))
  expect(axiosMock.get).toHaveBeenCalledTimes(1)
 })
})