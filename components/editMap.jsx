import { Map, TileLayer, FeatureGroup, Circle, MapContainer,layer } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw"

const editMap = () =>{
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
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: 400, width: "100%"}}>
         <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
  <FeatureGroup>
    <EditControl
      position='topright'
      edit={{edit:false}}
      onDrawStart={_onDrawStart}
      position="topleft"
      onEdited={_onEdited}
      onCreated={_onCreated}
      onDeleted={_onDeleted}
      draw={{
        rectangle: false
      }}
    />
    <Circle center={[51.51, -0.06]} radius={200} />
  </FeatureGroup>
  </MapContainer>



)};




export default editMap