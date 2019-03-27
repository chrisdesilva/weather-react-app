import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';

class Weather extends Component {
  constructor(props) {
    super(props)
      this.state = {
        isLoaded: false,
        error: undefined,
        temp: undefined,
        humidity: undefined,
        name: undefined,
        zipCode: undefined,
        icon: undefined,
        conditions: undefined
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const zipCode = e.target.elements.zipCode.value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=3e511299402293065a188769c2d4e072`)
    const response = await api.json()
    try
    {
      this.setState({
        temp: response.main.temp.toFixed(0),
        humidity: response.main.humidity,
        name: response.name,
        conditions: response.weather[0].description,
        icon: response.weather[0].icon,
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
        humidity={this.state.humidity}
        conditions={this.state.conditions}
        icon={this.state.icon}
        error={this.state.error}
      />
    )
  }
}

export default Weather