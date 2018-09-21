import React, { Component } from 'react';
import Person from './components/Person';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { name: 'Jukka Pekkanen' }
            ],
            newName: ''
        }
    }

    addPerson = (event) => {
        event.preventDefault();
        const personObject = {
            name: this.state.newName
        }

        var check = true;
        this.state.persons.forEach((item, index, array) => {
            if (personObject.name === item.name) {
                check = false;
            }
        });

        if (check) {
            console.log('a new person added');
            const persons = this.state.persons.concat(personObject);
            this.setState({
                persons,
                newName: ''
            });
        } else {
            console.log('person already exists!');
            this.setState({
                newName: ''
            });
        }

    }

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value });
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.addPerson} >
                    <div>
                        nimi: <input
                            value={this.state.newName}
                            onChange={this.handleNameChange}
                        />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <ul id="persons">
                    {this.state.persons.map(person => <Person key={person.name} name={person.name} />)}
                </ul>
            </div>
        )
    }
}

export default App;