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

  render() {
    const { locations } = this.state;
    return(
      <ul>
        { locations.map ( l =>
          <li key={l.id}>
            <Location location={l} />
          </li>
        )}
      </ul>
    )
  }
}

export default Locations;