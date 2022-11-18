import styled from 'styled-components';

export const StyledLogo = styled.h1`
  color: var(--color-primary);
  font-weight: var(--wheight-1);
  font-size: 20px;

  &&.normal {
    text-align: left;
  }

  &&.centered {
    margin-bottom: 20px;
    text-align: center;
  }
`;
