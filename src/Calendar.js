import React, { Component } from 'react';
import {Calendar as Cal} from 'react-calendar';

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state={
      date: props.date,
    }
    this.calendarType=props.calendarType
  }

  onChange=date => this.props.changeDate(date)

  render() {
    return (
      <div>
        <div className="calendar">
          <Cal
            onChange={this.onChange}
            calendarType={this.calendarType}
            value={this.props.date}
          />
        </div>
      </div>
    );
  }
}

export default Calendar
