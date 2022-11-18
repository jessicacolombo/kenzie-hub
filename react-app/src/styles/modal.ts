import styled from 'styled-components';

export const ContainerModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  width: 90%;
  max-width: 380px;
  background-color: var(--grey-3);
  z-index: 10;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 50%);
  color: var(--grey-0);

  .modal__header {
    display: flex;
    background-color: var(--grey-2);
    justify-content: space-between;
    align-items: center;
    border-radius: 4px 4px 0px 0px;
    padding: 15px 20px;
  }

  .modal__header > h2 {
    font-size: var(--title);
    font-weight: 400;
  }

  .modal__header > button {
    border: none;
    background-color: var(--grey-2);
    padding: 5px;
    color: var(--grey-1);
  }

  form {
    padding: 25px 20px 40px 20px;
  }
`;
