import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin-top: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid var(--grey-3);

  .header-container {
    width: 90%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: var(--grey-0);
    padding: 30px 0;
    flex-direction: column;
    gap: 15px;
  }

  .header-container > h2 {
    font-size: var(--title);
  }

  .header-container > span {
    text-align: center;
    font-size: var(--headline);
    color: var(--grey-1);
  }

  @media (min-width: 700px) {
    .header-container {
      flex-direction: row;
      padding: 40px 0;
    }
  }
`;
