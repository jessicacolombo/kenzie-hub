import { Button } from '../Button';
import { Logo } from '../Logo';
import { StyledNavBar } from '../../styles/navbar';
import { useContext } from 'react';
import { Context } from '../../contexts/user';

interface iNavBarProps {
  text: string;
}

export function NavBar({ text }: iNavBarProps) {
  const { logOut } = useContext(Context);

  return (
    <StyledNavBar>
      <div className='container'>
        <Logo />
        <Button
          onClick={() => logOut()}
          type='button'
          color='grey'
          text={text}
        />
      </div>
    </StyledNavBar>
  );
}
