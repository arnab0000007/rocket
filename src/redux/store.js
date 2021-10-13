import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets';

export default configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});
