import React, { useState } from 'react';

import './index.css';

export default ({
  locationAutocomplete,
  searchResults,
  addMarker,
  preventDefault,
  onLocationSelect = addMarker,
  buttonLabel = 'Search',
  ...props
}: any) => {
  const [val, setVal] = useState('');
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      if (searchResults?.length) {
        onLocationSelect(searchResults[0])
      } else {
        locationAutocomplete(val)
      }
    }
  }

  return (
    <div className="search_input_container">
      <div>
        <input onChange={e => setVal(e.target.value)} onKeyUp={handleKeyUp} {...props} />
        {searchResults ? (
          <div className="search_result_container">
            {searchResults.length ?
              searchResults.map(e => (
                <div key={e.Key} onClick={() => onLocationSelect(e)}>{e.LocalizedName} {e.Country?.LocalizedName} {e.AdministrativeArea?.LocalizedName}</div>
              )) : <div>No items found</div>}
          </div>
        ) : null}
      </div>
      <button className="search_input_button" onClick={() => locationAutocomplete(val)}>{buttonLabel}</button>
    </div>
  );
};
