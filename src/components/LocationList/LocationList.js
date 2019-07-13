import React, { Component } from "react";

// PRactice Book 1
// Right now, the kennel location information is JSX inside the Kennel component. 
// The business wants to expand and open a new location. Your job is to make a new 
// component named LocationList, and put the names and addresses of each location 
// in that component's JSX.


export default class LocationList extends Component {
  render() {
    return (
        <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        {location.name}
                        {location.address}
                    </div>
                )
            }
            </section>
    );
  }
}
