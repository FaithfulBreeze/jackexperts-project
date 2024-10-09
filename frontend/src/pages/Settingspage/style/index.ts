import styled from "styled-components";

export const StyledSettingspage = styled.main`
    position: relative;
    height: calc(100vh - 100px);
    &>div{
        @import url('https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap'); 
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 25px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: "SUSE", sans-serif;
        background-image: linear-gradient(to top, orange, rgb(255,190,0));
        border-radius: 25px 40px;
        color: white;
        padding: 20px 30px;
        text-align: center;
        font-size: 1.6em;
        &>div{
            text-align: left;
            display: flex;
            flex-direction: column;
            font-weight: 600;
            & p{
                font-size: 0.65em;
                color: red;
                font-weight: normal;
                margin-top: 6px;
            }
            & input{
                width: 100%;
                border-radius: 8px;
                font: inherit;
                text-indent: 10px;
                background-color: #FEFEFE;
            }
        }
        & button{
            display: block;
            min-width: 33vw;
            white-space: nowrap;
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
    }


    @media screen and (max-width: 1024px){
        & div{
            font-size: 5em;
            padding: 24px 16px;
        }
    }
    
`