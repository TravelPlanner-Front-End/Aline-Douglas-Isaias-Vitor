import styled from "styled-components";

export const StyledSavings = styled.div`

  margin: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    width: 100%;
    height: 225px;
    padding: 1.5625rem 1.5625rem 0.375rem 1.5625rem;

    border-radius: 10px;
    box-shadow: var(--shadow);

    background-color: var(--grey-3);

    display: flex;
    flex-direction: column;

    

    li {
      min-height: 45px;
      border: none;
    }
  }

  div {
    width: 100%;
    height: 50px;
    border-radius: var(--radius-form);
    background-color: var(--color-primary);
    
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
  }

  p {
    font-weight: 700;
    font-size: 0.9375rem;
    color: var(--grey-4);
  }

  @media (min-width: 769px) {
    width: 545px;
    height: 541px;

    margin: 0;

    ul {
      height: 500px;
      overflow-y: auto;

      li {
        min-height: 50px;
      }
    }
    
    ul::-webkit-scrollbar {
      width: 10px;
      background-color: var(--grey-4);
    }

    ul::-webkit-scrollbar-thumb {
      border-radius: var(--radius-form);
      background-color: var(--grey-3);
      border: solid 1px var(--grey-0);
    }

    div {
      height: 70px;
    }

    p {
      font-size: 25px;
    }
  }
`
