import { StyledHeader } from '../../styles/header';
import { useContext } from 'react';
import { Context } from '../../contexts/user';

export function Header() {
  const { user } = useContext(Context);

  return (
    <StyledHeader>
      <div className='header-container'>
        <h2>Olá, {user?.name}</h2>
        <span>{user?.course_module}</span>
      </div>
    </StyledHeader>
  );
}
