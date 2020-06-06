import React from "react"
import TopnavStyle from "../styles/topnav"

import {Navbar} from "react-bootstrap"

import {MdNotifications} from "react-icons/md"
import {FaUserCircle} from "react-icons/fa"
import {FiMenu} from "react-icons/fi"

import {Dropdown} from "semantic-ui-react"


const TopNavbar = ({sideNav, showSideNav}) => {
    const PATH = window.location.pathname

    let header

    switch (PATH) {
        case "/dashboard":
            header = "Dashboard"
            break;
        case "/advertForm":
             header = "Create Ads"
             break;
        case "/manage_ads":
            header = "Manage Ads"
            break;
        case "/medicals":
            header = "Medicals"
            break;
        case "/account":
            header = "Account"
            break;
        case "/market":
            header = "Market"
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