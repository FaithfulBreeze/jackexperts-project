import styled from "styled-components";

export const StyledDiv = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap'); 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "SUSE", sans-serif;
    background-image: linear-gradient(to top, orange, rgb(255,190,0));
    border-radius: 25px 40px;
    color: white;
    padding: 20px 30px;
    width: 33vw;
    text-align: center;
    font-size: 1.6em;
    & h2{
        margin-bottom: 20px;
    }
    @media screen and (max-width: 1024px){
        &{
            width: 40vw;
            font-size: 2.3em;
            padding: 28px 20px;
        }
    }
    @media screen and (max-width: 550px){
        &{
            width: 70vw;
            font-size: 5em;
            padding: 36px 20px;
        }
    }
    @media screen and (max-width: 450px){
        &{
            font-size: 2em;
            padding: 36px 20px;
        }
    }
    & div{
        font-weight: 600;
        text-align: left;
        margin-bottom: 25px;
        & input{
            width: 100%;
            border-radius: 8px;
            font: inherit;
            text-indent: 10px;
            background-color: #F4F4F4;
        }
        & p{
            font-size: 0.65em;
            color: red;
            font-weight: normal;
            margin-top: 6px;
        }
    }
    & button{
        border-radius: 8px;
        padding: 6px 0;
        background-color: white;
        color: orange;
        font: inherit;
        font-weight: 700;
        width: 100%;
        transition-duration: 200ms;
        cursor: pointer;
        &:hover{
            transform: scale(1.02);
            box-shadow: 0px 4px 4px #00000055;
        }
    }

`