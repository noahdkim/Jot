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

    // make sure notes are saved before leaving the page
    window.addEventListener("beforeunload", (ev) =>
      {
        var date = new Date(this.state.date);
        this.removeEmptyItems(this.state.date);
        localStorage.setItem([date.getMonth()+1, date.getFullYear()].join('/'),
                              JSON.stringify(this.state.notes));
      });
  }

  // add a new note to the state
  static addNewNote = (prevState, date, prevIndex) => {
    var newState = prevState;
    if (!newState.notes[date]){
      newState.notes[date] = [];
    }
    if (!prevIndex){
      prevIndex = newState.notes[date].length-1;
    }
    var newNote = {
                    checked: false,
                    content:'',
                  }
    newState.notes[date].splice(prevIndex+1, 0, newNote);
    return newState;
  }

  // handle the checkbox click behavior
  checkboxOnClick = (value, id) => () => {
    var newState = this.state;
    newState.notes[this.state.date][id].checked = !value;
    this.setState(newState);
  };

  deleteNote = (id) => () => {
    if (this.state.notes[this.state.date].length > 1){
      var newState = this.state;
      newState.notes[this.state.date].splice(id, 1);
      this.setState(newState);
    }
  }

  // handle special keypresses
  handleItemKeypress = (event, id) => {
      if(event.key === 'Enter' && event.target.value.length !== 0){
        var newState = App.addNewNote(this.state, this.state.date, id);
        this.setState(newState);
      }
  }

  // load saved notes from localStorage
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

  markAllComplete = () => {
    var newState = this.state;
    var newNotes = newState.notes[this.state.date];
    newNotes.forEach((note)=> {
      if (note.content.length > 0){
        note.checked=true;
      }
    } );
    this.setState(newState);
  }

  // Upon calendar changing date, update state and notes
  updateDate=(newDate) => {
    var prevDate = this.state.date;
    var newState = this.state;
    newState.date = newDate;
    this.setState(newState);
    this.updateNotes(prevDate);
  }

  // keep the item in state updated
  updateItem = (e, id) => {
    var newState = this.state;
    newState.notes[this.state.date][id].content = e.target.value;
    this.setState(newState)
  };

  updateNotes(prevDateString) {
    var prevDate = new Date(prevDateString);
    var newDate = new Date(this.state.date);
    // Need to compare getTime otherwise always evaluates to True
    if (prevDate.getTime() === newDate.getTime()){
      return;
    }

    // Remove all empty items at the end of a list
    this.removeEmptyItems(prevDateString);

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

  removeEmptyItems(date){
    // Remove all empty items at the end of a list
    var moreEmpty = true;
    while (moreEmpty){
      var dateFinalItem = this.state.notes[date].pop();
      if (!dateFinalItem){
        delete this.state.notes[date];
        moreEmpty = false;
      }
      else if (dateFinalItem.content.length !== 0 || dateFinalItem.checked){
        this.state.notes[date].push(dateFinalItem);
        moreEmpty = false;
      }
    }
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
          deleteNote={this.deleteNote}
          notes = {this.state.notes}
          checkboxOnClick={this.checkboxOnClick}
          handleItemKeypress={this.handleItemKeypress}
          updateItem={this.updateItem}
          markAllComplete={this.markAllComplete}
          />
          </Grid>
        </Grid>
      </div>

    );
  }
}

export default App;
