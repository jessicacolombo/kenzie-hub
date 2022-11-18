import { StyledLogo } from '../../styles/logo';

interface iLogoProps {
  extraClass?: string;
}

export function Logo({ extraClass }: iLogoProps) {
  return <StyledLogo className={extraClass}>Kenzie Hub</StyledLogo>;
}
