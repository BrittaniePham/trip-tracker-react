import React, { Component } from 'react';

class TripForm extends Component {
  defaultValue = { title: '' }
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
    const { title } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          placeholder="Add a Trip"
          value={title}
          onChange={this.handleChange}
          required
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default TripForm;