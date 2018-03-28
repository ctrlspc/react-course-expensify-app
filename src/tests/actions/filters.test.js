import moment from 'moment';

import { 
  setTextFilter, 
  sortByAmount, 
  sortByDate, 
  setStartDate, 
  setEndDate 
} from '../../actions/filters';

test('should create a SET_TEXT_FILTER action object with text passed in', () => {
  const text = 'some value';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should create a SET_TEXT_FILTER action object with defaults', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should create a SORT_BY_AMOUNT action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should create a SORT_BY_DATE action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should create a SET_START_DATE action object', () => {
  const action = setStartDate( moment(0) );
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should create a SET_END_DATE action object', () => {
  const action = setEndDate( moment(0) );
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});