import Calendar from './Calendar'
import Note from './Note'
import React, { Component } from 'react';
import 'typeface-roboto';

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
      <div class="row">
        <div className="calendar col s5 offset-s1">
          <Calendar
          calendarType = "US"
          changeDate={this.updateDate}
          date = {this.state.date}
          />
        </div>

        <div className="note col s4">
              <Note
              date = {this.state.date}
              />
        </div>
      </div>

    );
  }
}

export default App;
