import styled from "styled-components";

export const StyledCartModalBox = styled.div`
  position: fixed;
  display: flex;
  align-items: center;

  //só aqui
  justify-content: center;

  width: 100%;
  height: 100vh;

  background: rgba(51, 51, 51, 0.5);
  z-index: 1001;

  .divBox {
    padding: 1rem;
    background-color: var(--grey-3);
    width: 300px;
    overflow-y: scroll;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 80%;

    @media (min-width: 768px) {
      background-color: var(--grey-3);
      width: 600px;
      height: 600px;
    }
    .divCloseModal {
      display: flex;
      justify-content: center;
      height: 60px;

      button {
        font-family: "Inter";
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 0px;
        background-color: transparent;
        color: #a3a3a3;
        height: 40px;
        margin: 20px;
        border: none;
        cursor: pointer;
      }
    }
  }
  /*
  .divBox {
    padding: 1rem;
    background-color: var(--grey-3);
    width: 300px;
    overflow-y: scroll;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    @media (min-width: 768px) {
      width: 600px;
      height: 50%;
    }

    .divCloseModal {
      display: flex;
      justify-content: center;
      height: 60px;

      button {
        font-family: "Inter";
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 0px;
        background-color: transparent;
        color: #a3a3a3;
        height: 40px;
        margin: 20px;
        border: none;
        cursor: pointer;
      }
    }
  }
  /*
  .divBox {
    padding: 1.5rem;
    background-color: var(--grey-3);
    width: 600px;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    @media (max-width: 450px){
                
            }
  }
  .divCloseModal {
    display: flex;
    justify-content: center;
    height: 60px;

    button {
      font-family: "Inter";
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 0px;
      background-color: transparent;
      color: #a3a3a3;
      height: 40px;
      margin: 20px;
      border: none;
      cursor: pointer;
    }
  }
  */
`;
