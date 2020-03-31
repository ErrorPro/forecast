import { Coordinates, SetCenterAction } from 'src/map/types';

export const SET_CENTER = 'SET_CENTER';

export const setCenter = (coords: Coordinates): SetCenterAction => ({
  type: SET_CENTER,
  coords,
});
