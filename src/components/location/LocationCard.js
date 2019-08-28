import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-locationname">{this.props.theLocation.name}</span></h3>
          <address>{this.props.theLocation.address}</address>
          <p>Phone Number: {this.props.theLocation.phoneNumber}</p>
          <Link to={`/locations/${this.props.theLocation.id}`}><button>Details</button></Link>
          <button type="button"
            onClick={() => { this.props.history.push(`/locations/${this.props.theLocation.id}/edit`) }}>Edit</button>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.theLocation.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;