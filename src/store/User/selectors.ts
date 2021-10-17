import { createSelector } from '@reduxjs/toolkit';
import { IUserDataState } from './types';
import { State } from '../types';

export const getUserDataStatePart = (
  state: State
): IUserDataState =>
  state.userData;

export const getUserName = createSelector(
  getUserDataStatePart,
  (userData) =>
    userData.username
);
export const getIsAuthorized = createSelector(
  getUserDataStatePart,
  (userData) =>
    userData.isAuthorized
);
