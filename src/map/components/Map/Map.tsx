import React, { useRef, useEffect } from 'react';
import { map, tileLayer, Map } from 'leaflet';
import { Coordinates } from 'src/map/types';

type MapProps = {
  map: {
    center: Coordinates;
  };
};

export default ({ map: { center } }: MapProps) => {
  const domEl = useRef(null);
  let mapInstance = useRef<Map | null>(null);

  useEffect(() => {
    // @ts-ignore
    mapInstance.current = map('map');
    mapInstance.current.setView([51.505, -0.09], 13);

    tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          'pk.eyJ1Ijoia29yb2xldmVuIiwiYSI6ImNrOGdmZmVkMDAwdzMzbGxhbWc3OHdwMmUifQ.kQJmmOvCYrO4_l-jw8psZw',
      }
    ).addTo(mapInstance.current);
  }, [domEl]);

  useEffect(() => {
    if (mapInstance.current) mapInstance.current.setView(center, 13);
  }, [center]);

  return (
    <div id="map" ref={domEl} style={{ height: '500px', width: '500px' }} />
  );
};
