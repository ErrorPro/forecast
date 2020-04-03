import React from 'react';
// @ts-ignore

import './index.css';

export default ({ locationAutocomplete, ...props }: any) => (
  <input onChange={e => locationAutocomplete(e.target.value)} {...props} />
);
