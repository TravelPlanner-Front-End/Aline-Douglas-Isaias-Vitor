import styled from "styled-components";

export const StyledLoginForm = styled.form `
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 95%;
  height: 490px;
  box-shadow: var(--shadow);
  border-radius: var(--radius-form);

  img {
    max-width: 200px;
    margin: 1.2rem auto;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--grey-0);
    margin: 0 auto;
  }

  button {
    margin: 1rem 0 0.8rem;
    font-weight: 500;
    font-size: 1rem;
    padding: 0.8rem 1rem;
    border-radius: var(--radius-default);
    background-color: var(--color-primary);
    border: solid 1px var(--color-primary);
    color: var(--grey-4);
  }

  span {
    font-size: 0.75rem;
    color: var(--grey-0);
    margin: 0 auto;
  }

  a {
    text-align: center;
    margin-top: 0.8rem;
    background-color: var(--grey-1);
    color: var(--grey-4);
    font-size: 1rem;
    font-weight: 500;
    padding: 0.6rem 1rem;
    border-radius: var(--radius-default);
  }

  @media(min-width: 769px) {
    width: 386px;
    height: 570px;
    padding: 2rem 1rem;
    
    h1 {
      margin: 1rem auto;
    }

    button {
      padding: 1rem ;
    }

    span {
      font-size: 1rem;
    }

    a {
      padding: 0.8rem;
    }
  }
`