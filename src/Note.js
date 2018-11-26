import React, { Component } from 'react';
import Item from './Item'

class Note extends Component {

  render(){
    return(
      <div>
        <div class="card blue-grey darken-1">
         <div class="card-content white-text">
          <span class="card-title">
            {this.props.date.getMonth()}/
            {this.props.date.getDate()}/
            {this.props.date.getFullYear()}
          </span>
          <form action="#" autocomplete="off">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
          </form>
          <div class="card-action">
            <a class="waves-effect waves-light btn">Mark All as Complete</a>
          </div>
        </div>
      </div>
    </div>

    );
  }

}

export default Note
