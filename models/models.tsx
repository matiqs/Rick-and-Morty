export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  gender: Gender;
  type: string;
  location: Location;
  origin: Location;
  episode: Episode[];
  image: string;
  created: string;
}

export interface Location {
  id: number;
  name: string;
  dimension: string;
  type: string;
  residents: Character[];
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Gender {
  Male = "Male",
  Female = "Female",
  Unknown = "unknown",
}
