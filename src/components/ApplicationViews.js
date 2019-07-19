import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './Animals/AnimalList'
import LocationList from './LocationList/LocationList'
import EmployeeList from './employees/EmployeeList'
import OwnerList from './owners/OwnerList'
import APIManager from "../modules/APIManager"
import AnimalDetails from './Animals/AnimalDetails'
import { withRouter } from 'react-router'


class ApplicationViews extends Component {
 
    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }


    deleteFromAPI = (id, resource) => {
        APIManager.deleteThis(id, resource)
        .then(() => APIManager.getAll(resource))
        .then((datas) =>  {
        this.props.history.push(`/${resource}`)
        this.setState({
            [resource]: datas
        })
    })
    }


    componentDidMount() {
        const newState = {}

        APIManager.getAll("animals").then(allAnimals => newState.animals = allAnimals)
        APIManager.getAll("owners").then(allOwners => newState.owners = allOwners)
        APIManager.getAll("locations").then(allLocations => newState.locations = allLocations)
        APIManager.getAll("employees").then(allEmployees => newState.employees = allEmployees)
        .then(() => this.setState(newState))
    }


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />

                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} deleteAnimal={ this.deleteFromAPI } />
                }} />

                <Route path="/animals/:animalsId(\d+)" render={(props) => {
                    let animal = this.state.animals.find(animals =>
                        animals.id === parseInt(props.match.params.animalsId)
                    )

                    if (!animal) {
                        animal = {id:404, name:"404", breed: "Dog not found"}
                    }

                    return <AnimalDetails animal={ animal }
                                deleteAnimal={ this.deleteFromAPI } />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} deleteEmployee={this.deleteFromAPI} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} deleteOwner={this.deleteFromAPI}/>
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)