import React, { Component } from 'react'


class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
            {
                this.props.animals.map(animals =>
                    <div key={animals.id}>
                        {animals.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default AnimalList