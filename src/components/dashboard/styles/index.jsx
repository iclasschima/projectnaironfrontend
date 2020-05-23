import styled from "styled-components"

export default styled.div`
    #left_side_dashboard {
        span {
            font-size: ${props => props.theme.mdFontSize};
        }
    }
 
    #right_side_dashboard {
        padding: 3rem 0rem 0rem;
        #set_opacity {
            background-color: #f7fbff;
            position: absolute;
            width: 100%;
            height: 85%;
            border-radius: 3px;
            z-index: -1;
        }
        #right_board {
            padding: 2rem;
            font-size: ${[props => props.theme.mdFontSize]} ;
            h5 {
                width: 70%;
                line-height: 26px;
                margin-bottom: 1rem;
                font-weight: 600;
                span {
                    color: #6FA8D3;
                }
            }

            .btn {
                background-color: #6FA8D3;
                border: 0;
                width: 12rem;
                color: #fff;
                border-radius: 3px;
                padding: 8px
            }

            #change_location_link {
                margin-top: 2rem;
                color: ${props => props.theme.secondaryColor};
                font-size: 14px;
                a {
                
                    cursor: pointer !important;
                }
            }

        }
    }

    #bottom_table {
        margin-top: 2rem;
        padding: 0; 

        .table-striped>tbody>tr:nth-child(odd)>td, 
        .table-striped>tbody>tr:nth-child(odd)>th {
            background-color: #f7fbff;
        }

        th {
            font-weight: 500;
        }

        td {
            &#btn_td {
                text-align: center;
            }
            a {
                background-color: #D9E8F3;
                border: 0;
                width: 11rem;
                font-size: 13px;
                color: #84B5D9;
                font-weight: 500;
                svg {
                    margin-right: 5px;
                    font-size: 1.1rem
                }
            }
        }
    }

    #bottom_button_div {
        background-color: #f7fbff;
        text-align: center;
        padding: 0.7rem;
        margin-top: 1rem;
        a {
            background-color: #D9E8F3;
            border: 1px solid ${props => props.theme.primaryColor};
            color: ${props => props.theme.primaryColor} !important;
            padding: 7px;
            svg {
                margin-right: 5px;
                font-size: 1.1rem
            }
        }
    }
`