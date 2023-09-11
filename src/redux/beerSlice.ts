'use client';

import { initialData } from '@/consts/initialData';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { uid } from 'uid';

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
    addBeer: (state, action: PayloadAction<FormBeer>) => {
      state.beers.push({ ...action.payload, id: uid() });
    },
  },
});

export const { addBeer } = beerSlice.actions;
export default beerSlice.reducer;
