import { connect } from 'react-redux';

import {
  locationAutocomplete,
  getLocationData,
} from 'src/search/redux/actions';

import SearchInput from './SearchInput';

export default connect(
  state => ({
    searchResults: state.search.data,
  }),
  {
    locationAutocomplete,
    addMarker: getLocationData,
  }
)(SearchInput);
