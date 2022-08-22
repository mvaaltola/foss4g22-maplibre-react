import { Layer } from './components/Layer';
import Map from './components/Map'

function App() {
  return (
    <Map>
      <Layer
        id="helloworldlayer"
        typeSource="raster"
        type="raster"
        tiles={["https://tile.openstreetmap.org/{z}/{x}/{y}.png"]}
        tileSize={256}
        sourceLayer="default"
      />
    </Map>
  );
}

export default App;
