import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-locationname">East Nashville - Gallatin</span></h3>
          <address>2059 Gallatin Road</address>
        </div>
      </div>
    );
  }
}

export default LocationCard;