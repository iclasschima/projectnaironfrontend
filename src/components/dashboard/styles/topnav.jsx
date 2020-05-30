import styled from "styled-components"

export default styled.div`

    #topnav {
        background-color: #fff;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.25);
        z-index: 1;
        
        .navbar-brand {
            font-size: 13px;
            padding-left: 2.5rem;
            font-weight: 500;

            svg {
                position: absolute;
                left: 4%;
                font-size: 1.6rem;
                top: 20%;
                color: ${props => props.theme.secondaryColor};
            }
        }

        #nav_item {
                a {
                    color: ${props => props.theme.secondaryColor};
                    font-size: 18px;
                    margin-right: 1rem;
                    
                    &:hover {
                        text-decoration: none
                    }
                }
                span {
                    svg {
                        margin-right: 9px
                    }
                    .text {
                        font-size: 13px !important
                    }
                }
            }


        @media screen and (min-width: 768px) {
            margin-left: 16rem;
            padding: 0.6rem 3rem;
            .navbar-brand {
                padding-left: 0;
                span {
                    margin-left: 7px
                }
            }

            #nav_item {
                a {
                    color: ${props => props.theme.secondaryColor};
                    font-size: 18px;
                    margin-right: 1rem;
                    span {
                        display: inline !important
                    }
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
    }
`