import axios, { AxiosResponse } from 'axios';
import { Room } from '../../../types/apiTypes';
import { RoomFilterList } from '../../../types/types';
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initRoomFilterList = createAsyncThunk<Room[]>(
  'initRoomFilterList/get',
  async (_payload) => {
    const res: AxiosResponse<Room[]> = await axios.get<Room[]>(`${import.meta.env.VITE_API_URL}/api/rooms`);
    return res.data;
  }
)

const roomFilterList = createSlice({
  name: 'roomFilterList',
  initialState: { ...(new RoomFilterList()) },
  reducers: {
    changedFilter(state, { type, payload }) {
      state.filter = { ...state.filter, ...payload };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(initRoomFilterList.pending, (state) => {
        state.status = 'Loading...';
      })
      .addCase(initRoomFilterList.fulfilled, (state, action) => {
        state.status = '取得済'
        state.list = action.payload;
      })
      .addCase(initRoomFilterList.rejected, (state) => {
        state.status = '取得エラー'
      })
  }
});

const { changedFilter } = roomFilterList.actions;
export { changedFilter, initRoomFilterList };
export default roomFilterList.reducer