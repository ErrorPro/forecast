import React, { ReactChild } from 'react';

import SearchInput from 'src/input/components/SearchInput';
import { Coordinates } from 'src/map/types';

import './index.css';

type Layout = {
  children: ReactChild;
  setCenter?: (coords: Coordinates) => void;
};

export default ({ children, setCenter }: Layout) => (
  <div className="layout_container">
    <div>
      <SearchInput
        style={{ width: '200px' }}
        onPlaceSelected={(a: any) => console.log(a)}
      />
    </div>
    <div>{children}</div>
  </div>
);
