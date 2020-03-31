import React from 'react';
import { Provider } from 'react-redux';

import Map from 'src/map/components/Map';
import Layout from 'src/layout/components/Layout';
import store from 'src/store';

// This should be done via saga but for now we leave it

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Map />
      </Layout>
    </Provider>
  );
}

export default App;
