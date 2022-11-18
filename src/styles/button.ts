import styled from 'styled-components';

export const StyledButton = styled.button`
  border: 1px solid transparent;
  padding: 10px;
  border-radius: var(--border-radius);
  color: var(--grey-0);
  font-size: 14px;
  transition: 0.4s ease-in-out;

  &&.pink {
    background-color: var(--color-primary);
  }

  &&.pink:hover {
    background-color: var(--color-primary-focus);
  }

  &&.grey {
    background-color: var(--grey-3);
    width: 70px;
  }

  &&.grey:hover {
    background-color: var(--grey-2);
  }

  &&.light-grey {
    width: 30%;
    background-color: var(--grey-2);
  }

  &&.light-grey:hover {
    background-color: var(--grey-1);
  }
`;
