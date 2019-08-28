import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import LocationForm from './location/LocationForm'
import LocationEditForm from './location/LocationEditForm'
import EmployeeList from './employee/EmployeeList'
import EmployeeForm from './employee/EmployeeForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import OwnerList from './owner/OwnerList'
import OwnerForm from './owner/OwnerForm'
import OwnerEditForm from './owner/OwnerEditForm'
import Login from './auth/Login'


class ApplicationViews extends Component {

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

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
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route path="/animals/:animalId(\d+)/edit" render={props => {
          return <AnimalEditForm {...props} />
        }} />
        <Route exact path="/locations" render={(props) => {
          return this.isAuthenticated()
            ? <LocationList {...props} />
            : <Redirect to="/login" />
        }} />
        <Route exact path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
        <Route
          path="/locations/:locationId(\d+)/edit" render={props => {
            return <LocationEditForm {...props} />
          }}
        />
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
        <Route
          path="/employees/:employeeId(\d+)/edit" render={props => {
            return <EmployeeEditForm {...props} />
          }}
        />
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
        <Route
          path="/owners/:ownerId(\d+)/edit" render={props => {
            return <OwnerEditForm {...props} />
          }}
        />
      </React.Fragment>
    )
  }
}

export default ApplicationViews