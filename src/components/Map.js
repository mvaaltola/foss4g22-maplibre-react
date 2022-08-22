import maplibregl from "maplibre-gl";
import { Children, cloneElement, useEffect } from "react";
import { useRefCallback } from "../hooks/useRefCallback";
import "maplibre-gl/dist/maplibre-gl.css"

const MapInject = (children, map) =>
    Children.map(children, (child) => cloneElement(child, { map }))

const Map = ({ children }) => {
    const [containerRef, setContainerRef] = useRefCallback();
    const [mapRef, setMapRef] = useRefCallback();

    useEffect(() => {
        if (containerRef) {
            const map = new maplibregl.Map({
                container: containerRef, // container id
                style: 'https://demotiles.maplibre.org/style.json', // style URL
                center: [0, 0], // starting position [lng, lat]
                zoom: 1 // starting zoom
            });
        }
    }, [containerRef]);

    return (
        <div style={{height: "100vh"}} ref={setContainerRef}>
            {MapInject(children, mapRef)}
        </div>
    )
}

export default Map;