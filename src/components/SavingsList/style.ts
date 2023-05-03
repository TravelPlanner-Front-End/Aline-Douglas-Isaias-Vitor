import styled from "styled-components";

export const StyledDiv = styled.div`

    margin: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;

ul {
    width: 100%;

    padding: 25px 25px 6px 25px;
    
    border-radius: 10px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    background-color: var(--grey-3);

    display: flex;
    flex-direction: column;
}

div {
    width: 100%;
    height: 50px;

    border-radius: 10px;

    background-color: var(--color-primary);

    display: flex;
    justify-content: center;
    align-items: center;
}

p {

    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 26px;
    color: var(--grey-4);

}

@media(min-width: 769px) {
        width: 45%;
        
        margin-top: 0;
    
        position: fixed;
        top: 185px;
        right: 100px;

    div {
        height: 70px;
    }

    p {
        font-size: 25px;
    }


}

`