import { createApiAction, createAsyncActionRequestTypes } from 'src/api';

const DATASERVICE_TOKEN = 'in0sEeGZLsXTzSjhkXxMEIj8q2qGP563';

export const ACCWEATHER_AUTOCOMPLETE = createAsyncActionRequestTypes(
  'ACCWEATHER_AUTOCOMPLETE'
);

export const autocompleteQuery = q =>
  createApiAction(
    {
      url:
        'https://dataservice.accuweather.com/locations/v1/cities/search?apikey=:t&q=:q',
      params: {
        t: DATASERVICE_TOKEN,
        q,
      },
    },
    ACCWEATHER_AUTOCOMPLETE
  );

export const ACCWEATHER_FORECAST = createAsyncActionRequestTypes(
  'ACCWEATHER_FORECAST'
);

export const getForecastForLocation = key =>
  createApiAction(
    {
      url:
        'https://dataservice.accuweather.com/forecasts/v1/daily/1day/:key?apikey=:t',
      params: {
        t: DATASERVICE_TOKEN,
        key,
      },
    },
    ACCWEATHER_FORECAST
  );

export const SKYPICKER_GET_PRICE = createAsyncActionRequestTypes(
  'SKYPICKER_GET_PRICE'
);

export const getPriceToLocation = (key, from, to) =>
  createApiAction(
    {
      url:
        'https://api.skypicker.com/flights?flyFrom=:from&to=:to&partner=picky&v=3',
      params: {
        key,
        from,
        to,
      },
    },
    SKYPICKER_GET_PRICE
  );

export const SKYPICKER_GET_AIRPORT = createAsyncActionRequestTypes(
  'SKYPICKER_GET_AIRPORT'
);

export const getAirportByLocation = location =>
  createApiAction(
    {
      url:
        'https://api.skypicker.com/locations?term=:location&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name',
      params: {
        location,
      },
    },
    SKYPICKER_GET_AIRPORT
  );

export const REQUEST_AUTOCOMPLETE_QUERY = 'REQUEST_AUTOCOMPLETE_QUERY';

export const locationAutocomplete = q => ({
  type: REQUEST_AUTOCOMPLETE_QUERY,
  q,
});

export const GET_LOCATION_DATA = 'GET_LOCATION_DATA';

export const getLocationData = location => ({
  type: GET_LOCATION_DATA,
  location,
});

export const RESET_SEARCH_RESULT = 'RESET_SEARCH_RESULT';

export const resetSearch = () => ({
  type: RESET_SEARCH_RESULT,
});

export const SET_DEPARTURE_AIRPORT = 'SET_DEPARTURE_AIRPORT';

export const setDepartureAiport = d => ({
  type: SET_DEPARTURE_AIRPORT,
  d,
});
