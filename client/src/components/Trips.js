import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Trips extends React.Component {
  state = { trips: [] }

  componentDidMount() {
    axios.get('/api/trips')
      .then( res => this.setState({ trips: res.data }) )
  }

  render() {
    const { trips } = this.state;
    return(
      <ul>
        <h2>Trips</h2>
        { trips.map ( t =>
          <li key={t.id}>
            <Link to={`/trips/${t.id}`}>{t.title}</Link>
          </li>
        )}
      </ul>
    )
  }
}

export default Trips;