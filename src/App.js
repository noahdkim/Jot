import Calendar from './Calendar'
import Note from './Note'
import React, { Component } from 'react';
import 'typeface-roboto';

function dateToEpoch(thedate) {
  thedate.setHours(0,0,0,0);
  return thedate;
}

class App extends Component {
  updateDate=(newDate) => {
    this.setState({
      date: newDate
    })
  }

  state={
    date: dateToEpoch(new Date()),
  }

  render() {
    return (
      <div className ="row">
        <div className="calendar col s5 offset-s1">
          <Calendar
          calendarType="US"
          changeDate={this.updateDate}
          date={this.state.date}
          />
        </div>

        <div className="note col s4">
              <Note
              date={this.state.date}
              />
        </div>
      </div>

    );
  }
}

export default App;
