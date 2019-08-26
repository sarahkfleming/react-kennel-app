import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-locationname">{this.props.location.name}</span></h3>
          <address>{this.props.location.address}</address>
          <p>Phone Number: {this.props.location.phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;