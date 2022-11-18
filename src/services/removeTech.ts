import { api } from './api';

export async function removeTech(token: string, id: string) {
  api.defaults.headers.authorization = `Bearer ${token}`;
  return await api.delete(`/users/techs/${id}`);
}
