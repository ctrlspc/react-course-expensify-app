import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup a remove expense action object', () => {
  const action = removeExpense({id:'234abc'});
  expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id:'234abc'
  });
});

test('should setup an edit expense action object', () => {
  const action = editExpense('123abc',{note:'test note'});
  expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id:'123abc',
    updates:{
      note:'test note'
    }
  });
});

test('should setup an expense action object with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
      id: expect.any(String),
      description:'',
      note:'',
      amount:0,
      createdAt:0
    }
  });
});

test('should setup an expense action object with values passed in', () => {
  const newExpense = {
    description:'A test expense',
    note:'a note',
    amount:120,
    createdAt:1000
  };
  const action = addExpense(newExpense);
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
      id:expect.any(String),
      ...newExpense
    }
  });
});