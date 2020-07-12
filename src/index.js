import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

