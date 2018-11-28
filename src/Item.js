import Checkbox from '@material-ui/core/Checkbox';
import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Zoom from '@material-ui/core/Zoom';

class Item extends Component {
  render(){
    return(
      <ListItem>
        <Checkbox
        checked={this.props.checked}
        onClick={this.props.checkboxOnClick(this.props.checked, this.props.id)}
              />
        <TextField
        onKeyPress={this.props.addNewNote}
        />
      </ListItem>

    );
  }

}

export default Item
