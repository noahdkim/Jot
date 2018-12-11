import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';

class Task extends Component {
  constructor(props) {
    super(props);
    this.deleteNote = this.props.deleteNote(this.props.id);
    this.state={
      isMouseInside: false
    };
  }


  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  }
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  }


  render(){
    return(
      <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <ListItem >
          <Checkbox
          checked={this.props.checked}
          onClick={this.props.checkboxOnClick(this.props.checked, this.props.id)}
                />
          <TextField
            onKeyPress={(e)=>this.props.handleItemKeypress(e, this.props.id)}
            onChange={(e)=>this.props.updateItem(e, this.props.id)}
            value={this.props.content}
          />
          <ListItemSecondaryAction>
             {this.state.isMouseInside ? <IconButton aria-label="Delete"
                                             onClick={this.deleteNote}
                                            >
               <DeleteIcon/>
             </IconButton> : null}

          </ListItemSecondaryAction>
        </ListItem>
      </div>

    );
  }

}

export default Task
