import React, { Component } from 'react';
import Item from './Item'

class Note extends Component {
  
  handleKeyPress=(event) => {
    if(event.key === 'Enter'){
      console.log(event.target.id);
    }
  }

  componentDidUpdate(prevProps) {
    // Need to compare getTime otherwise always evaluates to True
    if (this.props.date.getTime() !== prevProps.date.getTime()) {
      console.log(this.props.date);
    }
  }

  render(){
    const notes = [1, 2, 3, 4, 5];
    const listItems = notes.map((note) =>
        <Item id={note} handleKeyPress={this.handleKeyPress} key={note.toString()}/>
    );
    return(
      <div>
        <div className="card blue-grey darken-1">
         <div className="card-content white-text">
          <span className="card-title">
            {this.props.date.getMonth()}/
            {this.props.date.getDate()}/
            {this.props.date.getFullYear()}
          </span>
          <form action="#" autoComplete="off">
                {listItems}
          </form>
          <div className="card-action">
            <a className="waves-effect waves-light btn">Mark All as Complete</a>
          </div>
        </div>
      </div>
    </div>

    );
  }

}

export default Note
