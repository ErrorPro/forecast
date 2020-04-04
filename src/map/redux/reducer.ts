import createReducer from 'src/utils/createReducer';

import { State, SetCenterAction } from 'src/map/types';
import {
  ACCWEATHER_FORECAST,
  SKYPICKER_GET_PRICE,
} from 'src/search/redux/actions';

import { SET_CENTER, ADD_LOCATION } from './actions';

export const INITIAL_STATE: State = {
  list: [],
  map: {
    center: {
      coords: null
    },
  },
};

export default createReducer(INITIAL_STATE, {
  [SET_CENTER]: (state: State, { l }: SetCenterAction): State => ({
    ...state,
    map: {
      ...state.map,
      center: {
        coords: [l.GeoPosition?.Latitude, l.GeoPosition?.Longitude],
      }
    },
  }),
  [ADD_LOCATION]: (state: State, { location }: any): State => ({
    ...state,
    list: [...state.list, location],
  }),
  [ACCWEATHER_FORECAST.SUCCESS]: (state, { params, data: { Headline } }) => ({
    ...state,
    list: state.list.map(e => {
      if (e.Key === params.key) {
        return {
          ...e,
          forecast: {
            ...Headline,
            isLoading: false,
          },
        };
      }

      return e;
    }),
  }),
  [SKYPICKER_GET_PRICE.SUCCESS]: (state, { params, data: { data = [] } }) => ({
    ...state,
    list: state.list.map(e => {
      if (e.Key === params.key) {
        return {
          ...e,
          ticketPriceRange: data.reduce((acc, key) => {
            const [min = Number.MAX_SAFE_INTEGER, max = 0] = acc;

            if (key.price < min) acc[0] = key.price;
            if (key.price > max) acc[1] = key.price;

            return acc;
          }, []),
        };
      }

      return e;
    }),
  }),
});
