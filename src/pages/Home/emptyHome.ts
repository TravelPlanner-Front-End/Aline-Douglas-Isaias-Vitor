import styled from "styled-components";

export const StyledMainBox = styled.main`
  .sectionEmptyHome {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    
    .container {
      display: flex;
      flex-direction: column;
      gap: 30px;
      justify-content: center;
      align-items: center;

      .divImgHome figure {
        width: 100%;
        max-width: 800px;

        img {
          width: 100%;
        }
      }

      .divButtonAddTravel {
        .buttonAddTravel {
          width: 299px;
          height: 50px;
          background: var(--color-primary);
          box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
          border-radius: 46px;
          border: none;
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 1.2rem;
          line-height: 1.5rem;
          color: var(--grey-4);
          cursor: pointer;
        }
      }
    }
  }
`;
