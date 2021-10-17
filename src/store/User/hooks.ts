import { useSelector } from 'react-redux';
import {
  getUserName,
  getIsAuthorized,
} from './selectors';
export const useUserName = (): string =>
  useSelector(getUserName);
export const useIsAuthorized = (): boolean =>
  useSelector(getIsAuthorized);
