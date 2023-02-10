import { createSlice } from '@reduxjs/toolkit';
import { getUsersThunk } from './users.thunk';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  extraReducers: (build) => {
    build.addCase(getUsersThunk.fulfilled, (_, { payload }) => payload);
  },
});

export default usersSlice.reducer;
