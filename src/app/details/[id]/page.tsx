'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { remove } from '@/redux/beerSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Button from '@/components/Button';

interface DetailsProps {
  params: {
    id: string;
  };
}

const Details = ({ params: { id } }: DetailsProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const beer = useAppSelector((state) =>
    state.beers.find(({ id: beerId }) => beerId === id)
  );

  if (!beer) {
    return (
      <div className="h-screen flex items-center justify-center">
        No beers found with this id 🍻
      </div>
    );
  }

  const { name, description, image_url, firstBrewed, rating } = beer;

  const handleClick = () => {
    dispatch(remove({ id }));
    router.push('/');
  };

  return (
    <div className="grid gap-10 lg:grid-cols-3">
      <div className="relative w-full h-96 flex align-middle">
        <Image
          className="items-center object-contain"
          src={image_url}
          alt={name}
          fill
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
        <div className="flex justify-end">
          <Button handleClick={handleClick}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
