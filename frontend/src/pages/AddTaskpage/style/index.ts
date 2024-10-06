import styled from "styled-components";

export const StyledAddTaskpage = styled.main`
    @import url('https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap'); 
    position: relative;
    height: calc(100vh - 100px);
    & form{
        font-family: "SUSE", sans-serif;
        font-weight: bold;
        background-image: linear-gradient(to top, orange, rgb(255,190,0));
        border-radius: 25px 40px;
        color: white;
        padding: 20px 30px;
        position: absolute;
        font-size: 1.9em;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        gap: 12px;
        & div{
            display: flex;
            flex-direction: column;
            & input{
                font-size: inherit;
                text-indent: 10px;
            }
        }
        & button{
            font-size: inherit;
            margin-top: 5px;
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
        &{
            font-size: 2em;
            padding: 28px 20px;
        }
    }

    @media screen and (max-width: 550px){
        &{
            font-size: 2em;
            padding: 36px 20px;
        }
    }
    
    @media screen and (max-width: 450px){
        &{
            font-size: 2em;
            padding: 36px 20px;
        }
    }
`