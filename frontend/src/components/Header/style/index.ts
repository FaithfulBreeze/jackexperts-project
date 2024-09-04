import styled from "styled-components";

export const StyledHeader = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap'); 
    font-family: "SUSE", sans-serif;
    color: white;
    padding: 0 64px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 5px #0000002F;
    z-index: 1;
    background-image: linear-gradient(to top, orange, rgb(255,180,0));
    & nav ul{
        font-size: 1.2em;
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
    @media screen and (max-width: 950px){
        height: 60px;
    }
    @media screen and (max-width: 550px){
        padding: 0 32px;
    }
`