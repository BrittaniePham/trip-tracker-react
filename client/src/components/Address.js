import React from 'react';
import axios from 'axios';

class Address extends React.Component {
  state = { address: {} }

  componentDidMount() {
    axios.get(`/api/locations/${this.props.location_id}/addresses`)
      .then( res => {
        this.setState({ address: res.data })
      })
  }

  render() {
    const { city, state, street_name, zip } = this.state.address
    return (
      <div>
        <p>{street_name}</p>
        <p>{city} {state} {zip} </p>
      </div>
    )
  }
}

export default Address;
