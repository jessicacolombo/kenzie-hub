import { StyledButton } from '../../styles/button';

interface iButtonProps {
  onClick?: () => void;
  type: 'button' | 'submit';
  color: string;
  text: string;
}

export function Button({ onClick, type, color, text }: iButtonProps) {
  return (
    <StyledButton onClick={onClick} className={color} type={type}>
      {text}
    </StyledButton>
  );
}
