import styled from "styled-components";

export const StyledTaskCardListing = styled.ul`
    @import url('https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap'); 
    font-family: "SUSE", sans-serif;
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 1240px;
    height: calc(100vh - 100px);
    margin: auto;
    overflow: scroll;
    h2{
        font-size: 4.5vw;
    }

    @media screen and (max-width: 950px){
        &{
            height: calc(100vh - 60px);
        }
    }
`