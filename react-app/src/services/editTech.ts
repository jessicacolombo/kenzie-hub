import { iTechnology } from './authUserByToken';
import { api } from './api';

export interface iEditedTech {
  id: string;
  title: string;
  status: string;
}

export interface iEditedInfos {
  status: 'Iniciante' | 'Intermediário' | 'Avançado';
}

export async function editTech(
  token: string,
  editedTech: iEditedTech,
  editedInfos: iEditedInfos
): Promise<iTechnology> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.put<iTechnology>(
    `/users/techs/${editedTech.id}`,
    editedInfos
  );
  return data;
}
