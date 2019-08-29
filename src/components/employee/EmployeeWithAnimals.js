import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import AnimalCard from '../animal/AnimalCard'

class EmployeeWithAnimals extends Component {
  state = {
    employee: {},
    animals: []
  }

  componentDidMount() {
    //got here now make call to get employee with animal
    APIManager.getAllEmbeddingOther(this.props.match.params.employeeId, "employees", "animals")
      .then((APIResult) => {
        this.setState({
          employee: APIResult,
          animals: APIResult.animals,
        })
        console.log(APIResult)
      })
  }

  render() {
    return (
      <div className="card">
        <p>Employee: {this.state.employee.name}</p>
        <p>Department: {this.state.employee.department}</p>
        {this.state.animals.map(animal =>
          <AnimalCard
            key={animal.id}
            animal={animal}
            {...this.props}
          />
        )}
      </div>
    )
  }
}

export default EmployeeWithAnimals;