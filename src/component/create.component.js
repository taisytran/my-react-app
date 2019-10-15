import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  state = {
    id: null,
    first_name: '',
    last_name: '',
  }

  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      first_name: this.state.first_name,
      last_name: this.state.last_name
    }

    axios.post('localhost:3004/users', obj).then((res) => console.log(res))
  }

  render() {
    return (
      <div>
        <h3>Add new person</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add First Name:  </label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Add Last Name:  </label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Register info" />
          </div>
        </form>
      </div>
    )
  }
}
