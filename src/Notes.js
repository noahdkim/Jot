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

  checkboxOnClick = (value, id) => () => {
    console.log(value, id);
    var newNotes = this.state.notes;
    newNotes[id].checked = !newNotes[id].checked;
    this.setState({
      notes: newNotes,
    })


  };

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
      console.log(this.state.notes);
    }
  }

  componentDidUpdate(prevProps) {
    // Need to compare getTime otherwise always evaluates to True
    if (this.props.date.getTime() !== prevProps.date.getTime()) {
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
