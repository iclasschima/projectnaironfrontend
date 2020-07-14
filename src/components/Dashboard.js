import React, {useState} from "react";
import {ThemeProvider} from "styled-components"

import Sidenav from "./dashboard/SideNavbar"
import Body from "./dashboard/Body"

import DashboardStyled from "./dashboard/styles/dashboard"

const Dashboard = () => {

    const [sideNav, showSideNav] = useState(false)

    const theme = {
        primaryColor: "#0F52BA",
        secondaryColor: "#0F52BA",
        mdFontSize: "13px"
    }

    return (
        <ThemeProvider theme={theme}>
            <DashboardStyled>
                <Sidenav sideNav={sideNav} showSideNav={showSideNav}/>
                <Body sideNav={sideNav} showSideNav={showSideNav}/>
            </DashboardStyled>
            
        </ThemeProvider>
    )
}



export default Dashboard;