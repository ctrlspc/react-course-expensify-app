import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

import expenses from '../fixtures/expenses';


test('should filter by text value', () => {
  const filters = {
    text:'r',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter out expenses that occured before the day of the startDate', () => {
  const filters = {
    text:'',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0] ]);  
});

test('should filter out expenses occuring after the day of endDate', () => {
  const filters = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[0], expenses[1] ]); 
});

test('should sort by date in ascending order', () => {
  const filters = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]); 
});

test('should sort by amount in ascending order', () => {
  const filters = {
    text:'',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses [1], expenses[2], expenses[0] ]); 
});

