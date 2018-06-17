import React from 'react';
import Address from './Address';

class Location extends React.Component {

  render() {
    const { name, id } = this.props.location
    return (
      <div>
        <h3>Location: { name }</h3>
        <Address location_id={ id }/>
      </div>
    )
  }
}

export default Location;