import React from "react"


import  {Link} from "react-router-dom"

import {Col} from "react-bootstrap"

import RightSideStyled from "../../../styles/rightSideIndex"

const Rightside = () => {
    return (
        <Col md={3} className="p-0">
            <RightSideStyled>
                <h6>Stats</h6>
                <div id="content">
                    <span>Recent Ad</span>
                    <p>You have 4 ads review</p>
                    <Link to="/" className="btn">Create Ad</Link>
                </div>
            </RightSideStyled>
            
        </Col>
    )
}

export default Rightside