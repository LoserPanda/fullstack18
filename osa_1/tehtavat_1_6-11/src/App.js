import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Statistics from './components/Statistics';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  keskiarvo = () => {
    if (this.state.hyva === 0 && this.state.neutraali === 0 && this.state.huono === 0) return 0;
    const summa = this.state.hyva + this.state.neutraali + this.state.huono;
    const ka = (this.state.hyva * 1 + this.state.neutraali * 0 + this.state.huono * -1) / summa;
    return ka.toFixed(1);
  }

  positiivisia = () => {
    if (this.state.hyva === 0 && this.state.neutraali === 0 && this.state.huono === 0) return '0.0 %';
    const summa = this.state.hyva + this.state.neutraali + this.state.huono;
    return (this.state.hyva / summa * 100).toFixed(1) + ' %';
  }

  render() {

    const handleClick = (tyyppi) => () => {
      if (tyyppi === 'hyva') {
        this.setState({ hyva: this.state.hyva + 1 })
      }
      if (tyyppi === 'neutraali') {
        this.setState({ neutraali: this.state.neutraali + 1 })
      }
      if (tyyppi === 'huono') {
        this.setState({ huono: this.state.huono + 1 })
      }
    }

    return (
      <div className="App">
        <h1>Anna palautetta</h1>
        <Button handleClick={handleClick('hyva')} teksti={'hyvä'} />
        <Button handleClick={handleClick('neutraali')} teksti={'neutraali'} />
        <Button handleClick={handleClick('huono')} teksti={'huono'} />
        <h1>Statistiikka</h1>
        {(this.state.hyva === 0 && this.state.neutraali === 0 && this.state.huono === 0)?
        (<p>ei yhtään palautetta annettu</p>):(<Statistics tila={this.state} keskiarvo={this.keskiarvo()} positiivisia={this.positiivisia()} />)
        }
      </div>
    );
  }
}

export default App;