import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import 'numeral/locales';
import numeral from 'numeral';

numeral.locale('en-gb');

export const ExpensesSummary = (props) => {
  
  const expenseWord = props.expensesCount > 1 ? 'expenses' : 'expense';
  const formattedTotal = numeral(props.expensesTotal/100).format('$0,0.00');
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{props.expensesCount}</span> {expenseWord} totalling <span>{formattedTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const filteredExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expensesCount:filteredExpenses.length,
    expensesTotal:selectExpensesTotal(filteredExpenses)
  }
};



export default connect(mapStateToProps)(ExpensesSummary);

