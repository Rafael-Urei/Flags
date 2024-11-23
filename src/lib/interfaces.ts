export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  altSpellings: string[];
  area: number;
  capital: string[];
  capitalInfo: {
    latlng: number[];
  };
  car: {
    signs: string[];
    side: string;
  };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  independent: boolean;
  landlocked: boolean;
  languages: {
    [key: string]: string;
  };
  latlng: number[];
  maps: {
    googleMaps: string;
    openstreetmap: string;
  };
  coatOfArms: {};
  continents: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  borders: string[];
  population: number;
  region: string;
  subregion: string;
  startOfWeek: string;
  status: string;
  timezones: string[];
  unMember: boolean;
  denonyms: {
    [key: string]: string;
  };
  tld: string[];
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
}
