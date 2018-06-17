import React from 'react';
import axios from 'axios';
import Location from './Location';
import LocationForm from './LocationForm';

class Locations extends React.Component {
  state = { locations: [] }

  componentDidMount() {
    axios.get(`/api/trips/${this.props.id}/locations`)
      .then( res => this.setState({ locations: res.data }) )
  }

  resetLocations = (id) => {
    const { locations } = this.state
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

  submit = ({ name, street_name, city, state, zip }) => {
    const location = { name }
    const address = { street_name, city, state, zip }
    const { locations } = this.state
    axios.post(`/api/trips/${this.props.id}/locations`, { location, address })
      .then( res => {
        this.setState({
          locations: [...locations, res.data],
        })
      })
      .catch( e => { 
        console.log(e)
      })
  }

  render() {
    const { locations } = this.state;
    return(
      <ul>
        <LocationForm submit={this.submit}/>
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