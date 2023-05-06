import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  width: 300px;
  height: max-content;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0.625rem;
  
  filter: drop-shadow(5px 5px 10px rgba(128, 128, 128, 0.52));
  background-color: #F8F9FA;
  
  h2 {
    margin-top: 20px;
    color: #565555;
    font-weight: bold;
  }
  
  input {
    width: 230px;
  }
  
  button {
    color: #F8F9FA;
    margin: 0.5rem 0;
    width: 250px;
    border-radius: var(--radius-default);
    border-style: none;
    cursor: pointer;
    background-color: #AB7CA9;
    padding: 0.9rem 1rem;
    text-align: center;
  }

  span {
    font-size: 0.75rem;
    color: var(--grey-0);
    margin: 0.5rem 0.125rem auto;
  }

  a {
    background-color: var(--grey-0);
    color: var(--grey-4);
    padding: 0.5rem 1rem;
    border-radius: var(--radius-default);
    width: 250px;
    text-align: center;
    margin: 0.5rem 0;
  }
  
  @media (min-width: 700px) {
    width: 400px;
    height: 650px;
    font-size: 1.125rem;
    
    button {
      padding: 0.9rem 0;
      width: 350px;
      margin: 0;
      text-align: center;
      font-size: 1rem;
      font-weight: 500;
    }

    a {
      width: 350px;
      padding: 0.6rem 0;
    }

    input {
      width: 330px;
    }
  }
  
  @media (min-width: 1000px) {
    max-height: 90%;
  }
`;