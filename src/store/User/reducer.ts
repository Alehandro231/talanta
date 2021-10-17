import { createReducer } from '@reduxjs/toolkit';
import preloadedState from './preloaded-state';
import {
  updateUserDataFulfilled,
} from './actions';

const reducer = createReducer(preloadedState, (builder) =>
  builder
    .addCase(updateUserDataFulfilled, (state, { payload: { username }}) => ({
      ...state,
      isAuthorized: true,
      username,
    }))
);

export default reducer;
