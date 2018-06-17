import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TripForm from './TripForm'
import {Button} from 'semantic-ui-react';

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

  resetTrips = (id) => {
    const { trips } = this.state
    this.setState({
      trips: trips.filter( t => t.id !== id )
    })
  }

  deleteTrip = (id) => {
    axios.delete(`/api/trips/${id}`)
      .then( res => {
        this.resetTrips(id)
        debugger
      })
      .catch( err => {
        console.log(err)
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
            <Link to={`/trips/${t.id}`}>{t.title} </Link>
            <button onClick={() => this.deleteTrip(t.id)}>Delete</button>
          </li>
        )}
      </ul>
    )
  }
}

export default Trips;