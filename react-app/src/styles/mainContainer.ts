import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;

  .content {
    display: flex;
    width: 90%;
    max-width: 1000px;
    color: var(--grey-0);
    justify-content: space-between;
    margin: 25px auto;
  }

  .content.header {
    flex-direction: row;
    align-items: center;
  }

  .content.list {
    flex-direction: column;
  }

  .list {
    background-color: var(--grey-3);
    padding: 25px;
    border-radius: var(--border-radius);
    justify-content: flex-start;
    gap: 18px;
    overflow-y: auto;
    max-height: 400px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .content > h2 {
    font-size: var(--title);
  }

  .content > h3 {
    font-size: 14px;
  }

  .pluss-button {
    border: none;
    color: var(--grey-0);
    border-radius: var(--border-radius);
    background-color: var(--grey-2);
    width: 30px;
    font-size: 20px;
    height: 30px;
  }
`;
