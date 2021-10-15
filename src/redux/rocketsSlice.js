import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  filteredRockets: [],
  launchStatus: '',
  isUpcoming: '',
  launchDate: '',
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
    setFilterdRocketsByName: (state, action) => {
      return {
        ...state,
        filteredRockets: action.payload.payload.items,
      };
    },
    setFilterdRocketsByDate: (state, action) => {
      return {
        ...state,
        launchDate: action.payload.payload.date,
        filteredRockets: action.payload.payload.items,
      };
    },
  },
});

export const {
  setRockets,
  setFilterdRocketsByLaunchStatus,
  setFilterdRocketsByUpcoming,
  setFilterdRocketsByName,
  setFilterdRocketsByDate,
} = rocketsSlice.actions;

export default rocketsSlice.reducer;
