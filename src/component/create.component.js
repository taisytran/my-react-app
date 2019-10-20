import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
	onSubmit = (e) => {
		e.preventDefault();
		const fData = new FormData(e.target)
		// FIXME: try to use FormData instead
		// const config = { headers: { 'Content-Type': 'multipart/form-data' } };
		axios.post('http://localhost:3004/users', {
			first_name: fData.get("first_name"),
			last_name: fData.get("last_name"),
		}).then((res) => console.log(res))
	}

	render() {
		return (
			<div>
				<h3>Add new person</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Add First Name:  </label>
						<input type="text"  name="first_name" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Add Last Name:  </label>
						<input type="text" name="last_name" className="form-control"/>
					</div>
					<div className="form-group">
						<input type="submit" className="btn btn-primary" value="Register info" />
					</div>
				</form>
			</div>
		)
	}
}
