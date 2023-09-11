'use client';

import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';

interface DetailsProps {
  params: {
    id: string;
  };
}

const Details = ({ params: { id } }: DetailsProps) => {
  const beer = useAppSelector((state) =>
    state.beers.find((beer) => beer.id.toString() === id)
  );

  if (!beer) {
    return (
      <div className="h-screen flex items-center justify-center">
        No beers found with this id 🍻
      </div>
    );
  }

  const { name, description, image_url, firstBrewed, rating } = beer;

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
          {firstBrewed}
        </p>

        <p className="flex gap-2">
          <span className="font-bold">Rating: </span>
          {rating}
        </p>
      </div>
    </div>
  );
};

export default Details;
