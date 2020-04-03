import { API } from 'src/api/constants';
import { urlInterpolate } from 'src/utils';

/*
Set of api action create helpers
Similar to GRAPHQL set of action creators
*/

const URL_BASE = process.env.API_URL || '';

export const createApiAction = (config, TYPES) => {
  const {
    url,
    query,
    params,
    body,
    method = 'GET',
    redirect,
    headers,
  } = config;

  return {
    url: `${URL_BASE}${urlInterpolate(url, query || {}, params || {})}`,
    query,
    params,
    body,
    method: method.toUpperCase(),
    successRedirect: redirect,
    type: API,
    types: TYPES,
    headers,
  };
};

export const createRequestAction = apiAction => ({
  ...apiAction,
  type: apiAction.types.REQUEST,
});

export const createSuccessAction = (apiAction, body) => ({
  ...apiAction,
  data: body,
  redirect: apiAction.successRedirect,
  type: apiAction.types.SUCCESS,
});

export const createFailureAction = (apiAction, error, description) => ({
  ...apiAction,
  redirect: null,
  error,
  description,
  type: apiAction.types.FAILURE,
});

export const createAsyncActionRequestTypes = base =>
  ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((res, type) => {
    res[type] = `${base}_${type}`;
    return res;
  }, {});
