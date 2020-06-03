import React from "react"

import { Route, Switch, useRouteMatch } from "react-router-dom"
import Loadable from "react-loadable"
import Loader from "../../../_helpers/loader"

import ContentSyle from "../styles/content"



const IndexPage = Loadable({
    loader: () => import("./content/index/Index"),
    loading: Loader,
    delay: 100
})

const ManageAds = Loadable({
    loader: () => import("./content/manageAds/ManageAds"),
    loading: Loader,
    delay: 100
})

const Settings = Loadable({
    loader: () => import("./content/settings/Settings"),
    loading: Loader,
    delay: 100
})

const Content = () => {
    let { path } = useRouteMatch();

    return (
        <ContentSyle className="container-fluid">
             <Switch>
                <Route path={`${path}`} component={IndexPage} exact />
                <Route path={`${path}/manage_ads`} component={ManageAds} />
                <Route path={`${path}/settings`} component={Settings} />
            </Switch>
        </ContentSyle>
    )
}

export default Content