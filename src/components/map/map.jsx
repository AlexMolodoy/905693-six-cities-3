import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {offerShape, CityCoords, MAP_ICON_SIZE, ZOOM_VALUE} from '../../const.js';

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers} = this.props;
    const city = CityCoords.AMSTERDAM;
    const placesCoords = offers.map((offer) => offer.coords);

    const showAllMarkers = () => {
      placesCoords.map((coords) => {
        leaflet
          .marker(coords, {icon})
          .addTo(map);
      });
    };

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iiconSize: MAP_ICON_SIZE
    });
    const map = leaflet.map(`map`, {
      center: city,
      zoom: ZOOM_VALUE,
      zoomControl: false,
      marker: true
    });
    map.setView(city, ZOOM_VALUE);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    showAllMarkers();
  }

  render() {
    return (
      <div id="map" style={{width: `100%`, height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
};

export default Map;