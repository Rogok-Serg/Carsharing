import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://6544a1375a0b4b04436ca038.mockapi.io/api/';
// const URL = 'https://6544a1375a0b4b04436ca038.mockapi.io/api';
// URL.searchParams.append('completed', false);
// URL.searchParams.append('page', 1);
// URL.searchParams.append('limit', 10);
const getCatalog = createAsyncThunk(
  'carsharing/fetchAll',
  async (_, thankApi) => {
    try {
      const { data } = await axios.get('/advert');
      return data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);

export default getCatalog;
