import styled from "styled-components";

export const StyledTaskCard = styled.li`
    font-size: 1.15em;
    box-shadow: 0px 2px 3px #00000044;
    padding: 12px 16px;
    transition: 150ms;
    border-left: 8px solid orange;
    &:hover{
        background-color: #F9F9F9;
    }
    &>div{
        display: flex;
        align-items: center;
        & input.checkbox{
            transform: scale(2.4);
            margin-right: 50px;
            accent-color: orange;
        }
        & button{
            font: inherit;
            margin-bottom: 6px;
            margin-right: 12px;
            background-color: transparent;
            background-color: orange;
            color: white;
            font-weight: bold;
            padding: 3px 6px;
            transition: 600ms;
            &:hover{
                outline: black 2px solid;
                cursor: pointer;
            }
        }
        & h2{
            margin-bottom: 10px;
        }
        & p{
            margin-bottom: 10px;
        }
        & p#timeout{
            font-size: 0.8em;
        }
    }

    @media screen and (max-width: 650px){
        &{
            font-size: 2em;
        }
    }

    @media screen and (max-width: 500px){
        &{
            font-size: 2em;
        }
    } 
`