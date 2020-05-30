import React from "react"

import BodyStyle from "./styles/body"

import TopNavbar from "./body/TopNavbar"
import Content from "./body/Content"

const Body = ({sideNav, showSideNav}) => {

    const handleClick = () => {
        if (sideNav) showSideNav(!sideNav)
    }

    return (
        <BodyStyle className="container-fluid" onClick={handleClick}>
            <TopNavbar sideNav={sideNav} showSideNav={showSideNav}  />
            <Content />
        </BodyStyle>
    )
}

export default Body