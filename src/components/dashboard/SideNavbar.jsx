import React from "react";
import SidenavStyle from "./styles/sidenav"

import {Link} from "react-router-dom"

import { BsDot, BsTools} from "react-icons/bs"
import {MdDashboard, MdFolder} from "react-icons/md"
import {AiTwotoneSetting, AiFillNotification, AiFillCloseCircle} from "react-icons/ai"
import {FaWallet, FaHandshake} from "react-icons/fa"
import {IoMdHelpCircle}  from "react-icons/io"


const SideNavbar = ({sideNav, showSideNav}) => {

    return (
        <SidenavStyle show={sideNav}>

            <div id="top_header">
                <span>nairon</span>
                
            </div>

            <Ul sideNav={sideNav} showSideNav={showSideNav}/>

            <hr />

            <div id="status_div">
                <h6>Status</h6>
                <p><BsDot /> Connected</p>
            </div>
            
        </SidenavStyle>
    )
}

const Ul = ({sideNav, showSideNav}) => {

    const PATH = window.location.pathname
    console.log(PATH)

    return (
        <ul>
            <li>
                <Link 
                    to="/dashboard" 
                    className={PATH === "/dashboard" ? "active" : ""}> 
                    <MdDashboard /> Dashboard
                </Link>
            </li>
            <li>
                <Link 
                    to="/create_ads" 
                    className={PATH === "/create_ads" ? "active" : ""}>
                    <AiFillNotification /> Create Ads
                </Link>
            </li>
            <li>
                <Link 
                    to="/manage_ads" 
                    className={PATH === "/manage_ads" ? "active" : ""}>
                    <AiTwotoneSetting /> Manage Ads
                </Link>
            </li>
            <li>
                <Link 
                    to="/fund_wallet" 
                    className={PATH === "/fund_wallet" ? "active" : ""}>
                    <FaWallet /> Fund Wallet
                </Link>
            </li>
            <li>
                <Link 
                    to="/all_campaigns"
                    className={PATH === "/all_campaigns" ? "active" : ""}>
                    <MdFolder id="all_campaigns_icon"/> All Campaigns
                </Link>
            </li>
            <li>
                <Link 
                    to="/transactions" 
                    className={PATH === "/transactions" ? "active" : ""}>
                    <FaHandshake /> Transactions
                </Link>
            </li>
            <li>
                <Link 
                    to="/help" 
                    className={PATH === "/help" ? "active" : ""}>
                    <IoMdHelpCircle /> Help
                </Link>
            </li>
            <li>
                <Link 
                    to={PATH}
                    onClick={() => showSideNav(!sideNav)}
                    className="d-block d-md-none">
                    <AiFillCloseCircle /> Close
                </Link>
            </li>

            <hr />

            <li>
                <Link 
                    to="/settings" 
                    className={PATH === "/help" ? "active" : ""}>
                    <BsTools /> Settings
                </Link>
            </li>

            <hr />
        </ul>
    )
}



export default SideNavbar;