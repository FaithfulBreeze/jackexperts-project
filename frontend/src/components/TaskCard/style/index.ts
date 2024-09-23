import styled from "styled-components";

export const StyledTaskCard = styled.li`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-family: inherit;
    padding: 10px 24px;
    background-color: #FEFEFE;
    box-shadow: 0px 3px 3px #00000033;
    border: 4px solid orange;
    border-radius: 0px 16px 16px 16px;
    &>div{
        display: flex;
        justify-content: space-between;
        & div#right-side{
            text-align: right;
        }
    }
    & button{
        box-shadow: 1px 1px 1px #00000066;
        padding: 3px 10px;
        border-radius: 8px;
        background-color: orange;
        color: white;
        font-weight: bold;
        font-size: 1.13em;
        transition-duration: 200ms;
        cursor: pointer;
        &:hover{
            transform: scale(1.05);
            box-shadow: 4px 4px 4px #00000055;
        }
    }
`