import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import { Provider } from 'react-redux';
import moment from 'moment';
import LoadingPage from './components/LoadingPage';


import 'normalize.css/normalize.css'; //reset browser css so that we are starting from same place
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

import { firebase } from './firebase/firebase';

const store = configureStore();

const wrapper = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(wrapper, document.getElementById('app'));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    renderApp();
    store.dispatch(logout());
    history.push('/');
  }
})


