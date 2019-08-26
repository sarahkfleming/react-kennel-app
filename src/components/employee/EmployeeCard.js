import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-employeename">{this.props.employee.name}</span></h3>
          <p>Department: {this.props.employee.department}</p>
          <p>Phone Number: {this.props.employee.phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;