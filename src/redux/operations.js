import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://6544a1375a0b4b04436ca038.mockapi.io/api/';
const params = {
  completed: false,
  page: 1,
  limit: 12,
};
export const getCatalog = createAsyncThunk(
  'carsharing/fetchAll',
  async (_, thankApi) => {
    try {
      const { data } = await axios.get('/advert', { params });
      return data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);

export const paginationCatalog = createAsyncThunk(
  'carsharing/paginationCatalog',
  async (page = 1, thankApi) => {
    const params = {
      completed: false,
      page: page,
      limit: 12,
    };
    try {
      const { data } = await axios.get('/advert', { params });
      return data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);
