import { AuthorizationStatus } from '../const.js';
import {store} from '../store';

export type State = ReturnType<typeof store.getState>;
export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  avatar: string | null,
  userId: number | null,
};
export type AppDispatch = typeof store.dispatch;
