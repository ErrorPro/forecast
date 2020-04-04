import { API } from 'src/api/constants';

import {
  createRequestAction,
  createSuccessAction,
  createFailureAction,
} from 'src/api';

const api = async (store, { headers, ...action }) => {
  store.dispatch(createRequestAction(action));

  let reqBody;

  if (action.body instanceof FormData) {
    reqBody = action.body;
  } else {
    reqBody = action.body ? JSON.stringify(action.body) : null;
  }

  try {
    const result = await fetch(action.url, {
      method: action.method,
      body: reqBody,
      headers,
    });

    const body = await result.json();

    if (result.ok) {
      store.dispatch(createSuccessAction(action, body));
      return body;
    }

    const statusBody = { ...body, status: result.status };

    store.dispatch(createFailureAction(action, statusBody));

    return statusBody;
  } catch (e) {
    store.dispatch(createFailureAction(action));
    console.log(e);

    return false;
  }
};

export default store => next => action => {
  if (action.type !== API) return next(action);

  return api(store, action);
};
