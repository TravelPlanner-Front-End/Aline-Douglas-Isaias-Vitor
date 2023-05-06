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
    justify-content: space-between;
    margin: 3rem auto;
    max-width: 1200px;

    .travelContainer {
      display: flex;
      flex-direction: column;
    }
  }    
`


