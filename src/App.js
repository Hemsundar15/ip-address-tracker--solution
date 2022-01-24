import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const App = () => {
  //https://geo.ipify.org/api/v2/country?apiKey=at_u9lcvADCfl7HOZnZ7zky101jS4FDZ&ipAddress=8.8.8.8

  return (
    <div>
    	<h1>Hem</h1>
      	<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  			<TileLayer
    		attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  			/>
  			<Marker position={[51.505, -0.09]}>
    			<Popup>
      			A pretty CSS3 popup. <br /> Easily customizable.
    			</Popup>
  			</Marker>
		</MapContainer>
    </div>
  )
}

export default App;
