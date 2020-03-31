// This is a file for types which belong to this domain.
// This file could be extended into more specific ones

export type Coordinates = [number, number];

export type Chart = {
  id: string;
  title: string;
};

export interface State {
  list: Array<Chart>;
  map: {
    center: Coordinates;
  };
}

// ACTIONS TYPES
export type SetCenterAction = {
  type: String;
  coords: Coordinates;
};
