import styled from "styled-components";

export const StyledLi = styled.li`

    height: 40px;

    margin-bottom: 16px;

    border-radius: 10px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    background-color: var(--grey-3);

    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 26px;
    color: var(--grey-0);

    display: flex;
    justify-content: center;
    align-items: center;

span {
    color: var(--green-value);
}


@media(min-width: 769px) {
    height: 70px;

    font-size: 24px;
}

`