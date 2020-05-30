import styled from "styled-components"

export default styled.div`
        padding: 5rem 0 0 0;
        font-size: 13px;
        span {
            font-size: ${props => props.theme.mdFontSize};
            font-weight: 500;
        }

        .ui.inline.dropdown>.text {
                font-weight: 500 !important;
        }

        #barchart_title {
            border-bottom: 0.5px solid #E5E5E5;
            padding-bottom: 0.7rem
        }

        #bar_chart {
            max-height: 21rem !important;
            margin-top: 1rem;
            padding: 1rem;
        }

    #bottom_table {
        margin-top: 1.5rem;
        padding: 0px 2rem 0; 
        background-color: #FCFDFE;


        .table-striped>tbody>tr:nth-child(odd)>td, 
        .table-striped>tbody>tr:nth-child(odd)>th {
            background-color: #fff;
        }

        th {
            font-weight: 500;
            
        }

        td {
            font-size: 13px;
            a {
                color: #84B5D9;
                font-weight: 500 !important;
                &:hover {
                    text-decoration: none !important
                }
            }
        }
    }

    #bottom_button_div {
        text-align: center;
        margin-top: 1rem;
        a {
            background-color: #D9E8F3;
            border: 1px solid ${props => props.theme.primaryColor};
            color: ${props => props.theme.primaryColor} !important;
            padding: 6px;
            font-size: 13px;
        }
    }

`