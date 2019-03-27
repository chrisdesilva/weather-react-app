import React from 'react';
import { Button, Form, Grid, Image, Message } from 'semantic-ui-react';
import '../App.css'

const WeatherDisplay = props => (
  <div>
    <h1 style={{textAlign: "center", marginTop: "2.5rem"}}>Weather Report</h1>
    <Grid divided stackable columns={2} style={{marginTop: "2.5rem"}}>
      <Grid.Column className="column">
        <Form error onSubmit={props.getWeather} >
          <Form.Field>
            <label>Zip Code</label>
            <Form.Input type ="text" name="zipCode" placeholder="Enter your zip code"/>
          </Form.Field>
          <Button primary type="submit">Get Weather</Button>
          {props.error &&
            <Message 
              error
              header="Invalid Zip Code"
              content="Please enter a valid zip code"
            />
          }
        </Form>
      </Grid.Column>
      <Grid.Column className="column">
        {props.zipCode && <p>Weather in the <strong>{props.name}</strong> area</p>}
        {props.temp && <p>Temperature: {props.temp}°F</p>}
        {props.humidity && <p>Humidity: {props.humidity}%</p>}
        {props.conditions && <p>Conditions: {props.conditions}</p>}
        {props.icon && <Image src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="Weather details icon"/>}
      </Grid.Column>
    </Grid>
  </div>

) 

export default WeatherDisplay;