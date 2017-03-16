import React, {Component} from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    })
  }

  render() {
    // creates a reference to the div called map
    // as this.refs.map
    return (
      <div ref="map"/>
    );
  }
}

export default GoogleMap;