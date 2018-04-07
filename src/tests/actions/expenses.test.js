import { startAddExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description:'beer',
    amount:5000,
    note:'Peroni',
    createdAt:1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:'ADD_EXPENSE',
      expense:{
        id:expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  })
  .then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);

    done();
  });

});

test('should add expense to database and store with default values', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description:'',
    amount:0,
    note:'',
    createdAt:0
  };

  store.dispatch(startAddExpense({})).then(() => {

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:'ADD_EXPENSE',
      expense:{
        id:expect.any(String),
        ...expenseDefaults
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  })
  .then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);

    done();
  });
});

// test('should setup an expense action object with default values', () => {
//   const action = addExpense()
//   expect(action).toEqual({
//     type:'ADD_EXPENSE',
//     expense:{
//       id: expect.any(String),
//       description:'',
//       note:'',
//       amount:0,
//       createdAt:0
//     }
//   });
// });

test('should setup an expense action object with values passed in', () => {
  
  const expense = expenses[0];
  const action = addExpense(expense);
  
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense
  });
});