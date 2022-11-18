import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid var(--grey-3);
  position: fixed;
  top: 0;
  background-color: var(--grey-4);
  padding: 25px 0;

  .container {
    width: 90%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
