import { configureStore } from '@reduxjs/toolkit';
import postSlice from './features/Posts/PostSlice';
import authSlice from './features/authentication/AuthSlice';
import PropertySlice from './features/postProperty/PropertySlice';
const store = configureStore({
  reducer: {
    postmap: postSlice,
    propertymap: PropertySlice,
    auth: authSlice,
  },
});
export default store;
