import styled from "styled-components";

export const StyledHeaderBox = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  .containerHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background: var(--grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 1rem;
    position: relative; 

    .divUser h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.5rem;
      color: var(--grey-0);
    }
    .divUser h1 span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.5rem;
      color: var(--color-primary);
    }
    
    @media (min-width: 768px) {
      height: 70px;
    }

    .divButtons {
      display: flex;
      gap: 20px;
    
      .buttonDelete,
      .buttonLogout {
        display: none;
      }

      .iconHamburguer {
        color: var(--grey-1);
      }

      
      @media (min-width: 768px) {
        .iconHamburguer {
          display: none;
        }
        
        .buttonDelete {
          display: block;
          width: 200px;
          height: 40px;
          background: var(--grey-3);
          box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          border: none;
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 1rem;
          line-height: 1.5rem;
          color: var(--color-primary);
        }
        .buttonLogout {
          display: block;
          width: 70px;
          height: 40px;
          background: var(--grey-3);
          box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          border: none;
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 1rem;
          line-height: 1.5rem;
          color: var(--color-primary);
        }
      }
    }

    .divMenuHamburguer {
      position: absolute;
      right: 0px;
      top: 60px;
      z-index: 100;
      width: 160px;
      height: 100px;
      background: var(--grey-3);
      box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
      padding: 0.5rem;

      @media (min-width: 768px) {
        display: none;
      }

      .buttonDeleteHamburguer {
        width: 140px;
        height: 40px;
        background: var(--color-primary);
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        border: none;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 0.8rem;
        line-height: 26px;
        color: var(--grey-4);
      }
      .buttonLogoutHamburguer {
        width: 140px;
        height: 40px;
        background: var(--color-primary);
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        border: none;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 0.8rem;
        line-height: 26px;
        color: var(--grey-4);
      }
    }
  }
`;
