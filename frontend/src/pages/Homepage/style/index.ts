import styled from "styled-components";

export const StyledHomepage = styled.main`
    @import url('https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap'); 
    font-family: "SUSE", sans-serif;
    color: white;
    text-shadow: 2px 2px 2px #00000044;
    margin: auto;
    max-height: calc(100vh - 100px);
    overflow: hidden;
    @media screen and (max-width: 450px){
        &{
            padding: 20px 0 0 0;
            overflow: scroll;
        }
    }
    & div#main-container{
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 950px){
            &{
                gap: 0;
            }
        }
        @media screen and (max-width: 450px){
            &{
                flex-direction: column-reverse;
                gap: 50px;
            }
        }
        & div#image-container{
            max-width: 45%;
            padding: 10px 0 0 0;
            @media screen and (max-width: 450px){
                &{
                    max-width: 100%;
                }
            }
        }
        & div#image-container img{
            width: 85%;
            @media screen and (max-width: 950px){
                &{
                    width: 95%;
                }
            }
        }
        & div#content-container{
            width: 40%;
            position: relative;
            @media screen and (max-width: 450px){
                &{
                    width: 100%;
                    height: 300px;
                }
            }
        }
        & div#content-container img{
            width: 100%;
            z-index: -1;
            position: absolute;
            top: 55%;
            left: 50%;
            transform: translate(-50%, -50%);
            @media screen and (max-width: 450px){
                &{
                    min-height: 230%;
                }
            }
        }
        & div#content-container div{
            padding: 10px 0 0 35px;
            margin: auto;
            width: 65%;
            @media screen and (max-width: 950px){
                &{
                    padding: 10px 0 0 20px;
                }
            }
            @media screen and (max-width: 850px){
                &{
                    padding: 10px 0 0 15px;
                }
            }
            @media screen and (max-width: 450px){
                &{
                    padding: 70px 0 0 30px;
                }
            }
            @media screen and (max-width: 325px){
                &{
                    padding: 90px 0 0 25px;
                }
            }
            @media screen and (max-width: 255px){
                &{
                    padding: 110px 0 0 25px;
                }
            }
            & h1{
                font-weight: 900;
                font-size: 3.25em;
                margin-bottom: 18px;
            }
            & p{
                font-weight: 800;
                font-size: 1.3em;
                margin-bottom: 10px;
            }
            & a{
                text-decoration: none;
            }
            & button{
                display: block;
                box-shadow: 2px 2px 2px #00000066;
                margin-left: 53%;
                padding: 5px 10px;
                border-radius: 8px;
                background-color: white;
                color: orange;
                font-weight: bolder;
                font-size: 1.17em;
                transition-duration: 200ms;
                cursor: pointer;
                &:hover{
                    transform: scale(1.05);
                    box-shadow: 4px 4px 4px #00000055;
                }
                @media screen and (max-width: 850px){
                    padding: 2px 4px;
                }
                @media screen and (max-width: 325px){
                    margin-left: 45%;
                }
            }
        }
    }
    @media screen and (max-width: 1120px){
    }
    @media screen and (max-width: 950px){
        max-height: calc(100vh - 60px);
    }
    @media screen and (max-width: 850px){
    }
`