import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TripForm from './TripForm'

class Trips extends React.Component {
  state = { trips: [] }

  componentDidMount() {
    axios.get('/api/trips')
      .then( res => this.setState({ trips: res.data }) )
  }

  submit = (trip) => {
    const { trips } = this.state
    axios.post(`/api/trips`, { trip })
      .then( res => {
        this.setState({
          trips: [...trips, res.data],
        })
      })
      .catch( e => { 
        console.log(e)
      })
  }

  render() {
    const { trips } = this.state;
    return(
      <ul>
        <h2>Trips</h2>
        <TripForm submit={this.submit}/>
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