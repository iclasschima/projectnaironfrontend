import styled from "styled-components"

export default styled.div`

    padding-top: 4.2rem;
    
    @media screen and (min-width: 786px) {
        width: 50%;
        margin: 0 auto;
    }
    .row {
        padding-left: 3rem
    }

    .active {
        color: ${props => props.theme.primaryColor} !important;
        border-color:  ${props => props.theme.primaryColor} !important;
    }

    a {
        padding-bottom: 1rem !important
    }


`