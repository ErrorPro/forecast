import queryString from 'query-string';

export const urlInterpolate = (urlTemplate, query, params) => {
  const interpolatedUrl = urlTemplate.replace(
    /:([\w\d-]+)/g,
    (sustr, match) => params[match] || ''
  );

  if (Object.keys(query).length > 0) {
    return `${interpolatedUrl}?${queryString.stringify(query)}`;
  }
  return interpolatedUrl;
};

export const createReducer = (initialState, fnMap) => (
  state,
  action,
  ...rest
) => {
  const { type } = action;
  const handler = fnMap[type];
  const newState = state || initialState;

  return handler ? handler(newState, action, ...rest) : newState;
};
