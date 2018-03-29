import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary'
import { shallow } from 'enzyme';

test('should correctly render ExpensesSummary component for single expense' , () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={1000} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary component for multiple expenses' , () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={1000} />);
  expect(wrapper).toMatchSnapshot();
});