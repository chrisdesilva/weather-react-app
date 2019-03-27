import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';

class Weather extends Component {
  constructor(props) {
    super(props)
      this.state = {
        isLoaded: false,
        error: undefined,
        temp: undefined,
        name: undefined,
        zipCode: undefined,
        conditions: undefined
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const zipCode = e.target.elements.zipCode.value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&units=imperial&appid=3e511299402293065a188769c2d4e072`)
    const response = await api.json()
    try
    {
      this.setState({
        temp: response.list[0].main.temp.toFixed(0),
        name: response.city.name,
        conditions: response.list[0].weather[0].description,
        error: undefined,
        zipCode
      })
    } 
    catch 
    {
      this.setState({ error: 'Please enter a valid zip code' })
    }
    console.log(response)
  }
  render() {
    return (
      <WeatherDisplay 
        getWeather={this.getWeather}
        zipCode={this.state.zipCode}
        name={this.state.name}
        temp={this.state.temp}
        conditions={this.state.conditions}
        error={this.state.error}
      />
    )
  }
}

export default Weather