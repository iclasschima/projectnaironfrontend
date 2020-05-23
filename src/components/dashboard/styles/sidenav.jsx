import styled from "styled-components"

export default styled.div`
    font-family: 'IBM Plex Sans', sans-serif;
    position: fixed;
    background-color: #2D2D2D;
    min-height: 100%;
    width: 17%;
    transition: ease-in .3s;
    z-index: 2;
    padding: 0;
    font-size: ${props => props.theme.mdFontSize};

    #top_header {
        padding: 0.7rem 0.5rem 0.3rem;
        text-align: center;
        p {
            font-size: 1.8rem;
            color: #fff;
            font-weight: 300
        }
    }

    hr {
        width: 75%;
        border: 0.5px solid #FFFFFF;
        margin: 0 auto;
    }

    #button_div {
        padding: 1rem;
        text-align: center;
        a {
            position: relative;
            background: ${props => props.theme.primaryColor};
            border: 0;
            width: 13rem;
            padding: 10px;
            color: #fff;
            border-radius: 1px;
            font-size: 15px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            svg {
                position: absolute;
                left: 13%;
                font-size: 1.5rem
            }
            &:hover {
                background-color: #bb86d1;
            }
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
                color: #ABABAB;
                border-left: 2px solid #2D2D2D;
                svg {
                    margin-right: 6%;
                    font-size: 1.3rem;
                    &#all_campaigns_icon {
                        font-size: 22px;
                        margin-left: -2px !important;
                    }
                }&:hover {
                    text-decoration: none;
                    background-color: #424242;
                    border-left: 2px solid #fff;
                    color: #fff;
                    transition: ease all .6s
                }
            }
        }
    }

    #status_div {
        padding: 2rem;
        h6 {
            color: #ABABAB;
            font-weight: 400;
        }
        p {
            color: #fff;
            /* border: 1px solid #ABABAB; */
            /* text-align: center; */
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