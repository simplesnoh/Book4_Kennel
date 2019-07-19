import React, { Component } from "react"
import "./Animals.css"
import dog from "./DogIcon.svg"


export default class AnimalDetails extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="animal">
                <div key={ this.props.animal.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ dog } className="icon--dog" alt="A Dog" />
                            { this.props.animal.name }
                        </h4>
                        <h6 className="card-title">{ this.props.animal.breed }</h6>
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.deleteAnimal(this.props.animal.id, "animals")
                                    )
                                }
                            }
                            disabled={ this.state.saveDisabled }
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}