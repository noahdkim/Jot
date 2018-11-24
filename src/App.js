import React, { Component } from 'react';
import {Calendar as Cal} from 'react-calendar';
import 'typeface-roboto';



class Note extends Component {
  constructor(props){
    super(props);
    this.onChange = date => this.setState({ date })
  }
  render(){
    return(
      <div>
        {this.props.date}
      </div>
    );
  }

}

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: props.date,
    }
    this.calendarType = props.calendarType
    this.onChange = this.props.updateDate
  }

  render() {
    return (
      <div>
        <div className="calendar">
          <Cal
            calendarType={this.calendarType}
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
      </div>
    );
  }
}

class App extends Component {
  displayDate(){
    alert(this.date);
  }

  updateDate(newDate){
    this.setState({
      date: newDate
    });
  }


  state = {
    date: new Date(),
  }


  render() {
    console.log(this.state.date)
    return (
      <div>
        <div className="calendar">
          <Calendar
          calendarType = "US"
          date = {this.state.date}
          changeDate={this.updateDate}
          />
        </div>

        <div className="note">
          <Note displayDate={this.displayDate}/>
        </div>
      </div>
    );
  }
}

export default App;
