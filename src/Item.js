import React, { Component } from 'react';

class Item extends Component {

  render(){
    return(
      <p>
        <label>
        <div class="input-field inline">
          <input type="checkbox" class="filled-in"/>
          <span><input placeholder="Placeholder" id="first_name" type="text"/></span>
        </div>
        </label>
      </p>
    );
  }

}

export default Item
