import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';
import {
  FieldErrorsImpl,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { schema, editSchema } from '../validations/tech';
import { Context } from './user';
import { iNewTech, registerNewTechnology } from '../services/newTech';
import { removeTech } from '../services/removeTech';
import { editTech, iEditedInfos, iEditedTech } from '../services/editTech';

interface iTechProviderProps {
  children: ReactNode;
}

interface iTechProviderContext {
  loading: boolean;
  register: UseFormRegister<iNewTech>;
  handleSubmit: UseFormHandleSubmit<iNewTech>;
  errors: Partial<
    FieldErrorsImpl<{
      title: string;
      status: string;
    }>
  >;
  newTechnology: ({ title, status }: iNewTech) => Promise<void>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  removeTechnologies: (id: string) => Promise<void>;
  editRegister: UseFormRegister<iEditedInfos>;
  editHandleSubmit: UseFormHandleSubmit<iEditedInfos>;
  editReset: UseFormReset<iEditedInfos>;
  editErrors: Partial<
    FieldErrorsImpl<{
      status: NonNullable<'Iniciante' | 'Intermediário' | 'Avançado'>;
    }>
  >;
  showEditModal: boolean;
  setShowEditModal: Dispatch<SetStateAction<boolean>>;
  editedTech: iEditedTech | null;
  setEditedTech: Dispatch<SetStateAction<iEditedTech | null>>;
  editTechnologies: ({ status }: iEditedInfos) => Promise<void>;
}

export const TechContext = createContext<iTechProviderContext>(
  {} as iTechProviderContext
);

export function TechProvider({ children }: iTechProviderProps) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem('@TOKEN');
  const { userTechnologies, setUserTechnologies } = useContext(Context);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iNewTech>({ resolver: yupResolver(schema) });

  async function newTechnology({ title, status }: iNewTech): Promise<void> {
    const newTech = {
      title: title,
      status: status,
    };

    setLoading(true);

    try {
      if (token) {
        const data = await registerNewTechnology(token, newTech);
        setShowModal(false);
        toast.success('Tecnologia adicionada com sucesso!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setUserTechnologies((userTechnologies) => [...userTechnologies, data]);
      }
    } catch {
      toast.error('Tecnologia já cadastrada', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
    }

    reset();
  }

  async function removeTechnologies(id: string): Promise<void> {
    setLoading(true);
    try {
      if (token) {
        await removeTech(token, id);
        toast.success('Tecnologia deletada com sucesso!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        const withoutRemovedTech = [...userTechnologies].filter(
          (elem) => elem.id !== id
        );
        setUserTechnologies(withoutRemovedTech);
      }
    } catch (error) {
      toast.error(`Houve um erro: ${error}`, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
    }
  }

  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTech, setEditedTech] = useState<iEditedTech | null>(null);

  const {
    register: editRegister,
    handleSubmit: editHandleSubmit,
    reset: editReset,
    formState: { errors: editErrors },
  } = useForm<iEditedInfos>({ resolver: yupResolver(editSchema) });

  async function editTechnologies({ status }: iEditedInfos): Promise<void> {
    const editedInfos = {
      status: status,
    };

    setLoading(true);
    try {
      if (editedTech && token) {
        const data = await editTech(token, editedTech, editedInfos);
        toast.success('Tecnologia editada com sucesso!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        const withEditedTech = [...userTechnologies].map((elem) =>
          elem.id !== editedTech.id ? elem : (elem = data)
        );
        setUserTechnologies(withEditedTech);
      }
    } catch (error) {
      toast.error(`Houve um erro: ${error}`, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setEditedTech(null);
      setShowEditModal(false);
      setLoading(false);
    }

    editReset();
  }

  return (
    <TechContext.Provider
      value={{
        loading,
        register,
        handleSubmit,
        errors,
        newTechnology,
        showModal,
        setShowModal,
        removeTechnologies,
        editRegister,
        editHandleSubmit,
        editReset,
        editErrors,
        showEditModal,
        setShowEditModal,
        editedTech,
        setEditedTech,
        editTechnologies,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
