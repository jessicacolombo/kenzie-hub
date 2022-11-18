import { api } from './api';

export interface iTechnology {
  id: string;
  title: string;
  status: 'Iniciante' | 'Intermediário' | 'Avançado';
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: iTechnology[];
}

export async function authUserByToken(token: string): Promise<iUser> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.get<iUser>('/profile');
  return data;
}
