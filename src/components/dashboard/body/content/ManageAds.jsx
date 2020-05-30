import React from "react"

import ManageAdsStyled from "../../styles/manageAds"

import TopBar from "./manageAds/TopBar"
import BottomTable from "./manageAds/BottomTable"

const ManageAds = () => {
    return (
        <ManageAdsStyled>
            <TopBar />
            <BottomTable />
        </ManageAdsStyled>
    )
}

export default ManageAds