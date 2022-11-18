import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  useForm,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrorsImpl,
} from 'react-hook-form';
import { schema } from '../validations/login';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema as registerSchema } from '../validations/register';
import {
  authUserByToken,
  iTechnology,
  iUser,
} from '../services/authUserByToken';
import { login, onSubmitArgs } from '../services/login';
import { onSubmitRegisterArgs, registerUser } from '../services/register';

interface iUserProviderProps {
  children: ReactNode;
}

interface iUserProviderContext {
  user: iUser | null;
  setUser: Dispatch<SetStateAction<iUser | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  onSubmit: ({ email, password }: onSubmitArgs) => void;
  logOut: () => void;
  register: UseFormRegister<onSubmitArgs>;
  handleSubmit: UseFormHandleSubmit<onSubmitArgs>;
  errors: Partial<
    FieldErrorsImpl<{
      email: string;
      password: string;
    }>
  >;
  registerRegister: UseFormRegister<onSubmitRegisterArgs>;
  registerHandleSubmit: UseFormHandleSubmit<onSubmitRegisterArgs>;
  registerErrors: Partial<
    FieldErrorsImpl<{
      email: string;
      password: string;
      confirm_password: string;
      name: string;
      course_module: string;
      bio: string;
      contact: string;
    }>
  >;
  onSubmitRegister: ({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  }: onSubmitRegisterArgs) => Promise<void>;
  userTechnologies: iTechnology[];
  setUserTechnologies: Dispatch<SetStateAction<iTechnology[]>>;
}

export const Context = createContext<iUserProviderContext>(
  {} as iUserProviderContext
);

export function UserProvider({ children }: iUserProviderProps) {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [userTechnologies, setUserTechnologies] = useState<iTechnology[]>([]);
  const navigate = useNavigate();

  //automatic login

  useEffect(() => {
    async function automaticLogin(): Promise<void> {
      setLoading(true);
      const token = localStorage.getItem('@TOKEN');

      if (token) {
        try {
          const data = await authUserByToken(token);
          setUser(data);
          setUserTechnologies(data.techs);
          navigate('/dashboard');
        } catch (error) {
          console.log(error);
          localStorage.clear();
        }
      }

      setLoading(false);
    }

    automaticLogin();
  }, [navigate]);

  //login related functions

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<onSubmitArgs>({ resolver: yupResolver(schema) });

  async function onSubmit({ email, password }: onSubmitArgs): Promise<void> {
    const userData = {
      email: email,
      password: password,
    };
    setLoading(true);
    try {
      const data = await login(userData);
      setUser(data.user);
      navigate('/dashboard');
    } catch (error) {
      toast.error('Combinação errada de email / senha', {
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

  function logOut(): void {
    window.localStorage.clear();
    navigate('/');
    setUser(null);
  }

  //register related functions

  const {
    register: registerRegister,
    handleSubmit: registerHandleSubmit,
    reset: registerReset,
    formState: { errors: registerErrors },
  } = useForm<onSubmitRegisterArgs>({ resolver: yupResolver(registerSchema) });

  async function onSubmitRegister({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  }: onSubmitRegisterArgs): Promise<void> {
    const newUser = {
      email: email,
      password: password,
      name: name,
      bio: bio,
      contact: contact,
      course_module: course_module,
    };

    try {
      await registerUser(newUser);
      toast.success('Usuário criado com sucesso!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate('/');
    } catch {
      toast.error('Email já cadastrado', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    registerReset();
  }

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        onSubmit,
        logOut,
        register,
        handleSubmit,
        errors,
        registerRegister,
        registerHandleSubmit,
        registerErrors,
        onSubmitRegister,
        userTechnologies,
        setUserTechnologies,
      }}
    >
      {children}
    </Context.Provider>
  );
}
