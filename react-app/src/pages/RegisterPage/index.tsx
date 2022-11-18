import { StyledForm, StyledContainer } from '../../styles/form';
import { Logo } from '../../components/Logo';
import { StyledLink as Link } from '../../styles/link';
import { Button } from '../../components/Button';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { Context } from '../../contexts/user';

export function RegisterPage() {
  const {
    registerHandleSubmit,
    onSubmitRegister,
    registerRegister,
    registerErrors,
  } = useContext(Context);
  return (
    <StyledContainer>
      <div className='header-container'>
        <Logo extraClass='normal' />
        <Link className='darkgrey-button-link' to={'/'}>
          Voltar
        </Link>
      </div>
      <div className='form-container'>
        <h2>Crie sua conta</h2>
        <span>Rápido e gratis, vamos nessa</span>
        <StyledForm onSubmit={registerHandleSubmit(onSubmitRegister)}>
          <label>
            Nome
            <input
              type='text'
              placeholder='Digite aqui seu nome'
              id='name'
              {...registerRegister('name')}
            />
          </label>
          <p>{registerErrors.name?.message}</p>
          <label>
            Email
            <input
              type='email'
              placeholder='Digite aqui seu email'
              id='email'
              {...registerRegister('email')}
            />
          </label>
          <p>{registerErrors.email?.message}</p>
          <label>
            Senha
            <input
              type='password'
              placeholder='Digite aqui sua senha'
              id='password'
              {...registerRegister('password')}
            />
          </label>
          <p>{registerErrors.password?.message}</p>
          <label>
            Confirmar Senha
            <input
              type='password'
              placeholder='Dgite novamente sua senha'
              id='confirm_password'
              {...registerRegister('confirm_password')}
            />
          </label>
          <p>{registerErrors.confirm_password?.message}</p>
          <label>
            Bio
            <input
              type='text'
              placeholder='Fale sobre você'
              id='bio'
              {...registerRegister('bio')}
            />
          </label>
          <p>{registerErrors.bio?.message}</p>
          <label>
            Contato
            <input
              type='text'
              placeholder='Opção de contato'
              id='contact'
              {...registerRegister('contact')}
            />
          </label>
          <p>{registerErrors.contact?.message}</p>
          <label>
            Selecionar módulo
            <select
              id='course_module'
              defaultValue={'default'}
              {...registerRegister('course_module')}
            >
              <option disabled={true} value='default'>
                Módulo:
              </option>
              <option value={'Primeiro módulo (Introdução ao Frontend)'}>
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value={'Segundo módulo (Frontend Avançado)'}>
                Segundo módulo (Frontend Avançado)
              </option>
              <option value={'Terceiro módulo (Introdução ao Backend)'}>
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value={'Quarto módulo (Backend Avançado)'}>
                Quarto módulo (Backend Avançado)
              </option>
            </select>
          </label>
          <p>{registerErrors.course_module?.message}</p>
          <Button type='submit' color='pink' text='Cadastrar' />
        </StyledForm>
      </div>
    </StyledContainer>
  );
}
