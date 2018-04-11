import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate , setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocussed:null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocussed) => this.setState({ calendarFocussed });
  
  onFilterTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onFilterSelectChange = (e) => {
    if(e.target.value === 'date'){
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };

  render() {
    const props = this.props;
    return (
    <div className="content-container">
      <div className="input-group">
        <div className="input-group__item">
          <input
            //this is a controlled input - becuase we are programatically controlling the value and onchange
            type="text"
            className="text-input"
            placeholder="Search Expenses"
            value={this.props.filters.text}
            onChange={this.onFilterTextChange}
          />
        </div>
        <div className="input-group__item">
          <select
            //this is also a controlled input
            className="select"
            value={this.props.filters.sortBy}
            onChange={this.onFilterSelectChange}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div className="input-group__item">
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocussed}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters:state.filters
})

const mapDispatchToProps = (dispatch) => ({
  sortByAmount: () => dispatch(sortByAmount()) ,
  sortByDate: () => dispatch(sortByDate()) ,
  setTextFilter: (text) => dispatch(setTextFilter(text)) ,
  setEndDate:  (endDate) => dispatch(setEndDate(endDate)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)