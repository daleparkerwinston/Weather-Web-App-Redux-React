import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp * 9 / 5 - 459.67);
    const winds = cityData.list.map(weather => weather.wind.speed * (3600 / 1609.344));
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lng={lon} lat={lat}/>{name}</td>
        <td><Chart data={temps} color="green" units="&#8457;"/></td>
        <td><Chart data={winds} color="black" units="MPH"/></td>
        <td><Chart data={humidities} color="blue" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (&#8457;)</th>
          <th>Winds (MPH)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather}
}

export default connect(mapStateToProps)(WeatherList);