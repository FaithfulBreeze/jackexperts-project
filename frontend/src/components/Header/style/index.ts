import styled from "styled-components";

export const StyledHeader = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap'); 
    font-family: "SUSE", sans-serif;
    font-size: 1.9em;
    color: white;
    padding: 0 64px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 5px #0000002F;
    z-index: 1;
    background-image: linear-gradient(to top, orange, rgb(255,180,0));
    div#mobile-menu{
        z-index: 1;
        background-color: orange;
        position: absolute;
        right: 0;
        top: 60px;
        width: 33vw;
        height: 100%;
        font-size: 1.4em;
        & nav ul{
            display: flex;
            flex-direction: column;
        }
    }
    & button{
        display: none;
        background-color: transparent;
        color: white;
        font-size: 2em;
    }
    & nav ul{
        font-size: 0.8em;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 20px;
        & li{
            & a{
                text-decoration: none;
                color: white;
            }
            cursor: pointer;
            transition-duration: 200ms;
            &:hover{
                transform: scale(1.1);
            }
        }
    }
    @media screen and (max-width: 1120px){
        &{
            font-size: 1.9em;
        }
    }
    @media screen and (max-width: 950px){
        &{
            height: 60px;
        }
    }
    @media screen and (max-width: 550px){
        &{
            padding: 0 32px;
            &nav ul{
                gap: 5px;
            }
            & nav ul li{
                font-size: 1.3em;
            }
        }
    }
    @media screen and (max-width: 455px){
        &{
            font-size: 3em;
            & #desktop{
                display: none;
            }
            & button{
                font-weight: bolder;
                width: 14%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 3%;
                & p{
                    width: 70%;
                    height: 5px;
                    background-color: white;
                }
            }
        }
    }
`