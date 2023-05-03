import styled from "styled-components";

export const StyledForm = styled.form`

    margin: 16px;

    padding: 16px;

    border-radius: 10px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    background-color: var(--grey-3);

button {
    width: 100%;
    height: 48px;

    margin-top: 16px;

    border: none;
    border-radius: 100px;

    background-color: var(--color-primary);

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--grey-4);
}

@media (min-width: 769px) {
    width: 25%;

    margin-top: 185px;
    margin-left: 100px;
}

`