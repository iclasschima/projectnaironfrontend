import React from "react"

import ManageAdsStyled from "../../../styles/manageAds"

import TopBar from "./TopBar"
import BottomTable from "./BottomTable"

const ManageAds = () => {
    return (
        <ManageAdsStyled>
            <TopBar />
            <BottomTable />
        </ManageAdsStyled>
    )
}

export default ManageAds