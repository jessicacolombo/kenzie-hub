import styled from 'styled-components';

export const StyledLi = styled.li`
  list-style: none;
  color: var(--grey-0);
  display: flex;
  justify-content: space-between;
  font-size: var(--title);
  align-items: center;
  background-color: var(--grey-4);
  padding: 20px;
  border-radius: var(--border-radius);
  align-items: center;
  transition: 0.4s ease;

  &&:hover {
    background-color: var(--grey-2);
  }

  span {
    color: var(--grey-1);
    font-size: var(--headline);
  }
`;
