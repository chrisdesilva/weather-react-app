import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';

const WeatherDisplay = props => (
  <Grid divided>
    <Grid.Row centered columns={2}>
      <Grid.Column>
        <Form onSubmit={props.getWeather}>
          <Form.Field>
            <label>Zip Code</label>
            <input type ="text" name="zipCode" placeholder="Enter your zip code"/>
          </Form.Field>
          <Button type="submit">Get Weather</Button>
        </Form>
      </Grid.Column>
      <Grid.Column>
        {props.zipCode && <h1>Weather around {props.name} </h1>}
        {props.temp && <p>Temperature: {props.temp}°F</p>}
        {props.conditions && <p>Conditions: {props.conditions}</p>}
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      {props.error && <p>{props.error}</p>}
    </Grid.Row>
  </Grid>
) 

export default WeatherDisplay;