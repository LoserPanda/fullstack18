import React, { Component } from 'react';
import Person from './components/Person';
import FilterPersons from './components/FilterPersons';
import personService from './services/persons';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            filterPersons: ''
        }

    }

    componentDidMount() {
        personService
            .getAll()
            .then(persons => {
                this.setState({ persons });
            })
            .catch(error => {
                console.log('Epic fail while fetching data');
            });
    }


    addPerson = (event) => {
        event.preventDefault();
        const personObject = {
            name: this.state.newName,
            number: this.state.newNumber
        }

        var check = true;
        this.state.persons.forEach((item, index, array) => {
            if (personObject.name === item.name) {
                check = false;
            }
        });

        if (check) {
            console.log('a new person added');
            personService
                .create(personObject)
                .then(response => {
                    this.setState({
                        persons: this.state.persons.concat(response),
                        newName: '',
                        newNumber: ''
                    });
                })
        } else {
            console.log('person already exists!');
            this.setState({
                newName: '',
                newNumber: ''
            });
        }

    }

    deletePerson = (id) => {
        const result = window.confirm("Postetaanko henkilö " + id + "?")
        if (result) {
            personService
                .remove(id)
                .then(response => {
                    const persons = response.data.filter(resp => resp.name !== id);
                    this.setState({ persons });
                })
        }
    }

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value });
    }

    handleNumberChange = (event) => {
        this.setState({ newNumber: event.target.value });
    }

    handleFilterChange = (event) => {
        this.setState({ filterPersons: event.target.value });
    }

    render() {
        const personsToShow =
            this.state.filterPersons === '' ?
                this.state.persons :
                this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filterPersons.toLowerCase()) || person.number.toLowerCase().includes(this.state.filterPersons.toLowerCase()))

        return (
            <div>
                <h1>Puhelinluettelo</h1>
                <FilterPersons filterPersons={this.state.filterPersons} handleFilterChange={this.handleFilterChange} />
                <h2>Lisää uusi</h2>
                <form onSubmit={this.addPerson} >
                    <div>
                        nimi: <input
                            value={this.state.newName}
                            onChange={this.handleNameChange}
                        />
                    </div>
                    <div>
                        numero: <input
                            value={this.state.newNumber}
                            onChange={this.handleNumberChange}
                        />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <ul id="persons">
                    {personsToShow.map(person => <Person deletePerson={this.deletePerson} key={person.name} id={person.id} name={person.name} number={person.number} />)}
                </ul>
            </div>
        )
    }
}

export default App;