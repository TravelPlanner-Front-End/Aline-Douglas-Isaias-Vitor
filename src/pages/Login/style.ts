import styled from "styled-components";

export const StyledLoginPage = styled.section `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  div:nth-child(2) {
   display: none;
  }

  @media(min-width: 769px) {
    gap: 2.8rem;

    div:nth-child(2) {
      display: flex;
      height: 500px;
    }
  }
`