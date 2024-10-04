import styled from "styled-components";

export const StyledTaskCard = styled.li`
    display: flex;
    font-size: 1.4em;
    flex-direction: column;
    gap: 10px;
    font-family: inherit;
    padding: 10px 24px;
    background-color: #FEFEFE;
    box-shadow: 0px 3px 3px #00000033;
    border: 4px solid orange;
    border-radius: 0px 16px 16px 16px;
    & .mobile{
        display: none;
        font-size: 3rem;
        & p#content{
            padding: 10px 0;
        }
    }
    &>h3{
        text-align: right;
    }
    &>div{
        display: flex;
        justify-content: space-between;
        &#info-container p#content{
            margin-bottom: 20px;
        }
        & div#right-side{
            text-align: right;
        }
    }
    & button{
        box-shadow: 1px 1px 1px #00000066;
        padding: 3px 10px;
        border-radius: 4px;
        background-color: orange;
        color: white;
        font-weight: bold;
        font-size: 1.13em;
        transition-duration: 200ms;
        cursor: pointer;
        &:hover{
            transform: scale(1.01);
            box-shadow: 2px 2px 3px #00000055;
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
            padding: 5px 12px;
        }
        .desktop{
            display: none;
        }
        .mobile{
            display: block;
            &#controls-container{
                display: flex;
                justify-content: space-between;
            }
        }
    }
`