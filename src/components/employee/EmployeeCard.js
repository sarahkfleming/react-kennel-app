import React, { Component } from 'react';
import './Employee.css'

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-employeename">{this.props.employee.name}</span></h3>
          <p>Department: {this.props.employee.department}</p>
          <button type="button"
            onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/edit`) }}>Edit</button>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;