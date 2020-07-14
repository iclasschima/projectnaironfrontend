import React from "react";
import SidenavStyle from "./styles/sidenav"

import { Link, useRouteMatch, useLocation } from "react-router-dom"

import { BsDot, BsTools} from "react-icons/bs"
import {MdDashboard, MdFolder} from "react-icons/md"
import {FaWallet, FaHandshake} from "react-icons/fa"
import {IoMdHelpCircle}  from "react-icons/io"
import {
    AiTwotoneSetting,
    AiFillNotification,
    AiFillCloseCircle
} from "react-icons/ai"

const SideNavbar = ({sideNav, showSideNav}) => {

    return (
        <SidenavStyle show={sideNav}>

            <div id="top_header">
                <span>yconnector</span>
                
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

    let { url } = useRouteMatch();
    const {pathname} = useLocation()

    return (
        <ul>
            <li>
                <Link 
                    to={`${url}`}
                    className={pathname === "/dashboard" ? "active" : ""}> 
                    <MdDashboard /> Dashboard
                </Link>
            </li>
            <li>
                <Link 
                    to={`${url}/create-ads`} 
                    className={pathname === `${url}/create-ads` ? "active" : ""}>
                    <AiFillNotification /> Create Ads
                </Link>
            </li>
            <li>
                <Link 
                     to={`${url}/manage-ads`} 
                    className={pathname === `${url}/manage-ads` ? "active" : ""}>
                    <AiTwotoneSetting /> Manage Ads
                </Link>
            </li>
            <li>
                <Link 
                    to={`${url}/fund`} 
                    className={pathname === `${url}/fund` ? "active" : ""}>
                    <FaWallet /> Fund Wallet
                </Link>
            </li>
            <li>
                <Link 
                    to={`${url}/campaigns`} 
                    className={pathname === `${url}/campaigns` ? "active" : ""}>
                    <MdFolder id="all_campaigns_icon"/> Campaigns
                </Link>
            </li>
            <li>
                <Link 
                   to={`${url}/transactions`}  
                    className={pathname === `${url}/transactions` ? "active" : ""}>
                    <FaHandshake /> Transactions
                </Link>
            </li>
            <li>
                <Link 
                    to={`${url}/help`}  
                    className={pathname === `${url}/help` ? "active" : ""}>
                    <IoMdHelpCircle /> Help
                </Link>
            </li>
            <li>
                <Link 
                    to={url}
                    onClick={() => showSideNav(!sideNav)}
                    className="d-block d-md-none">
                    <AiFillCloseCircle /> Close
                </Link>
            </li>

            <hr />

            <li>
                <Link 
                    to={`${url}/settings`} 
                    className={pathname === `${url}/settings` ? "active" : ""}>
                    <BsTools /> Settings
                </Link>
            </li>

            <hr />
        </ul>
    )
}



export default SideNavbar;