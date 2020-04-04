// This is a file for types which belong to this domain.
// This file could be extended into more specific ones

export type Coordinates = [number, number];

export interface State {
  list: Array<object>;
  map: {
    center: {
      coords: Coordinates;
    };
  };
}

// ACTIONS TYPES
export type SetCenterAction = {
  type: String;
  l: any;
};
