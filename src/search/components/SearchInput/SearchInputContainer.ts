import { connect } from 'react-redux';

import { locationAutocomplete } from 'src/search/redux/actions';

import SearchInput from './SearchInput';

export default connect(
  null,
  {
    locationAutocomplete,
  }
)(SearchInput);
