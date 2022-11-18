import { iUser } from './authUserByToken';
import { api } from './api';

export interface onSubmitArgs {
  email: string;
  password: string;
}

interface iLoginResponse {
  user: iUser;
  token: string;
}

export async function login(userData: onSubmitArgs): Promise<iLoginResponse> {
  const { data } = await api.post<iLoginResponse>('/sessions', userData);
  window.localStorage.clear();
  window.localStorage.setItem('@TOKEN', data.token);
  window.localStorage.setItem('@USERID', data.user.id);
  return data;
}
