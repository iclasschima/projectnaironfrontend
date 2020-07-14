import styled from "styled-components"

export default styled.div`
    font-size: ${props => props.theme.mdFontSize};
    font-family: 'Fira Sans', sans-serif;
    position: fixed;
    background-color: #0F52BA;
    min-height: 100%;
    width: 16rem;
    transition: ease-in .3s;
    padding: 0;
    letter-spacing: 0.5px; 
    

    @media screen and (max-width: 768px) {
        z-index: 2000;
        margin-left: ${props => props.show ? "" : "-250px"};
    }

    #top_header {
        padding: 0.56rem;
        text-align: center;
        background-color: #0F52BA; 
        height: 2.5rem !important;
        line-height: 2.2rem;
        span {
            color: #fff;
            font-size: 20px;
        }
    }

    ul {
        padding: 0;
        list-style-type: none;
        padding-top: 1rem;
        li {
            width: 100%; 
            a {
                padding: 0.9rem;
                padding-left: 2rem;
                display: block;
                color: #fff;
                opacity: 0.65;
                border-left: 2px solid #2D2D2D;     
                font-weight: 700;
                svg {
                    margin-right: 6%;
                    font-size: 1rem;
                    &#all_campaigns_icon {
                        font-size: 1.2rem;
                        margin-left: -2px !important;
                    }
                }&.active {
                    background-color: #4D8AF0;
                    border-left: 2px solid #fff !important;
                    color: #fff;
                    opacity: 1;
                }
                &:hover {
                    border-left: 2px solid #5E2D70;
                    text-decoration: none;
                    transition: ease all .6s;
                    background-color: #4D8AF0;
                    color: #fff;
                }
                
            }
        }
        hr {
            width: 75%;
            border: 0.5px solid #FFFFFF;
            margin: 9px auto;
        }
    }

    #status_div {
        padding: 0 2rem;
        h6 {
            color: #fff;
            font-weight: 400;
            font-size: 13px;
        }
        p {
            color: #fff;
            padding-left: 1rem;
            position: relative;
            font-size: 12px;
           svg {
               position: absolute;
               font-size: 3rem;
               left: -9%;
               top: -70%;
                color: green;
           }
        }
    }
`