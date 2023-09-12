'use client';

import { uid } from 'uid';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { Beer, Beers, FormBeer } from '@/types/beer';

interface BeerState {
  beers: Beer[];
}

const initialState: BeerState = {
  beers: [],
};

export const beerSlice = createSlice({
  name: 'beer',
  initialState,
  reducers: {
    initialize: (state, action: PayloadAction<Beers>) => {
      state.beers = action.payload;
    },
    add: (state, action: PayloadAction<FormBeer>) => {
      state.beers.push({ ...action.payload, id: uid() });
    },
    remove: (state, action: PayloadAction<Pick<Beer, 'id'>>) => {
      state.beers = state.beers.filter(({ id }) => id !== action.payload.id);
    },
  },
});

export const { initialize, add, remove } = beerSlice.actions;
export default beerSlice.reducer;
