import React from "react"

import {Route, Switch} from "react-router-dom"

import ContentSyle from "../styles/content"
import Index from "./content/Index"

const Content = () => {
    return (
        <ContentSyle className="container-fluid">
             <Switch>
                <Route path="/dashboard" component={Index} />
            </Switch>
        </ContentSyle>
       
    )
}

export default Content