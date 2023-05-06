import styled from "styled-components";

export const StyledDiv = styled.div`
  
  margin: 1rem;

  padding: 1rem;

  border-radius: var(--radius-form);
  box-shadow: var(--shadow);

  background-color: var(--grey-3);

  p {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 2.5rem;
    color: var(--grey-0);
  }

  @media (min-width: 769px) {
    margin: 1.8rem 1rem 0;
    height: 156px;
    margin-bottom: 0;
  }
`;
