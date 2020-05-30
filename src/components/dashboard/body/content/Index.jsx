import React from "react"

import IndexStyle from "../../styles/index"
import LeftsideIndex from "./index/LeftsideIndex"
import RightsideIndex from "./index/RightsideIndex"

import {Row} from "react-bootstrap"


const Index = () => {

    return (
        <IndexStyle>
            <Row>
                <LeftsideIndex />
                <RightsideIndex />
            </Row>
        
        </IndexStyle>
       
    )
}

export default Index