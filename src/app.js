import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import {startSetExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import {Provider} from 'react-redux';
import moment from 'moment';

import 'normalize.css/normalize.css'; //reset browser css so that we are starting from same place
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

import './firebase/firebase';

const store = configureStore();

const wrapper = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));


store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(wrapper, document.getElementById('app'));
})



