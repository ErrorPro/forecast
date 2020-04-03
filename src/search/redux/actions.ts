import { createApiAction, createAsyncActionRequestTypes } from 'src/api';

export const ACCWEATHER_AUTOCOMPLETE = createAsyncActionRequestTypes(
  'ACCWEATHER_AUTOCOMPLETE'
);

export const autocompleteQuery = q =>
  createApiAction(
    {
      url:
        'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=:t&q=:q',
      params: {
        t: 'JkaoQxB0mHuPcsN2sJpG9vaqRXu5ByRs',
        q,
      },
    },
    ACCWEATHER_AUTOCOMPLETE
  );

export const REQUEST_AUTOCOMPLETE_QUERY = 'REQUEST_AUTOCOMPLETE_QUERY';

export const locationAutocomplete = q => ({
  type: REQUEST_AUTOCOMPLETE_QUERY,
  q,
});
