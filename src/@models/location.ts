export type Location = {
  id: number;
  name: string;
  latlng: {
    latitude: number;
    longitude: number;
  };
  description: string;
  image: string;
};

export type LocationWithIndex = Location & {index: number};
