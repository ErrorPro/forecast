import { connect } from 'react-redux';

import { setCenter } from 'src/map/redux/actions';
import { resetSearch } from 'src/search/redux/actions';

import Layout from './Layout';

export default connect(
  null,
  { setCenter, resetSearch }
)(Layout);
