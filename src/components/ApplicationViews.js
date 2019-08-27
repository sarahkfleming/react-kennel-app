import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import LocationForm from './location/LocationForm'
import EmployeeList from './employee/EmployeeList'
import EmployeeForm from './employee/EmployeeForm'
import OwnerList from './owner/OwnerList'
import OwnerForm from './owner/OwnerForm'
import Login from './auth/Login'


class ApplicationViews extends Component {

  // Check if credentials are in session storage
  //returns true/false
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return this.isAuthenticated()
            ? <Home />
            : <Redirect to="/login" />
        }} />
        <Route path="/login" component={Login} />
        <Route exact path="/animals" render={props => {
          return this.isAuthenticated()
            ? <AnimalList {...props} />
            : <Redirect to="/login" />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route exact path="/locations" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the animalId to the LocationDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
        <Route exact path="/employees" render={(props) => {
          if (this.isAuthenticated()) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        <Route exact path="/owners" render={(props) => {
          if (this.isAuthenticated()) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews