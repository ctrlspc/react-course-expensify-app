import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper, expense;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  expense = expenses[0];
  wrapper = shallow(
    <EditExpensePage 
      startEditExpense={startEditExpense} 
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expense}
    />
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should handle ExpenseForm onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
})

test('should handle onRemove', () => {
  wrapper.find('button').simulate('click');
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expense.id);
  expect(history.push).toHaveBeenLastCalledWith('/');
})