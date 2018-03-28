import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import {Provider} from 'react-redux';
import moment from 'moment';

import 'normalize.css/normalize.css'; //reset browser css so that we are starting from same place
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();

store.subscribe(() => {
  const state = store.getState()
})


store.dispatch(addExpense({description:'Water Bill', amount:4500, createdAt:moment().subtract(2, 'months').valueOf()}));
store.dispatch(addExpense({description:'Gas Bill', createdAt:moment().valueOf()}));
store.dispatch(addExpense({description:'Rent', amount:109500, createdAt:moment().valueOf()}));


const wrapper = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(wrapper, document.getElementById('app'));



