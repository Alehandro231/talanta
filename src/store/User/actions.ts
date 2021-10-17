import { createAction } from '@reduxjs/toolkit';
import { IUpdateUserData } from './types';

export const updateUserDataFulfilled = createAction<IUpdateUserData>(
  'uploadingRegistryPurposePension/uploadingRegistryFulfilled'
);
