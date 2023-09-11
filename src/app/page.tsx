'use client';

import List from '@/components/List';
import { useAppSelector } from '@/redux/hooks';

const ListingPage = () => {
  const beers = useAppSelector((state) => state.beers);

  return (
    <div>
      <List beers={beers} />
    </div>
  );
};

export default ListingPage;
