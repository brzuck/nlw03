import Leaflet from 'leaflet';
import mapMarketImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarketImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

export default mapIcon;
