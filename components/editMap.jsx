import { Map, TileLayer, FeatureGroup, Circle, MapContainer,layer,useMapEvents,Marker,Popup } from 'react-leaflet';
import{ useState } from 'react';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { EditControl } from "react-leaflet-draw"




const editMap = () =>{


  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }


    const _onEdited = e => {
        let numEdited = 0;
        e.layers.eachLayer(layer => {
          numEdited += 1;
        });
        console.log(`_onEdited: edited ${numEdited} layers`, e);
    
        // this._onChange();
      };
    
      const _onCreated = e => {
        
        console.log(e)
        
        let type = e.layerType;
        let layer = e.layer;
        if (type === "marker") {
          // Do marker specific actions
          console.log("_onCreated: marker created", e);
        } else {
          console.log("_onCreated: something else created:", type, e);
        }
    
        console.log("Geojson", layer.toGeoJSON());
        console.log("coords", layer._latlng);
        // Do whatever else you need to. (save to db; etc)
    
      
      };

     const _editableFG = null;
      const _onFeatureGroupReady = (reactFGref) => {
        // populate the leaflet FeatureGroup with the geoJson layers
    
        let leafletGeoJSON = new L.GeoJSON(getGeoJson());
        let leafletFG = reactFGref;
    
        leafletGeoJSON.eachLayer((layer) => {
          leafletFG.addLayer(layer);
        });
    
        // store the ref for future access to content
    
        _editableFG = reactFGref;
      };
    
      const _onChange = () => {
        // this._editableFG contains the edited geometry, which can be manipulated through the leaflet API
    
        const { onChange } = this.props;
    
        if (!this._editableFG || !onChange) {
          return;
        }
    
        const geojsonData = this._editableFG.toGeoJSON();
        onChange(geojsonData);
      };
    
    
      const _onDeleted = e => {
        let numDeleted = 0;
        e.layers.eachLayer(layer => {
          numDeleted += 1;
        });
        console.log(`onDeleted: removed ${numDeleted} layers`, e);
    
        // this._onChange();
      };
    
      const _onMounted = drawControl => {
        console.log("_onMounted", drawControl);
      };
    
      const _onEditStart = e => {
        console.log("_onEditStart", e);
      };
    
      const _onEditStop = e => {
        console.log("_onEditStop", e);
      };
    
      const _onDeleteStart = e => {
        console.log("_onDeleteStart", e);
      };
    
      const _onDeleteStop = e => {
        console.log("_onDeleteStop", e);
      };
    
      const _onDrawStart = e => {
        console.log("_onDrawStart", e);
      };
    

    
    return (
    <MapContainer center={[62.47148106501107, 6.14661711328711]} zoom={13} style={{height: "100vh", width: "100%"}}>
         <TileLayer
          attribution='&copy; <a href="http://www.kartverket.no/">Kartverket</a>'
          url="http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=kartdata3&zoom={z}&x={x}&y={y}"
        />
   
  <FeatureGroup>
    <EditControl
      position='topright'
      
      onDrawStart={_onDrawStart}
      onEdited={_onEdited}
      onCreated={_onCreated}
      onDeleted={_onDeleted}
      draw={{
        rectangle: false
      }}
    />
 
  </FeatureGroup>

  {/* <LocationMarker/> */}
  </MapContainer>



)};




export default editMap