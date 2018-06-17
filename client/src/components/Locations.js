import React from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Location from './Location'

class Locations extends React.Component {
  state = { locations: [] }

  componentDidMount() {
    axios.get(`/api/trips/${this.props.id}/locations`)
      .then( res => this.setState({ locations: res.data }) )
  }

  resetLocations = (id) => {
    const { locations } = this.state
    const { location } = this.props
    this.setState({
      locations: locations.filter( l => l.id !== id )
    })
  }

  deleteLocation = (l) => {
    axios.delete(`/api/trips/${l.trip_id}/locations/${l.id}`)
      .then( res => {
        this.resetLocations(l.id)
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    const { locations } = this.state;
    return(
      <ul>
        { locations.map ( l =>
          <li key={l.id}>
            <Location location={l} />
            <button onClick={() => this.deleteLocation(l)}>Delete</button>
            <hr />
          </li>
        )}
      </ul>
    )
  }
}

export default Locations;