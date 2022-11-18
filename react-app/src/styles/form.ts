import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input,
  select {
    background-color: var(--grey-2);
    border-radius: var(--border-radius);
    border: 1px solid var(--grey-2);
    outline: none;
    padding: 10px;
    color: var(--grey-0);
  }

  input::placeholder {
    color: var(--grey-1);
  }

  input:focus {
    border: 1px solid var(--grey-0);
  }

  label {
    font-size: var(--headline);
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  select {
    color: var(--grey-1);
  }

  option {
    background-color: var(--grey-2);
  }

  p {
    font-size: var(--headline);
    color: var(--grey-1);
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledContainer = styled.section`
  width: 90%;
  max-width: 350px;
  color: var(--grey-0);
  margin: 40px 0 70px 0;

  .form-container {
    border-radius: var(--border-radius);
    background-color: var(--grey-3);
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h2 {
    font-size: var(--title);
    text-align: center;
    font-size: var(--title);
    margin: 10px;
  }

  span {
    text-align: center;
    font-size: var(--headline);
    color: var(--grey-1);
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
  }
`;
