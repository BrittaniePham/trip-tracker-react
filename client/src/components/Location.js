import React from 'react';
import axios from 'axios';
import Address from './Address';

class Location extends React.Component {
  render() {
    return (
      <div>
        <h3>Location: {this.props.location.name}</h3>
        <Address location_id={this.props.location.id}/>
        <hr/>
      </div>
    )
  }
}

export default Location;