import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  filteredRockets: [],
  launchStatus: '',
  isUpcoming: '',
};
export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    setRockets: (state, action) => {
      return {
        ...state,
        rockets: action.payload,
        filteredRockets: action.payload,
      };
    },
    setFilterdRocketsByLaunchStatus: (state, action) => {
      return {
        ...state,
        launchStatus: action.payload.payload.launchStatus,
        filteredRockets: action.payload.payload.items,
      };
    },
    setFilterdRocketsByUpcoming: (state, action) => {
      return {
        ...state,
        isUpcoming: action.payload.payload.isUpcoming,
        filteredRockets: action.payload.payload.items,
      };
    },
    setFilterdRocketsName: (state, action) => {
      return {
        ...state,
        filteredRockets: action.payload.payload.items,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setRockets,
  setFilterdRocketsByLaunchStatus,
  setFilterdRocketsByUpcoming,
  setFilterdRocketsName,
} = rocketsSlice.actions;

export default rocketsSlice.reducer;
