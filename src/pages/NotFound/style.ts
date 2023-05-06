import styled from "styled-components";

export const StyledNotFound = styled.section `
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    max-width: 95%;
    min-height: 380px;
    display: flex;
    align-items: center;

    img{
      max-width: 100%;
      height: 100%;
    }
  }

  h1 {
    font-weight: 700;
    color: var(--grey-0);
    font-size: 1.875rem;
  }

  h2 {
    font-weight: 400;
    color: var(--grey-0);
    font-size: 1rem;
  }

  a {
    text-align: center;
    background-color: var(--grey-0);
    color: var(--grey-4);
    border-radius: var(--radius-default);
    margin-top: 1rem;
    padding: 0.4rem 1.5rem;
    font-size: 1rem;
  }

  @media(min-width: 769px) {
    h1 {
      font-size: 2.625rem;
    }

    h2 {
      font-size: 1.1rem;
    }

    a {
      font-size: 1.5rem;
      padding: 0.5rem 2rem;
    }
  }
`