import React, { Component } from 'react';
import axios from 'axios'

export default class Edit extends Component {
	constructor(props) {
		super(props)

		this.state = {
			first_name: '',
			last_name: ''
		}
	}

	handleInputChange = (e) => {
		const { name, value } = e.target
		this.setState({...this.state, [name]: value})
	}

	componentDidMount() {
		axios.get('http://localhost:3004/users/' + this.props.match.params.id)
			.then(res => this.setState({
				first_name: res.data.first_name,
				last_name: res.data.last_name
			}))
			.catch(err => console.log(err))
	}

	onSubmit = (e) => {
		const fData = new FormData(e.target)

		axios.put('http://localhost:3004/users/'+this.props.match.params.id, {
			first_name: fData.get('first_name'),
			last_name: fData.get('last_name'),
		})
			.then(res => console.log(res.data));

		// FIXME: re-render component when using history push
		// this.props.history.push('/index');
	}

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name:  </label>
            <input
              type="text"
              name="first_name"
              className="form-control"
              value={this.state.first_name}
							onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name: </label>
            <input type="text"
              name="last_name"
              className="form-control"
              value={this.state.last_name}
							onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input type="submit"
              value="Update"
              className="btn btn-primary"/>
            </div>
          </form>
        </div>
    )
  }
}
