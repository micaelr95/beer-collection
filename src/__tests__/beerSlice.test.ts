import beerSlice, { initialize, add, remove } from '@/redux/beerSlice';
import { mockBeer } from '@/mocks/beers';

jest.mock('uid', () => ({ uid: () => 'eadd4a676ac' }));

describe('beerSlice', () => {
  it('should initialize', () => {
    expect(beerSlice(undefined, initialize(mockBeer))).toEqual({
      beers: mockBeer,
    });
  });

  it('should add a new beer', () => {
    const newBeer = {
      name: 'Buzz',
      tagline: 'A Real Bitter Experience.',
      firstBrewed: '09/2007',
      description:
        'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
      image_url: 'https://images.punkapi.com/v2/keg.png',
    };

    expect(beerSlice(undefined, add(newBeer))).toEqual({
      beers: [{ ...newBeer, id: 'eadd4a676ac' }],
    });
  });

  it('should remove a beer from the state', () => {
    expect(
      beerSlice({ beers: mockBeer }, remove({ id: 'eadd4a676ac' }))
    ).toEqual({
      beers: [
        {
          id: '796bf67fa98',
          name: 'Trashy Blonde',
          tagline: "You Know You Shouldn't",
          firstBrewed: '04/2008',
          description:
            'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
          image_url: 'https://images.punkapi.com/v2/2.png',
        },
        {
          id: '19320635ef9',
          name: 'Pilsen Lager',
          tagline: 'Unleash the Yeast Series.',
          firstBrewed: '09/2013',
          description:
            'Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.',
          image_url: 'https://images.punkapi.com/v2/4.png',
        },
      ],
    });
  });
});
