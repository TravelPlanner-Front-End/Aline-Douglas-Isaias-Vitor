import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  padding: 5%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  div img {
    display: none;
  }

  @media (min-width: 1000px) {
    padding: 50px;

    div img {
      margin-left: 50px;
      display: block;
    }
  }
`;
