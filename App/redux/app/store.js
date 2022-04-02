import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../reducers/authSlice';
import storageReducer from '../reducers/storageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    storage: storageReducer,
  },
});
