import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TripForm from './TripForm'
import {Button} from 'semantic-ui-react';

class Trips extends React.Component {
  state = { editing: false, trips: [] }

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
      })
      .catch( err => {
        console.log(err)
      })
  }

  editTrip = (id) => {
    this.setState({ editing: !this.state.editing })
    axios.put(`/api/trips/${id}`)
      .then( res => {
        this.setState({ title: res.data.title })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    const { trips } = this.state;
    // if(this.state.editing)
    //   return(
    //     <div>
    //       <input 
    //         type='text' 
    //         value={this.state.title} 
    //         onChange={this.handleChange} 
    //       />
    //       <button onClick={this.editTrip}>Save</button>
    //     </div>
    //     )
    // else
      return(
        <ul>
          <h2>Trips</h2>
          <TripForm submit={this.submit}/>
          { trips.map ( t =>
            <li key={t.id}>
              <Link to={`/trips/${t.id}`}>{t.title} </Link>
              <button onClick={() => this.deleteTrip(t.id)}>Delete</button>
              {/* <button onClick={() => this.editTrip(t.id)}>Edit</button> */}
            </li>
          )}
        </ul>
      )
  }
}

export default Trips;