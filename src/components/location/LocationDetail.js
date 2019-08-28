import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
// import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      name: "",
      address: "",
      phoneNumber: "",
      loadingStatus: true
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from APIManager and hang on to the data; put it into state
    const locationRoute = "locations"
    APIManager.get(this.props.locationId, locationRoute)
    .then((location) => {
      this.setState({
        name: location.name,
        address: location.address,
        phoneNumber: location.phoneNumber,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    this.setState({ loadingStatus: true })
    const locationRoute = "locations"
    APIManager.delete(this.props.locationId, locationRoute)
      .then(() => this.props.history.push("/locations"))
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <address>Address: {this.state.address}</address>
            <p>Phone Number: {this.state.phoneNumber}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default LocationDetail;