import styled from "styled-components"

export default styled.div`

    #topnav {
        border-bottom: 0.5px solid #2D2D2D;
        margin-left: 17%;
        padding: 0.6rem 4rem;

        .navbar-brand {
            font-size: 16px;
            color: #34A853;
            span {
                font-weight: bold !important;
                margin-left: 7px
            }
        }

        #date {
            position: absolute;
            left: 55%;
            color: #2D2D2D;
            font-weight: 600;
        }

        #nav_item {
            #referesh {
                background-color: ${props => props.theme.primaryColor};
                padding: 0px 5px 1.5px;
                border-radius: 50%;
                color: #fff;
                margin-right: 3rem;
                height: 6rem !important;
                svg {
                    font-size: 15px;
                }
            }
            a {
                color: ${props => props.theme.secondaryColor};
                font-size: 18px;
                margin-right: 1rem;
                &:hover {
                    text-decoration: none
                }
                &#smiley_face {
                    color: ${props => props.theme.primaryColor};
                    span {
                        color: ${props => props.theme.secondaryColor};
                        font-size: 15px;
                        margin-left: 0.4rem;
                        font-weight: 300 !important
                    }
                }
            }
        }
    }

`