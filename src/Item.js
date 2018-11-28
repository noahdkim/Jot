import React, { Component } from 'react';

class Item extends Component {
  
  render(){
    return(
      <label>
      <div className="input-field inline">
        <input type="checkbox" className="filled-in"/>
        <span>
          <input placeholder="Placeholder"
                id={this.props.id}
                type="text"
                onKeyPress={this.props.handleKeyPress}
                />
          </span>
      </div>
      </label>
    );
  }

}

export default Item
