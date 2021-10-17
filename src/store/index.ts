import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { userReducer } from './User';


const reducer = {
  userData: userReducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
