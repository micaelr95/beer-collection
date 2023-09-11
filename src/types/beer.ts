interface Beer {
  id: string;
  name: string;
  tagline: string;
  firstBrewed: string;
  description: string;
  image_url: string;
  rating: number;
}

type Beers = Beer[];

type FormBeer = Omit<Beer, 'id'>;
