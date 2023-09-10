import Image from 'next/image';

import { getBeer } from '@/fetchers/punkapi';

interface DetailsProps {
  params: {
    id: number;
  };
}

const Details = async ({ params: { id } }: DetailsProps) => {
  const beer = await getBeer(id);

  if (!beer) {
    // TODO
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        No beers found with this id 🍻
      </div>
    );
  }

  const { name, description, image_url, first_brewed, food_pairing } = beer[0];

  return (
    <div className="grid gap-10 lg:grid-cols-3">
      <div className="relative w-full h-96 flex align-middle">
        <Image
          src={image_url}
          alt={name}
          fill
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <div className="flex flex-col gap-4 lg:col-span-2">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-justify">{description}</p>
        <p className="flex gap-2">
          <span className="font-bold">First brewed:</span>
          {first_brewed}
        </p>

        <p className="flex gap-2">
          <span className="font-bold">Better with: </span>
          {food_pairing.toString()}
        </p>
      </div>
    </div>
  );
};

export default Details;
