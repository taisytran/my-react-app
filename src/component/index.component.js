import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './table-row'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
  }

  // work after render()
  componentDidMount() {
    axios.get('http://localhost:3004/users')
      .then(res => { this.setState({ users: res.data})})
      .catch(err => { console.log(err) })
  }

  // { this.state.users.map((item, index) => (
  //     <tr key={index}>
  //       <td>{item.first_name}</td>
  //       <td>{item.last_name}</td>
  //   </tr>
  //   ))
  // }
  //
  tRow() {
    return this.state.users.map((item, index) => {
      return <TableRow key={index} obj={item} deleteRow={this.deleteRow} /> ;
    });
  }

	// shoud use bind here to bind state to child
  deleteRow = (id) => {
    axios.delete('http://localhost:3004/users/'+ id)
      .then(res => {
        this.setState({ users: this.state.users.filter(e => e.id !== id) })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div>
        <h3 align="center">Business List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th> First Name</th>
              <th> Last Name</th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            { this.tRow() }
          </tbody>
        </table>
      </div>
    )
  }
}

