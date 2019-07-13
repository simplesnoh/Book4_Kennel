//     __
//    {()}
// Code Producer

import React, { Component } from "react"
import EmployeeList from "./employees/EmployeeList"
import LocationList from "./LocationList/LocationList"
import AnimalList from "./Animals/AnimalList"
import "../index"


class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    //Book 2 practice: Create a new array in state in the Kennel component named animals. 
    // It will look just like the locations and employees arrays in state. 
    // Make sure each animal has an id property.

   animalsFromAPI = [
        { id: 1, name: "Rufus" },
        { id: 2, name: "Nebula" },
        { id: 3, name: "Titus" },
        { id: 4, name: "Elvis" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} />
            </article>
        )
    }
}

export default Kennel
  //      Sydney Noh
 //   <Software Developer/>