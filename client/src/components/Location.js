import React from 'react';
import axios from 'axios';
import Address from './Address';

class Location extends React.Component {

  // deleteLocation = (id) => {
  //   const { location: {trip_id}, resetLocations } = this.props
  //   axios.delete(`/api/trips/${trip_id}/locations/${id}`)
  //     .then( res => {
  //       this.resetLocations(id)
  //     })
  //     .catch( err => {
  //       console.log(err)
  //     })
  // }

  render() {
    const { name, id } = this.props.location
    return (
      <div>
        <h3>Location: { name }</h3>
        <Address location_id={ id }/>
        {/* <button onClick={() => this.deleteLocation(id)}>delete</button> */}
      </div>
    )
  }
}

export default Location;