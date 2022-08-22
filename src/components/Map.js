import maplibregl from "maplibre-gl";
import { useEffect } from "react";
import { useRefCallback } from "../hooks/useRefCallback";


function Map() {
    const [containerRef, setContainerRef] = useRefCallback();

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
        <>
            <div ref={setContainerRef} />
        </>
    )
}

export default Map;