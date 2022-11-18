import { iUser } from './authUserByToken';
import { api } from './api';

export interface onSubmitRegisterArgs {
  email: string;
  password: string;
  confirm_password?: string;
  name: string;
  course_module: string;
  bio: string;
  contact: string;
}

export async function registerUser(
  newUser: onSubmitRegisterArgs
): Promise<iUser> {
  const { data } = await api.post<iUser>('/users', newUser);
  return data;
}
