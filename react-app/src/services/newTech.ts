import { iTechnology } from './authUserByToken';
import { api } from './api';

export interface iNewTech {
  title: string;
  status: string;
}

export async function registerNewTechnology(
  token: string,
  newTech: iNewTech
): Promise<iTechnology> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.post<iTechnology>('/users/techs', newTech);
  return data;
}
