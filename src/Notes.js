import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Item from './Item'
import List from '@material-ui/core/List';

import React, { Component } from 'react';

class Note extends Component {
  state={
    notes: [],
  }

  addNewNote = (event) => {
    if(event.key === 'Enter' && event.target.value.length !== 0){
      var newNotes = this.state.notes;
      newNotes.push({
                      checked: false,
                      content:'',
                    });
      this.setState({
        notes: newNotes,
      })
    }
  }

  checkboxOnClick = (value, id) => () => {
    console.log(value, id);
    var newNotes = this.state.notes;
    newNotes[id].checked = !newNotes[id].checked;
    this.setState({
      notes: newNotes,
    })
  };

  updateItem = (e, id) => {
    console.log(e.target.value);
    console.log(id);
    var newNotes = this.state.notes;
    newNotes[id].content = e.target.value;
    console.log("newNotes: " + JSON.stringify(newNotes));
    this.setState({
      notes: newNotes,
    })
  };


  componentDidUpdate(prevProps) {
    // Need to compare getTime otherwise always evaluates to True
    if (this.props.date.getTime() !== prevProps.date.getTime()) {
      localStorage.setItem(prevProps.date.getTime(), JSON.stringify(this.state));
      var savedState = JSON.parse(localStorage.getItem(this.props.date.getTime()));
      if (!savedState) {
        savedState ={
          notes: [{
                          checked: false,
                          content:'',
                        }
                  ],
        };
      }
      this.setState(savedState)
    }
  }

  componentDidMount(){
    var newNotes = this.state.notes;
    newNotes.push({
                    checked: false,
                    content:'',
                  });
    this.setState({
      notes:newNotes,
    })
  }

  render(){
    const listItems = this.state.notes.map((note, index) =>
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
