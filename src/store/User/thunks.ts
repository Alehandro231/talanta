import { State } from '../../store/types';
import { authorizationUser } from '../../api/initAxiosServer';
import { updateUserDataFulfilled } from './actions';

export const authorization = (data: any) => async (
  dispatch: (arg0: any) => void,
  getState: () => State
) => {
  console.log(data);
  
  const state: State = getState();
  if (state.userData.isAuthorized) {
    return
  }

  try {
    // const userData: any = await authorizationUser(data);
    const userData = {
      username: 'aaaaaa',
    }
    const { username } = userData;
    dispatch(updateUserDataFulfilled({ username }));
  } catch (e) {
    console.error(e);
  }
};
