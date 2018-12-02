import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Item from './Item'
import List from '@material-ui/core/List';

import React, { Component } from 'react';

class Note extends Component {

  render(){
    const listItems = this.props.notes[this.props.date].map((note, index) =>
        <Item
          id={index}
          checked={note.checked}
          handleItemKeypress={this.props.handleItemKeypress}
          key={index}
          checkboxOnClick={this.props.checkboxOnClick}
          updateItem={this.props.updateItem}
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
            title={this.props.date}
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
