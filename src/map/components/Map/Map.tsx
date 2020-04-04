import React, { useRef, useEffect } from 'react';
import { map, tileLayer, Map, marker } from 'leaflet';
import { Coordinates } from 'src/map/types';
import Marker from 'src/map/components/Marker';

import './index.css';

type MapProps = {
  map: {
    center: {
      coords: Coordinates;
    };
  };
  list: [];
};

export default ({
  list,
  map: {
    center: { coords },
  },
}: MapProps) => {
  const domEl = useRef(null);
  let mapInstance = useRef<Map | null>(null);
  let centerMarker = useRef(null);

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
    if (mapInstance.current && coords) {
      if (!centerMarker.current) {
        centerMarker.current = marker(coords).addTo(mapInstance.current);
      } else {
        centerMarker.current.setLatLng(coords);
      }

      mapInstance.current.setView(coords, 7);

      centerMarker.current.bindPopup('You are currently here');
    }
  }, [coords]);

  useEffect(() => {
    if (list.length) {
      mapInstance.current.fitBounds(
        list.map((e: any) => e.latLng).concat(coords ? [coords] : [])
      );
    }
  }, [coords, list, list.length]);

  return (
    <div id="map" ref={domEl} className="map">
      {list.map((e: any, i) => (
        <Marker
          key={`${i}_${e.Key}`}
          location={e}
          mapInstance={mapInstance.current}
        />
      ))}
    </div>
  );
};
