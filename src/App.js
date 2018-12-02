import AppBar from '@material-ui/core/AppBar';
import Calendar from './Calendar'
import Grid from '@material-ui/core/Grid';
import Notes from './Notes'
import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

function dateToEpoch(thedate) {
  thedate.setHours(0,0,0,0);
  return thedate;
}

function NavBar(props) {
  return (
    <div className="navBar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Jot
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

class App extends Component {
  constructor(props){
    super(props);
    var currDate = dateToEpoch(new Date());
    this.state=App.loadSavedState(currDate);

  }

  static addNewNote = (prevState, date) => {
    var newState = prevState;
    if (!newState.notes[date]){
      newState.notes[date] = [];
    }

    newState.notes[date].push({
                    checked: false,
                    content:'',
                  });
    return newState;
  }

  handleItemKeypress = (event) => {
      if(event.key === 'Enter' && event.target.value.length !== 0){
        var newState = App.addNewNote(this.state, this.state.date);
        this.setState({
          newState,
        })
      }
  }

  checkboxOnClick = (value, id) => () => {
    var newState = this.state;
    newState.notes[this.state.date][id].checked = !value;
    this.setState(newState);
  };

  static loadSavedState = (date) => {
    var monthYear = [date.getMonth()+1, date.getFullYear()].join('/');
    var savedNotes = JSON.parse(localStorage.getItem(monthYear));
    var savedState = {};
    savedState.date = date.toLocaleDateString();

    // add a blank note at the end
    if (!savedNotes) {
      savedNotes = {};
    }
    savedState.notes = savedNotes;
    App.addNewNote(savedState, savedState.date);
    return savedState;
  }

  updateItem = (e, id) => {
    var newState = this.state;
    newState.notes[this.state.date][id].content = e.target.value;
    this.setState(newState)
  };

  saveNotes(prevDate) {

  }

  updateNotes(prevDateString) {
    var prevDate = new Date(prevDateString);
    var newDate = new Date(this.state.date);
    // Need to compare getTime otherwise always evaluates to True
    if (prevDate.getTime() === newDate.getTime()){
      return;
    }

    // Remove all empty items at the end of a list
    var moreEmpty = true;
    while (moreEmpty){
      var lastPrevDateNotes = this.state.notes[prevDateString].pop();
      console.log(lastPrevDateNotes);
      if (!lastPrevDateNotes){
        delete this.state.notes[prevDateString];
        moreEmpty = false;
      }
      else if (lastPrevDateNotes.content.length !== 0 || lastPrevDateNotes.checked){
        this.state.notes[prevDateString].push(lastPrevDateNotes);
        moreEmpty = false;
      }
    }

    // if the month or year change, save the state
    if (prevDate.getMonth() !== this.state.date.getMonth() ||
          prevDate.getYear() !== this.state.date.getYear()) {
      localStorage.setItem([prevDate.getMonth()+1, prevDate.getFullYear()].join('/'),
                            JSON.stringify(this.state.notes));
      this.setState((App.loadSavedState(this.state.date)));
    } else {
      // otherwise just change the date
      var newState = this.state;
      newState.date = this.state.date.toLocaleDateString();
      // if the list of notes at that date doesn't exist or is empty, initialize the list
      if (!newState.notes[newState.date]){
        newState.notes[newState.date] = [{
                        checked: false,
                        content:'',
                      }]
      } else {
        newState.notes[newState.date].push({
                        checked: false,
                        content:'',
                      });
      }
      return newState;
    }
  }

  componentDidMount(){
    //this.setState(App.loadSavedState(this.props.date));
  }

  componentWillUnmount() {
    console.log("UNMOUNT: " + this.state);
}

  updateDate=(newDate) => {
    console.log("updateDate");
    var prevDate = this.state.date;
    var newState = this.state;
    newState.date = newDate;
    this.setState(newState);
    this.updateNotes(prevDate);
  }



  render() {

    return (
      <div>
        <NavBar/>
        <Grid container>
          <Grid container xs={6} justify={'center'}>
              <Calendar
              calendarType="US"
              changeDate={this.updateDate}
              date={new Date(this.state.date)}
              />
          </Grid>
          <Grid item xs={4}>
          <Notes
          date={this.state.date}
          notes = {this.state.notes}
          checkboxOnClick={this.checkboxOnClick}
          handleItemKeypress={this.handleItemKeypress}
          updateItem={this.updateItem}
          />
          </Grid>
        </Grid>
      </div>

    );
  }
}

export default App;
