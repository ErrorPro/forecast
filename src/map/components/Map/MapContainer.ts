import { connect } from 'react-redux';
import { AppState } from 'src/store/types';

import Map from './Map';

export default connect((state: AppState) => state.map)(Map);
