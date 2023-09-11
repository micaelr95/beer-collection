import type { Beers } from '@/types/beer';

// Data taken from https://api.punkapi.com/v2/beers?page=1&per_page=16
export const initialData: Beers = [
  {
    id: 'eadd4a676ac',
    name: 'Buzz',
    tagline: 'A Real Bitter Experience.',
    firstBrewed: '09/2007',
    description:
      'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    rating: 4.5,
  },
  {
    id: '796bf67fa98',
    name: 'Trashy Blonde',
    tagline: "You Know You Shouldn't",
    firstBrewed: '04/2008',
    description:
      'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
    image_url: 'https://images.punkapi.com/v2/2.png',
    rating: 4.1,
  },
  {
    id: '19320635ef9',
    name: 'Pilsen Lager',
    tagline: 'Unleash the Yeast Series.',
    firstBrewed: '09/2013',
    description:
      'Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.',
    image_url: 'https://images.punkapi.com/v2/4.png',
    rating: 6.3,
  },
  {
    id: '5a48a84ab65',
    name: 'Avery Brown Dredge',
    tagline: "Bloggers' Imperial Pilsner.",
    firstBrewed: '02/2011',
    description:
      'An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.',
    image_url: 'https://images.punkapi.com/v2/5.png',
    rating: 7.2,
  },
  {
    id: 'bf6d231d9e4',
    name: 'Electric India',
    tagline: 'Vibrant Hoppy Saison.',
    firstBrewed: '05/2013',
    description:
      'Re-brewed as a spring seasonal, this beer – which appeared originally as an Equity Punk shareholder creation – retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.',
    image_url: 'https://images.punkapi.com/v2/6.png',
    rating: 5.2,
  },
  {
    id: '5310f731aad',
    name: 'AB:12',
    tagline: 'Imperial Black Belgian Ale.',
    firstBrewed: '07/2012',
    description:
      'An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask. Decadent but light and dry, this beer would make a fantastic base for ageing on pretty much any dark fruit - we used raspberries, tayberries and blackberries beause they were local.',
    image_url: 'https://images.punkapi.com/v2/7.png',
    rating: 10,
  },
  {
    id: '35033a28e43',
    name: 'Fake Lager',
    tagline: 'Bohemian Pilsner.',
    firstBrewed: '03/2013',
    description:
      'Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager. We want to play our part in the ugly fallout from the Lager Dream. Say hello to Fake Lager – a zesty, floral 21st century faux masterpiece with added BrewDog bitterness.',
    image_url: 'https://images.punkapi.com/v2/8.png',
    rating: 4.7,
  },
  {
    id: '37999558877',
    name: 'AB:07',
    tagline: 'Whisky Cask-Aged Scotch Ale.',
    firstBrewed: '03/2010',
    description:
      'Whisky cask-aged imperial scotch ale. Beer perfect for when the rain is coming sideways. Liquorice, plum and raisin temper the warming alcohol, producing a beer capable of holding back the Scottish chill.',
    image_url: 'https://images.punkapi.com/v2/9.png',
    rating: 9.5,
  },
  {
    id: '5310973a25b',
    name: 'Bramling X',
    tagline: 'Single Hop IPA Series - 2011.',
    firstBrewed: '01/2011',
    description:
      'Good old Bramling Cross is elegant, refined, assured, (boring) and understated. Understated that is unless you hop the living daylights out of a beer with it. This is Bramling Cross re-invented and re-imagined, and shows just what can be done with English hops if you use enough of them. Poor Bramling Cross normally gets lost in a woeful stream of conformist brown ales made by sleepy cask ale brewers. But not anymore. This beer shows that British hops do have some soul, and is a fruity riot of blackberries, pears, and plums. Reminds me of the bramble, apple and ginger jam my grandmother used to make.',
    image_url: 'https://images.punkapi.com/v2/10.png',
    rating: 7.5,
  },
  {
    id: '69e08e1b0de',
    name: 'Misspent Youth',
    tagline: 'Milk & Honey Scotch Ale.',
    firstBrewed: '04/2013',
    description:
      'The brainchild of our small batch brewer, George Woods. A dangerously drinkable milk sugar- infused Scotch Ale.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    rating: 7.3,
  },
  {
    id: '69eg5e1b0da',
    name: 'Arcade Nation',
    tagline: 'Seasonal Black IPA.',
    firstBrewed: '12/2015',
    description:
      'Running the knife-edge between an India Pale Ale and a Stout, this particular style is one we truly love. Black IPAs are a great showcase for the skill of our brew team, balancing so many complex and twisting flavours in the same moment. The citrus, mango and pine from the hops – three of our all-time favourites – play off against the roasty dryness from the malt bill at each and every turn.',
    image_url: 'https://images.punkapi.com/v2/12.png',
    rating: 5.3,
  },
  {
    id: '53c5945e88a',
    name: 'Movember',
    tagline: 'Moustache-Worthy Beer.',
    firstBrewed: '11/2009',
    description:
      'A deliciously robust, black malted beer with a decadent dark, dry cocoa flavour that provides an enticing backdrop to the Cascade hops.',
    image_url: 'https://images.punkapi.com/v2/13.png',
    rating: 4.5,
  },
  {
    id: 'fdd3099b7af',
    name: 'Alpha Dog',
    tagline: 'Existential Red Ale.',
    firstBrewed: '02/2010',
    description:
      'A fusion of caramel malt flavours and punchy New Zealand hops. A session beer you can get your teeth into.',
    image_url: 'https://images.punkapi.com/v2/14.png',
    rating: 4.5,
  },
  {
    id: '87c3aca72d8',
    name: 'Mixtape 8',
    tagline:
      'An Epic Fusion Of Old Belgian, American New Wave, And Scotch Whisky.',
    firstBrewed: '01/2012',
    description:
      'This recipe is for the Belgian Tripel base. A blend of two huge oak aged beers – half a hopped up Belgian Tripel, and half a Triple India Pale Ale. Both aged in single grain whisky barrels for two years and blended, each beer brings its own character to the mix. The Belgian Tripel comes loaded with complex spicy, fruity esters, and punchy citrus hop character.',
    image_url: 'https://images.punkapi.com/v2/15.png',
    rating: 4.5,
  },
  {
    id: '1c06033b93a',
    name: 'Libertine Porter',
    tagline: 'Dry-Hopped Aggressive Porter.',
    firstBrewed: '01/2012',
    description:
      'An avalanche of cross-continental hop varieties give this porter a complex spicy, resinous and citrusy aroma, with a huge malt bill providing a complex roasty counterpoint. Digging deeper into the flavour draws out cinder toffee, bitter chocolate and hints of woodsmoke.',
    image_url: 'https://images.punkapi.com/v2/16.png',
    rating: 6.1,
  },
];
