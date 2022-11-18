import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  color: var(--grey-0);
  transition: 0.4s ease-in-out;

  &&.grey-button-link {
    font-size: 14px;
    background-color: var(--grey-1);
  }

  &&.grey-button-link:hover {
    background-color: var(--color-primary-negative);
  }

  &&.darkgrey-button-link {
    background-color: var(--grey-3);
    font-size: var(--headline);
  }

  &&.darkgrey-button-link:hover {
    background-color: var(--grey-2);
  }
`;
