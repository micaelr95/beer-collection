export interface Beer {
  id: string;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
}

export type Beers = Beer[];

export type FormBeer = Omit<Beer, 'id'>;
