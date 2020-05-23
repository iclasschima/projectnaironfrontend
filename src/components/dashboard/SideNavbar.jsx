import React from "react";
import SidenavStyle from "./styles/sidenav"

import {BsPlus, BsDot} from "react-icons/bs"
import {MdDashboard, MdFolder} from "react-icons/md"
import {AiTwotoneSetting, AiFillNotification} from "react-icons/ai"
import {FaWallet, FaHandshake} from "react-icons/fa"
import {IoMdHelpCircle}  from "react-icons/io"


const SideNavbar = () => {
    return (
        <SidenavStyle>

            <div id="top_header">
               <p>nairon</p>
            </div>

            <hr/>

            <div id="button_div">
                <a href="/dashboard" className="btn"><BsPlus /> New Advert</a>
            </div>

            <hr/>

            <Ul />

            <hr />

            <div id="status_div">
                <h6>Status</h6>
                <p><BsDot /> Connected</p>
            </div>
            
        </SidenavStyle>
    )
}

const Ul = () => (
    <ul>
        <li>
            <a href="/dashboard"> <MdDashboard /> Dashboard</a>
        </li>
        <li>
            <a href="/dashboard"><AiFillNotification /> Create Ads</a>
        </li>
        <li>
            <a href="/dashboard"><AiTwotoneSetting /> Manage Ads</a>
        </li>
        <li>
            <a href="/dashboard"><FaWallet /> Fund Wallet</a>
        </li>
        <li>
            <a href="/dashboard"><MdFolder id="all_campaigns_icon"/> All Campaigns</a>
        </li>
        <li>
            <a href="/dashboard"><FaHandshake /> Transaction</a>
        </li>
        <li>
            <a href="/dashboard"><IoMdHelpCircle /> Help</a>
        </li>
    </ul>
)

export default SideNavbar;