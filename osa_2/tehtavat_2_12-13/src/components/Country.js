import React, { Component } from 'react';

class Country extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>capital: {this.props.capital}</p>
                <p>population: {this.props.population}</p>
                <img src={this.props.flag} alt="flag" height={100} />
            </div>
        );
    }
}

export default Country;