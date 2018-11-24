













            calendarType={this.calendarType}
            onChange={this.onChange}
            value={this.state.date}
          />
          />
          <Cal
          <Calendar
          <Note displayDate={this.displayDate}/>
          calendarType = "US"
          changeDate={this.updateDate}
          date = {this.state.date}
        </div>
        </div>
        </div>
        <div className="calendar">
        <div className="calendar">
        <div className="note">
        {this.props.date}
      </div>
      </div>
      </div>
      <div>
      <div>
      <div>
      date: newDate
      date: props.date,
    );
    );
    );
    alert(this.date);
    console.log(this.state.date)
    date: new Date(),
    return (
    return (
    return(
    super(props);
    super(props);
    this.calendarType = props.calendarType
    this.onChange = date => this.setState({ date })
    this.onChange = this.props.updateDate
    this.setState({
    this.state = {
    }
    });
  constructor(props){
  constructor(props){
  displayDate(){
  render() {
  render() {
  render(){
  state = {
  updateDate(newDate){
  }
  }
  }
  }
  }
  }
  }
  }
class App extends Component {
class Calendar extends Component {
class Note extends Component {
export default App;
import 'typeface-roboto';
import React, { Component } from 'react';
import {Calendar as Cal} from 'react-calendar';
}
}
}
