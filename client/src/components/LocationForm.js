import React, { Component } from 'react';

class LocationForm extends Component {
  defaultValue = { name: '', street_name: '', city: '', state: '', zip:'' }
  state = { ...this.defaultValue }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submit(this.state)
    this.setState({...this.defaultValue})
  }

  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({ [name]: value })
  }

  render() {
    const { name, street_name, city, state, zip } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Add a Location"
          value={name}
          onChange={this.handleChange}
          required
        />
        <input
          name="street_name"
          placeholder="street name"
          value={street_name}
          onChange={this.handleChange}
          required
        />
        <input
          name="city"
          placeholder="city"
          value={city}
          onChange={this.handleChange}
          required
        />
        <input
          name="state"
          placeholder="state"
          value={state}
          onChange={this.handleChange}
          required
        />
        <input
          name="zip"
          placeholder="zip"
          value={zip}
          onChange={this.handleChange}
          required
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default LocationForm;