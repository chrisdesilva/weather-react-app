import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import WeatherAPI from './components/WeatherAPI';
import './App.css'

class App extends Component {

  render() {
    return (
      <Container>
        <WeatherAPI />
      </Container>
    );
  }
}

export default App;
