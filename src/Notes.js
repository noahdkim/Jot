import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Item from './Item'
import List from '@material-ui/core/List';

import React, { Component } from 'react';

class Note extends Component {
  constructor(props){
    super(props);
    this.state=Note.loadSavedState(props.date);
  }


  addNewNote = (event) => {
    if(event.key === 'Enter' && event.target.value.length !== 0){
      var newState = this.state;
      newState.notes[this.props.date.toLocaleDateString()].push({
                      checked: false,
                      content:'',
                    });

      this.setState({
        newState,
      })
    }
  }

  checkboxOnClick = (value, id) => () => {
    var newState = this.state;
    newState.notes[this.props.date.toLocaleDateString()][id].checked = !value;
    this.setState(newState);
  };

  static loadSavedState = (date) => {
    var monthYear = [date.getMonth()+1, date.getFullYear()].join('/');
    var savedNotes = JSON.parse(localStorage.getItem(monthYear));
    console.log(savedNotes);
    var savedState = {};
    savedState.date = date.toLocaleDateString();

    // add a blank note at the end
    if (!savedNotes) {
      savedNotes = {};
    }
    if (savedNotes[date.toLocaleDateString()]) {
      savedNotes[date.toLocaleDateString()].push({
                      checked: false,
                      content:'',
                    });
    } else {
      // if there are no notes, add a new initial note
      savedNotes[date.toLocaleDateString()] = [{
                      checked: false,
                      content:'',
                    }]
    }
    savedState.notes=savedNotes;
    console.log("savedState: " + JSON.stringify(savedState));
    return savedState;
  }

  updateItem = (e, id) => {
    var newState = this.state;
    console.log(newState);
    newState.notes[this.props.date.toLocaleDateString()][id].content = e.target.value;
    this.setState(newState)
  };


  static getDerivedStateFromProps(nextProps, prevState) {
    // Need to compare getTime otherwise always evaluates to True
    var prevDate = new Date(prevState.date);
    console.log("state: " + JSON.stringify(prevState));
    if (prevDate.getTime() === nextProps.date.getTime()){
      return prevState;
    }
    // if the month or year change, save the state
    if (prevDate.getMonth() !== nextProps.date.getMonth() ||
          prevDate.getYear() !== nextProps.date.getYear()) {
      console.log("month change");
      localStorage.setItem([prevDate.getMonth()+1, prevDate.getFullYear()].join('/'),
                            JSON.stringify(prevState.notes));
      return (Note.loadSavedState(nextProps.date));
    } else {
      // otherwise just change the date
      var newState = prevState;
      console.log("no change in month");
      newState.date = nextProps.date.toLocaleDateString();
      if (!newState.notes[newState.date]){
        newState.notes[newState.date] = [{
                        checked: false,
                        content:'',
                      }]
      }
      return newState;
    }
  }

  componentDidMount(){
    this.setState(Note.loadSavedState(this.props.date));
  }

  render(){
    const listItems = this.state.notes[this.props.date.toLocaleDateString()].map((note, index) =>
        <Item
          id={index}
          checked={note.checked}
          addNewNote={this.addNewNote}
          key={index}
          checkboxOnClick={this.checkboxOnClick}
          updateItem={this.updateItem}
          content={note.content}
        />
    );

    var cardStyle = {
      maxHeight: '75vh',
      backgroundColor: "#FFBBAA",
      overflow: 'auto',
    }


    return(
      <div className="note">
        <Card className="notesCard" style={cardStyle}>
          <CardHeader
            title={this.props.date.toLocaleDateString()}
            className="note-header"
            >

          </CardHeader>
          <List>
              {listItems}
          </List>
          <CardActions>
            <Button size="small">Mark all complete</Button>
          </CardActions>
      </Card>
    </div>

    );
  }

}

export default Note
