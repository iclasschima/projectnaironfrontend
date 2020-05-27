import styled from "styled-components"

export default styled.div`
    text-align: center;
    border-left: 10px solid #E5E5E5;
    height: 98vh;
    padding: 5rem 0 0;
    background-color: #F8F8F8;

    h6 {
        font-size: ${props => props.theme.mdFontSize};
        font-weight: 500;
        border-bottom: 0.5px solid #E5E5E5;
        padding-bottom: 1rem
    }

    #content {
        margin-top: 2.5rem;
        span {
            font-weight: 500;
        }
        p {
            margin: 2rem 0;
        }
        a {
            background-color: #E5E5E5;
            border: 0.5px solid rgba(0, 0, 0, 0.25);
            border-radius: 6px;
            width: 9rem;
            color: #444444;
            padding: 6px;
            font-weight: 400;
            font-size: 13px;
            /* border-radius: 100% 50% 50% 100%/75% 69% 69% 75%; */
            &:hover {
                background-color: #ebebeb
            }
        }
    }
`