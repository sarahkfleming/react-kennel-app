import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import APIManager from '../../modules/APIManager'

class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
    }

    componentDidMount() {
        console.log("OWNER LIST: ComponentDidMount");
        //getAll from APIManager and hang on to that data; put it in state
        APIManager.getAll("owners")
            .then((owners) => {
                this.setState({
                    owners: owners
                })
            })
    }

    deleteOwner = id => {
        APIManager.delete(id, "owners")
            .then(() => {
                APIManager.getAll("owners")
                    .then((newOwners) => {
                        this.setState({
                            owners: newOwners
                        })
                    })
            })
    }

    render() {
        console.log("OWNER LIST: Render");

        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/owners/new") }}>
                        Add Owner</button>
                </section>
                <div className="container-cards">
                    {this.state.owners.map(owner => <OwnerCard
                        key={owner.id}
                        owner={owner}
                        deleteOwner={this.deleteOwner}
                        {...this.props}
                    />)}
                </div>
            </>
        )
    }
}

export default OwnerList