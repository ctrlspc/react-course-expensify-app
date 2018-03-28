import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {
  onExpenseFormSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemoveClick = (id) => {
    this.props.removeExpense(this.props.expense.id);
    this.props.history.push('/');
  }

  render () {
    return (
      <div>
        <ExpenseForm 
          onSubmit={this.onExpenseFormSubmit}
          expense={this.props.expense} />
          <button onClick={this.onRemoveClick}>
            Remove
          </button>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (id) => dispatch(removeExpense({id}))
});

const mapStateToProps = (state, props) => {  
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);