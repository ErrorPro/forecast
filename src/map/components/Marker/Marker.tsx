import React, { useEffect, useRef } from 'react';
import { marker, icon } from 'leaflet';

import './index.css';

const icons = {
  rain: icon({
    iconUrl: 'rainy.png',
    iconSize: [38, 95],
    popupAnchor: [0, -30],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
    className: 'rainy_icon',
  }),
  thunderstorm: icon({
    iconUrl: 'rainy.png',
    iconSize: [38, 95],
    popupAnchor: [0, -30],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
    className: 'rainy_icon',
  }),
  mild: icon({
    iconUrl: 'sunny.png',
    popupAnchor: [10, -30],
    className: 'rainy_icon',
  }),
  heat: icon({
    iconUrl: 'sunny.png',
    popupAnchor: [10, -30],
    className: 'rainy_icon',
  }),
  wind: icon({
    iconUrl: 'wind.png',
    popupAnchor: [10, -30],
    className: 'rainy_icon',
  }),
  cold: icon({
    iconUrl: 'cold.png',
    popupAnchor: [10, -30],
    className: 'cold_icon',
  }),
};
export default ({
  location: { Key, latLng, forecast, ticketPriceRange },
  mapInstance,
}: any) => {
  const m = useRef(null);

  useEffect(() => {
    m.current = marker(latLng).addTo(mapInstance);

    m.current.bindPopup('Forecast & price data is being loaded...').openPopup();
  }, [latLng, mapInstance]);

  useEffect(() => {
    let template = ``;

    if (forecast) {
      template += `<span>Forecast: ${forecast.Text}</span><br />`;

      const icon = icons[forecast.Category];

      if (icon) {
        m.current.setIcon(icon);
      }
    } else {
      template += '<span>Forecast is being loaded...</span><br />';
    }

    if (ticketPriceRange) {
      template += `<span>Tickets price range is ${ticketPriceRange.join(
        '-'
      )}</span>`;
    } else {
      template += '<span>Ticket info is being loaded...</span>';
    }

    m.current.setPopupContent(template);
  }, [forecast, ticketPriceRange]);

  return <div key={Key} />;
};
