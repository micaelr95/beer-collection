import { configureStore } from '@reduxjs/toolkit';

import beerSlice from '@/redux/beerSlice';

export const store = configureStore({
  reducer: beerSlice,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
