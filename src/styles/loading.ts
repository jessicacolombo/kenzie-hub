import styled from 'styled-components';

export const LoadingContainer = styled.div`
  background-color: var(--grey-4);
  display: flex;
  height: 100vh;
  align-items: center;
  z-index: 1;
  position: absolute;
  width: 100vw;
  justify-content: center;

  &&.minor {
    height: 60vh;
  }

  div {
    width: 10px;
    height: 10px;
    background: var(--color-primary);
    border-radius: 50%;
    margin-left: 15px;
    animation: move 1s ease-in-out infinite alternate;
  }

  div:nth-child(1) {
    animation-delay: -0.4s;
  }

  div:nth-child(2) {
    animation-delay: -0.2s;
  }

  @keyframes move {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(100%);
    }
  }
`;
