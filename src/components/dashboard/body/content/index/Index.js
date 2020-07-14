import React from "react"

import IndexStyle from "../../../styles/index"
import LeftsideIndex from "./LeftsideIndex"
import RightsideIndex from "./RightsideIndex"

import { Row } from "react-bootstrap"
import { toast } from "react-toastify"


const Index = () => {

    // toast.success("Welcome Micheal Junior")

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