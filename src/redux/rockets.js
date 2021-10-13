import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
};

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    setRockets: (state, action) => {
      state.rockets = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRockets } = rocketsSlice.actions;

export default rocketsSlice.reducer;
