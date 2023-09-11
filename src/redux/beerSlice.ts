'use client';

import { uid } from 'uid';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { initialData } from '@/consts/initialData';
import type { Beer, FormBeer } from '@/types/beer';

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
    add: (state, action: PayloadAction<FormBeer>) => {
      state.beers.push({ ...action.payload, id: uid() });
    },
    remove: (state, action: PayloadAction<Pick<Beer, 'id'>>) => {
      state.beers = state.beers.filter(({ id }) => id !== action.payload.id);
    },
  },
});

export const { add, remove } = beerSlice.actions;
export default beerSlice.reducer;
