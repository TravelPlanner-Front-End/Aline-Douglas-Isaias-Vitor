import styled from "styled-components";

export const StyledInputContainer = styled.div `

  margin-top: 0.5rem;
  min-height: 95px;
  display: flex;
  flex-direction: column;

  label {
    margin: 0 0 0.4rem 0.5rem;

    font-weight: 400;
    font-size: 0.7614rem;
    color: var(--grey-0);
  }

  input {
    height: 2.6rem;

    border: 1px solid var(--grey-0);

    padding-left: 1rem;

    border-radius: var(--radius-default);
  }

  input:focus {
    border: solid 1px var(--grey-0);
    transition: 1.5s ease;
  }
  
  span {
    margin: 0.3125rem 0 0 0.5rem;
    align-self: flex-start;
    font-size: 0.625rem;
    color: var(--red-value)
  }
  
`

