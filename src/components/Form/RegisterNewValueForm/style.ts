import styled from "styled-components";

export const StyledForm = styled.form `
 
  margin: 1rem;

  padding: 1rem;

  border-radius: var(--radius-form);
  box-shadow: var(--shadow);

  background-color: var(--grey-3);

  button {
    width: 100%;
    height: 48px;

    margin-top: 1rem;

    border: none;
    border-radius: var(--radius-default);

    background-color: var(--color-primary);

    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.625rem;
    color: var(--grey-4);
  }

  @media (min-width: 769px) {
    width: 350px;
    height: 340px;
    margin: 0 1rem 1rem;
  }
`