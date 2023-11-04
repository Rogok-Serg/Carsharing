import { createSlice } from '@reduxjs/toolkit';
import getCatalog from './operations';

const initialState = {
  catalog: {
    items: [],
    isLoading: false,
    error: null,
  },
};
const catalogStorageSlice = createSlice({
  name: 'catalogStorage',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getCatalog.pending, state => {
        state.catalog.isLoading = true;
        state.catalog.error = null;
      })
      .addCase(getCatalog.fulfilled, (state, action) => {
        state.catalog.isLoading = false;
        state.catalog.items = action.payload;
      })
      .addCase(getCatalog.rejected, (state, action) => {
        state.catalog.isLoading = false;
        state.catalog.error = action.payload;
      }),
});

export const catalogReducer = catalogStorageSlice.reducer;
