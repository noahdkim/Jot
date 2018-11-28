import React, { Component } from 'react';
import Item from './Item'

class Note extends Component {
  state={
    notes: [],
  }
  handleKeyPress=(event) => {
    if(event.key === 'Enter'){
      console.log(event.target.id);
      var newNotes = this.state.notes;
      newNotes.push(newNotes.length);
      this.setState({
        notes:newNotes,
      })
      console.log(this.state.notes);
    }
  }

  componentDidUpdate(prevProps) {
    // Need to compare getTime otherwise always evaluates to True
    if (this.props.date.getTime() !== prevProps.date.getTime()) {
      console.log("componentDidUpdate prev:"+ prevProps.date);
      console.log("componentDidUpdate :" + this.props.date);
    }
  }

  componentDidMount(){
    console.log("componentDidMount: " + this.props.date);
    var newNotes = this.state.notes;
    newNotes.push(newNotes.length);
    this.setState({
      notes:newNotes,
    })
  }

  render(){
    console.log("this.state.notes: " + this.state.notes);
    const listItems = this.state.notes.map((note) =>
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
