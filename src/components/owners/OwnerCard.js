import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-ownername">Rebecca George</span></h3>
          <p>Pet: Doodles</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;