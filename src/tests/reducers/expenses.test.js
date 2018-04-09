import expensesReducer from '../../reducers/expenses';

import expenses  from '../fixtures/expenses';

test('should set default expenses', () => {
  const state = expensesReducer(undefined, {type:'@@INIT'});
  expect(state).toEqual([]);
});

test('should add an expense', () => {
  const expense = {
    id: 2,
    description: 'test 2',
    note: 'test 2',
    amount: 2000,
    createdAt: 2000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const newState = expensesReducer( expenses, action );

  expect(newState).toEqual( [ ...expenses, expense ] );
});

test('should edit an expense', () => {

  const updates = {
    description: 'updated',
    note: 'updated',
    amount: 3000,
    createdAt: 3000
  };
  const action = {
    type:'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  };
  const newState = expensesReducer( expenses, action );

  expect(newState[0]).toEqual({
    ...expenses[0],
    ...updates
  });
});

test('should not edit an expense for invalid id', () => {

  const updates = {
    description: 'updated',
    note: 'updated',
    amount: 3000,
    createdAt: 3000
  };
  const action = {
    type:'EDIT_EXPENSE',
    id: '12345',
    updates
  };
  const newState = expensesReducer( expenses, action );

  expect(newState).toEqual(expenses);
});

test('should remove an expense for valid id', () => {
  const action = {
    type:'REMOVE_EXPENSE',
    id: expenses[0].id
  };
  const newState = expensesReducer( expenses, action );
  expect(newState).toEqual( [expenses[1], expenses[2]] );
});

test('should not remove an expense for invalid id', () => {
  const action = {
    type:'REMOVE_EXPENSE',
    id: '12345'
  };
  const newState = expensesReducer( expenses, action );
  expect(newState).toEqual( expenses );
});

test('should set expenses', () => {
  const initialState = [expenses[2]];
  const testState = [expenses[0], expenses[1]];
  const action = {
    type:'SET_EXPENSES',
    expenses:testState
  };

  const newState = expensesReducer( initialState, action );
  expect(newState).toEqual( testState );
})