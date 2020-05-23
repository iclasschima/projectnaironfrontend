import React from "react";
import {ThemeProvider} from "styled-components"

import Sidenav from "./dashboard/SideNavbar"
import Body from "./dashboard/Body"

const Dashboard = () => {

    const theme = {
        primaryColor: "#B66FD3",
        secondaryColor: "#2D2D2D",
        mdFontSize: "15px"
    }

    return (
        <ThemeProvider theme={theme}>
            <Sidenav />
            <Body />
        </ThemeProvider>
    )
}



export default Dashboard;