import styled from "styled-components";

export const StyledLi = styled.li`
  height: 2.5rem;

  margin-bottom: 1rem;

  border-radius: 10px;
  box-shadow: var(--shadow);

  background-color: var(--grey-3);

  font-style: normal;
  font-weight: 700;
  font-size: 0.6875rem;
  line-height: 1.625rem;
  color: var(--grey-0);

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: var(--green-value);
  }

  @media (min-width: 769px) {
    height: 70px;

    font-size: 1rem;
  }
`
