import React, { Component } from 'react'
import axios from 'axios'

export default class TableRow extends Component {
  onDelete = () => this.props.deleteRow(this.props.obj.id)

  render() {
    return (
      <tr>
        <td> {this.props.obj.first_name } </td>
        <td> {this.props.obj.last_name } </td>
        <td> <button className="btn btn-primary"> Edit </button> </td>
        <td> <button className="btn btn-danger" onClick={this.onDelete}> Delete </button></td>
      </tr>
    );
  }
}
