import React, { Component } from 'react'
import dog from "./DogIcon.svg"
import "./AnimalList.css"
import { Link } from "react-router-dom";

export default class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <img src={dog} className="icon--dog" alt="Doggo" />
                                <h5>{animal.name}</h5>
                                <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                <button
                                    onClick={() => this.props.deleteAnimal(animal.id,"animals")}
                                    className="card-link">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}

