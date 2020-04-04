import React, { ReactChild, useState } from 'react';

import SearchInput from 'src/search/components/SearchInput';
import { Coordinates } from 'src/map/types';

import './index.css';

type Layout = {
  children: ReactChild;
  setCenter?: (coords: Coordinates) => void;
  resetSearch?: () => void;
};

export default ({ children, setCenter, resetSearch }: Layout) => {
  // 0 - my location form
  // 1 - destination form
  const [step, setStep] = useState(0);

  return (
    <div className="layout_container">
      {step ? (
        <div className="input_container">
          <div className="input_container_content">
            <span className="label">I want to go</span>
            <SearchInput
              key="destination"
              style={{ width: '200px' }}
              placeholder="to"
              buttonLabel="Go"
              className="search_input"
            />
          </div>
        </div>
      ) : (
        <div className="input_container">
          <div className="input_container_content">
            <span className="label">I am in</span>
            <SearchInput
              key="departure"
              style={{ width: '200px' }}
              placeholder="city"
              className="search_input"
              onLocationSelect={l => (resetSearch(), setCenter(l), setStep(1))}
            />
          </div>
        </div>
      )}
      <div className="map_container">{children}</div>
    </div>
  );
};
