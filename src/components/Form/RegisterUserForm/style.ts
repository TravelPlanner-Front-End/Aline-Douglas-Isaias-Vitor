import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  width: 300px;
  height: max-content;

  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 10px;

  filter: drop-shadow(5px 5px 10px rgba(128, 128, 128, 0.52));

  background-color: #f8f9fa;

  h2 {
    margin-top: 20px;

    color: #565555;
    font-weight: bold;
  }

  input {
    width: 230px;
  }

  button {
    color: #f8f9fa;

    margin: 25px 0;

    width: 250px;
    height: 40px;

    border-radius: 30px;
    border-style: none;

    cursor: pointer;

    background-color: #ab7ca9;
  }

  @media (min-width: 700px) {
    width: 400px;
    height: 700px;

    font-size: 18px;

    input {
      width: 330px;
    }
  }
  @media (min-width: 1000px) {
    max-height: 90%;
  }
`;
