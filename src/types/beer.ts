export interface Beer {
  id: string;
  name: string;
  tagline: string;
  firstBrewed: string;
  description: string;
  image_url: string;
  rating: number;
}

export type Beers = Beer[];

export type FormBeer = Omit<Beer, 'id'>;
