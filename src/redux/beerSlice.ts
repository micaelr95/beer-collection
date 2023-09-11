'use client';

import { initialData } from '@/consts/initialData';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface BeerState {
  beers: Beer[];
}

const initialState: BeerState = {
  beers: initialData,
};

export const beerSlice = createSlice({
  name: 'beer',
  initialState,
  reducers: {
    addBeer: (state, action: PayloadAction<Beer>) => {
      state.beers.push(action.payload);
    },
  },
});

export const { addBeer } = beerSlice.actions;
export default beerSlice.reducer;
