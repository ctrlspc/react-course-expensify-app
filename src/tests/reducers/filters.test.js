import moment from 'moment';

import filtersReducer from '../../reducers/filters';

test('should return default state', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '', 
    sortBy: 'date', 
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set the sort by property to amount', () => {
  
  const state = {
    text: '', 
    sortBy: 'date', 
    startDate: moment(0),
    endDate: moment(0)
  };
  const action = {
    type: 'SORT_BY_AMOUNT'
  };

  const newState = filtersReducer(state, action);

  expect(newState.sortBy).toEqual('amount');
});

test('should set the sort by property to date', () => {
  
  const state = {
    text: '', 
    sortBy: 'amount', 
    startDate: moment(0),
    endDate: moment(0)
  };
  const action = {
    type: 'SORT_BY_DATE'
  };

  const newState = filtersReducer(state, action);

  expect(newState.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = {
    text: '', 
    sortBy: 'amount', 
    startDate: undefined,
    endDate: undefined
  };
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'a text filter'
  };
  const newState = filtersReducer(state, action);

  expect(newState.text).toBe('a text filter');
});

test('should set startDate filter', () => {
  const state = {
    text: '', 
    sortBy: 'amount', 
    startDate: undefined,
    endDate: undefined
  };
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate
  };
  const newState = filtersReducer(state, action);

  expect(newState.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
  const state = {
    text: '', 
    sortBy: 'amount', 
    startDate: undefined,
    endDate: undefined
  };
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate
  };
  const newState = filtersReducer(state, action);

  expect(newState.endDate).toEqual(endDate);
});