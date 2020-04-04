import { SetCenterAction } from 'src/map/types';

export const SET_CENTER = 'SET_CENTER';

export const setCenter = (l: any): SetCenterAction => ({
  type: SET_CENTER,
  l,
});

export const ADD_LOCATION = 'ADD_LOCATION';

export const addLocation = (location: any) => ({
  type: ADD_LOCATION,
  location,
});
