import styled from "styled-components";

export const StyledHomeSection = styled.section `
  display: flex;
  flex-direction: column;
  width: 100vw;
  
  .travelContainer{
    padding: 0; 
    display: flex;
    flex-direction: column;
  }

  @media(min-width: 769px) {
    flex-direction: row;
    justify-content: space-around;
    margin-top: 5rem;

    .travelContainer {
      display: flex;
      flex-direction: column;
    }
  } 
`