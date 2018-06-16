import React from 'react';
import axios from 'axios';
import Locations from './Locations';

class Trip extends React.Component {
  state = { trip: {} }

  componentDidMount() {
    axios.get(`/api/trips/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ trip: res.data })
      })
  }

  render() {
    return (
      <div>
        <h1>Locations for a {this.state.trip.title} Trip</h1>
        <Locations id={this.props.match.params.id} />
      </div>
    )
  }
}

export default Trip;