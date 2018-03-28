import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { defaultFilters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={defaultFilters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});


test('should render ExpenseListFilters properly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with altFilters properly', () => {
  wrapper.setProps({filters:altFilters});
  expect(wrapper).toMatchSnapshot();
});

test('should handle a filter text change', () => {
  const value = 'testText';
  wrapper.find('input').simulate('change', {target: {value}});
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle change to sort by date', () => {
  wrapper.setProps({filters:altFilters});//will set the filer to amount
  const value = 'date';
  wrapper.find('select').simulate('change', {target: {value}});
  expect(sortByDate).toHaveBeenCalled();
});

test('should handle change to sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {target: {value}});
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle filter date changes', () => {
  const startDate = moment(0);
  const endDate = moment(0).add(4,'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change', () => {
  const startFocus = 'startDate';
  expect(wrapper.state('calendarFocussed')).toBe(null);
  wrapper.find('DateRangePicker').prop('onFocusChange')(startFocus);
  expect(wrapper.state('calendarFocussed')).toBe(startFocus);
});


