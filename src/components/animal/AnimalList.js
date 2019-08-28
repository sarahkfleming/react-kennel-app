import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import APIManager from '../../modules/APIManager'

class AnimalList extends Component {
  //define what this component needs to render
  state = {
    animals: [],
  }

  componentDidMount() {
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from APIManager and hang on to that data; put it in state
    const animalRoute = "animals"
    APIManager.getAll(animalRoute)
      .then((animals) => {
        this.setState({
          animals: animals
        })
      })
  }
  // Wherever the state is that's holding a list of items is where you need to define actions that affect state, which is why deleteAnimal() is defined here instead of on AnimalCard
  deleteAnimal = id => {
    const animalRoute = "animals"
    APIManager.delete(id, animalRoute)
      .then(() => {
        APIManager.getAll(animalRoute)
          .then((newAnimals) => {
            this.setState({
              animals: newAnimals
            })
          })
      })
  }

  render() {
    console.log("ANIMAL LIST: Render");

    return (
      <>
        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/animals/new") }}>
            Admit Animal</button>
        </section>
        <div className="container-cards">
          {this.state.animals.map(animal =>
            <AnimalCard
              key={animal.id}
              animal={animal}
              deleteAnimal={this.deleteAnimal}
              {...this.props}
            />
          )}
        </div>
      </>
    )
  }
}

export default AnimalList