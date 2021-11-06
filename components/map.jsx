import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
  return (
    <MapContainer center={[62.47263055642655, 6.140949994893921]} zoom={13} scrollWheelZoom={false} style={{height: "100vh", width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="http://www.kartverket.no/">Kartverket</a>'
        url="http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=kartdata3&zoom={z}&x={x}&y={y}"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map