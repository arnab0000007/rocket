import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocketsSlice';

export default configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});
