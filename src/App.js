import React, { Component } from 'react';
import {Calendar as Cal} from 'react-calendar';
import Note from './Note'
import 'typeface-roboto';

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: props.date,
    }
    this.calendarType = props.calendarType
  }

  onChange = date => this.props.changeDate(date)

  render() {
    console.log("calendar date: " + this.state.date);
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

class App extends Component {
  updateDate = (newDate) => {
    console.log('updateDate: ' + newDate);
    this.setState({
      date: newDate
    })
  }

  state = {
    date: new Date(),
  }

  render() {
    console.log('app state date: ' + this.state.date)
    return (
      <div>
        <div className="calendar">
          <Calendar
          calendarType = "US"
          changeDate={this.updateDate}
          date = {this.state.date}
          />
        </div>

        <div className="note">
          <Note
          date = {this.state.date}
          />
        </div>
      </div>
    );
  }
}

export default App;
