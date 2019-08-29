import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import APIManager from '../../modules/APIManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

    componentDidMount() {
        console.log("LOCATION LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        APIManager.getAll("locations")
            .then((locations) => {
                this.setState({
                    locations: locations
                })
            })
    }

    deleteLocation = id => {
        APIManager.delete(id, "locations")
            .then(() => {
                APIManager.getAll("locations")
                    .then((newLocations) => {
                        this.setState({
                            locations: newLocations
                        })
                    })
            })
    }

    render() {
        console.log("LOCATION LIST: Render");

        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/locations/new") }}>
                        Add Location</button>
                </section>
                <div className="container-cards">
                    {this.state.locations.map(location => <LocationCard
                        // When I tried to pass props at the bottom of this section, the locations became undefined. Because we had a property name called "location," it was clashing with "location" that gets passed down from {...this.props}
                        key={location.id}
                        theLocation={location}
                        deleteLocation={this.deleteLocation}
                        {...this.props}
                    />)}
                </div>
            </>
        )
    }
}

export default LocationList