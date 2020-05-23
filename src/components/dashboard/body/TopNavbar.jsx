import React from "react"
import TopnavStyle from "../styles/topnav"

import {Navbar} from "react-bootstrap"

import {IoMdRefresh} from "react-icons/io"
import {AiTwotoneSetting} from "react-icons/ai"
import {MdNotifications} from "react-icons/md"
import {FaSmile} from "react-icons/fa"


const TopNavbar = () => {
    return (
        <TopnavStyle>
            <Navbar id="topnav" fixed="top">
                <Navbar.Brand>Bal. <span>N546,980.00</span></Navbar.Brand>

                <span id="date">02 April, 2020</span>
            
            <div id="nav_item" className="ml-auto">
               <a href="/dashboard" id="referesh"> <IoMdRefresh /></a>
               <a href="/dashboard"> <AiTwotoneSetting /></a>
               <a href="/dashboard"> <MdNotifications /></a>
               <a href="/dashboard" id="smiley_face"> <FaSmile /> <span>Michael Joshua</span></a>
            </div>
           
        </Navbar>
        </TopnavStyle>
    )
}

export default TopNavbar