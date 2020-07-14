import React from "react"
import TopnavStyle from "../styles/topnav"

import { useRouteMatch, useLocation } from "react-router-dom"

import { Navbar } from "react-bootstrap"

import { MdNotifications } from "react-icons/md"
import { FaUserCircle } from "react-icons/fa"
import { FiMenu } from "react-icons/fi"

import { Dropdown } from "semantic-ui-react"



const TopNavbar = ({sideNav, showSideNav}) => {
    const { path } = useRouteMatch()
    const { pathname } = useLocation()

    let header

    switch (pathname) {
        case "/dashboard":
            header = "Dashboard"
            break;
        case `${path}/manage_ads`:
            header = "Manage Ads"
            break;
        case `${path}/create-ads`:
            header = "Create Ads"
            break;
        case `${path}/settings`:
            header = "Settings"
            break;
        case `${path}/campaigns`:
            header = "Campaigns"
            break;
        case `${path}/transactions`:
            header = "Transactions"
            break;
        case `${path}/fund`:
            header = "Fund Wallet"
            break;
        case "/help":
            header = "Help"
            break;
    
        default:
            break;
    }

    return (
        <TopnavStyle>
            <Navbar id="topnav" fixed="top">
                <Navbar.Brand><FiMenu className="d-block d-md-none" onClick={() => showSideNav(!sideNav)}/> {header}</Navbar.Brand>
            
            <div id="nav_item" className="ml-auto">
               <a href="/dashboard"> <MdNotifications /></a>
               <span> <FaUserCircle /> 
                    <Dropdown text="Michael Junior">
                    <Dropdown.Menu>
                    <Dropdown.Item text='Log Out' onClick={() => window.location.pathname = "/"} />
                    </Dropdown.Menu>
                </Dropdown>
               </span>
            </div>
           
        </Navbar>
        </TopnavStyle>
    )
}

export default TopNavbar