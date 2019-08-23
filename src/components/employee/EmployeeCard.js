import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-employeename">John Smith</span></h3>
          <p>Department: Dog Walking</p>
          <p>Phone Number: 615-555-4444</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;