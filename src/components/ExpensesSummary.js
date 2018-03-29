import React from 'react'
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import 'numeral/locales';
import numeral from 'numeral';

numeral.locale('en-gb');

export const ExpensesSummary = (props) => {
  
  const expenseWord = props.expensesCount > 1 ? 'expenses' : 'expense';
  const formattedTotal = numeral(props.expensesTotal/100).format('$0,0.00');
  return (<div>
    Viewing {props.expensesCount} {expenseWord} totalling {formattedTotal}
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

