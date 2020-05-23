import React from "react"

import BodyStyle from "./styles/body"

import TopNavbar from "./body/TopNavbar"
import Content from "./body/Content"

const Body = () => (
    <BodyStyle>
        <TopNavbar />
        <Content />
    </BodyStyle>
)

export default Body