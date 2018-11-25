import React, { Component } from 'react';

class Note extends Component {

  render(){
    return(
      <div>
        {this.props.date.getMonth()} <br/>
        {this.props.date.getDate()} <br/>
        {this.props.date.getFullYear()}
      </div>
    );
  }

}

export default Note
