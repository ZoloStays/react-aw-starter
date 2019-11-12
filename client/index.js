import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './source/App';
import { configureStore } from '../server/framework/store';

const initialState = window.__PRELOADED_STATE__
  ? window.__PRELOADED_STATE__
  : {};
const store = configureStore(initialState);

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));