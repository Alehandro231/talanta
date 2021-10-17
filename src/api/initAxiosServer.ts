import axios from 'axios';
import { IUpdateUserData } from '../store/User/types';

export const serverAxios = axios.create({
  baseURL: 'http://talanta-yamal.ru:9080',
  withCredentials: true,
});

export const authorizationUser = async(
  data: any,
): Promise<IUpdateUserData> => serverAxios
.post(
  'api/login',
  data
  )
  .then((response) => response.data);
