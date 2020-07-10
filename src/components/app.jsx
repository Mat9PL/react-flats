import React, { Component } from 'react';
// import Flat from './flat';
import FlatList from './flat_list';
import flats from '../../data/flats';
import GoogleMapReact from 'google-map-react';

import SimpleMap from './map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={flats} />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
