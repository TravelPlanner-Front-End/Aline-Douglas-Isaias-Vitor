import styled from "styled-components";

export const StyledFormModalBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    .divInputs {
      display: flex;
      gap: 20px;
      justify-content: center;
    }
  }

  .inputsRight,
  .inputsLeft {
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      width: 250px;
      height: 48px;
    }

    label {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 0.8rem;
      line-height: 0px;
      color: var(--grey-0);
    }
  }

  span {
    color: var(--red-value);
    font-size: 0.8rem;
  }

  .divButton {
    display: flex;
    justify-content: center;
    .buttonSubmit {
      width: 361px;
      height: 48px;
      background: var(--color-primary);
      border: 1.2182px solid var(--color-primary);
      border-radius: 100px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 26px;
      color: var(--grey-4);
      cursor: pointer;
    }
  }

  /*
  .divInputs {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    gap: 20px;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .inputsRight,
    .inputsLeft {
      display: flex;
      flex-direction: column;
      gap: 5px;
      input {
        width: 250px;
        height: 48px;
      }
    }

    span {
      color: var(--red-value);
      font-size: 0.8rem;
    }
  }

  .divButton {
    display: flex;
    justify-content: center;
    .buttonSubmit {
      width: 361px;
      height: 48px;
      background: var(--color-primary);
      border: 1.2182px solid var(--color-primary);
      border-radius: 100px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 26px;
      color: var(--grey-4);
      cursor: pointer;
    }
  }
  */
`;
