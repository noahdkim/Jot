import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';

class Item extends Component {
  render(){
    return(
      <ListItem>
        <Checkbox
        checked={this.props.checked}
        onClick={this.props.checkboxOnClick(this.props.checked, this.props.id)}
              />
        <TextField
          onKeyPress={this.props.handleItemKeypress}
          onChange={(e)=>this.props.updateItem(e, this.props.id)}
          value={this.props.content}

        />
        <ListItemSecondaryAction>
                      <IconButton aria-label="Delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
      </ListItem>

    );
  }

}

export default Item
