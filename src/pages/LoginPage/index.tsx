import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { StyledForm, StyledContainer } from '../../styles/form';
import { StyledLink as Link } from '../../styles/link';
import { Loading } from '../../components/Loading';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { Context } from '../../contexts/user';

export function LoginPage() {
  const { onSubmit, loading, register, handleSubmit, errors } =
    useContext(Context);

  return (
    <>
      <StyledContainer>
        <Logo extraClass='centered' />
        <div className='form-container'>
          <h2>Login</h2>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <label>
              Email
              <input
                type='email'
                id='email'
                placeholder='Email'
                {...register('email')}
              />
            </label>
            <p>{errors.email?.message}</p>
            <label>
              Senha
              <input
                type='password'
                id='password'
                placeholder='Senha'
                {...register('password')}
              />
            </label>
            <p>{errors.password?.message}</p>
            <Button type='submit' color='pink' text='Entrar' />
          </StyledForm>
          <span>Ainda não possui uma conta?</span>
          <Link className='grey-button-link' to={'/register'}>
            Cadastre-se
          </Link>
        </div>
      </StyledContainer>
      {loading && <Loading />}
    </>
  );
}
