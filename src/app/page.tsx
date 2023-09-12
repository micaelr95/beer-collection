'use client';

import { useEffect } from 'react';

import List from '@/components/List';
import { getPaginated } from '@/fetchers/punkapi';
import { initialize } from '@/redux/beerSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const ListingPage = () => {
  const dispatch = useAppDispatch();
  const beers = useAppSelector((state) => state.beers);

  useEffect(() => {
    const getBeers = async () => {
      const data = await getPaginated();
      if (data) {
        dispatch(initialize(data));
      }
    };

    if (!beers.length) {
      getBeers();
    }
  }, []);

  if (!beers) {
    return (
      <div className="h-screen flex items-center justify-center">
        No beers found 🍻
      </div>
    );
  }

  return (
    <div>
      <List beers={beers} />
    </div>
  );
};

export default ListingPage;
