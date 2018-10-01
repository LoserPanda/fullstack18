import React, { Component } from 'react';
import axios from 'axios';
import Country from './components/Country';
import FilterCountries from './components/FilterCountries';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      filterCountries: ''
    }
  }

  componentDidMount() {
    const promise = axios.get('https://restcountries.eu/rest/v2/all');
    promise
      .then(response => {
        const countries = response.data;
        console.log(countries);
        this.setState({ countries });
      })
      .catch(error => {
        console.log('Epic fail while fetching data');
      });
  }

  handleFilterChange = (event) => {
    this.setState({ filterCountries: event.target.value });
  }

  render() {
    const countriesToShow =
      this.state.filterCountries === '' ?
        this.state.countries :
        this.state.countries.filter(country => country.name.toLowerCase().includes(this.state.filterCountries.toLowerCase()))

    console.log(this.state);
    return (
      <div className="App">
        <FilterCountries filterCountries={this.state.filterCountries} handleFilterChange={this.handleFilterChange} />
        {countriesToShow.length > 10 ?
          (<p>too many matches, specify another filter</p>) :
          countriesToShow.length === 1 ?
            (countriesToShow.map(country => <Country key={country.name} name={country.name} capital={country.capital} population={country.population} flag={country.flag} />)) :
            (countriesToShow.map(country => <div key={country.name}>{country.name}</div>))}
      </div>
    );
  }
}

export default App;
