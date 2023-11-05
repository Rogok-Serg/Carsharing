import { createSlice } from '@reduxjs/toolkit';
import { getCatalog, paginationCatalog } from './operations';

const initialState = {
  catalog: {
    items: [],
    isLoading: false,
    error: null,
  },
  favorite: [],
};
const catalogStorageSlice = createSlice({
  name: 'catalogStorage',
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.favorite = [...state.favorite, action.payload];
    },
    removeCar: (state, action) => {
      state.favorite = state.favorite.filter(
        car => car.id !== action.payload.id
      );
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getCatalog.pending, state => {
        state.catalog.isLoading = true;
        state.catalog.error = null;
      })
      .addCase(paginationCatalog.pending, state => {
        state.catalog.isLoading = true;
        state.catalog.error = null;
      })
      .addCase(getCatalog.fulfilled, (state, action) => {
        state.catalog.isLoading = false;
        state.catalog.items = action.payload;
      })
      .addCase(paginationCatalog.fulfilled, (state, action) => {
        state.catalog.isLoading = false;
        state.catalog.items = [...state.catalog.items, ...action.payload];
      })
      .addCase(getCatalog.rejected, (state, action) => {
        state.catalog.isLoading = false;
        state.catalog.error = action.payload;
      })
      .addCase(paginationCatalog.rejected, (state, action) => {
        state.catalog.isLoading = false;
        state.catalog.error = action.payload;
      }),
});

export const { addCar, removeCar } = catalogStorageSlice.actions;
export const catalogReducer = catalogStorageSlice.reducer;
