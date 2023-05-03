import styled from "styled-components";

export const StyledInputContainer = styled.div `

  margin-top: 16px;

  display: flex;
  flex-direction: column;

  label {

    margin: 16px 0;

    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: var(--grey-0);
  }

  input {
    height: 48px;

    border: 1px solid var(--grey-0);

    padding-left: 16px;

    border-radius: 100px;
  }

  span {
    margin-top: 5px;

    font-size: 10px;
    color: var(--red-value)
  }
`
