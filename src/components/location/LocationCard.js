import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-locationname">East Nashville - Gallatin</span></h3>
          <address>2059 Gallatin Road</address>
          <p>Phone Number: 615-555-4444</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;