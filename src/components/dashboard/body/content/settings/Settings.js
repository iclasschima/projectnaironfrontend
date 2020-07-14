import React, { useState, useEffect } from 'react'
import { Container } from "react-bootstrap"

import { Switch, Route, useLocation, Redirect } from "react-router-dom"

import Loadble from "react-loadable"

import Menu from "./Menu"
import Loader from "../../../../../_helpers/loader"

const Profile = Loadble({
    loader: () => import("./Profile"),
    loading: Loader,
    delay: 100
})

const Payment = Loadble({
    loader: () => import("./Payment"),
    loading: Loader,
    delay: 100
})

const Preferences = Loadble({
    loader: () => import("./Preferences"),
    loading: Loader,
    delay: 100
})

const Team = Loadble({
    loader: () => import("./Team"),
    loading: Loader,
    delay: 100
})



export default function Settings() {

    const [menu, setMenu] = useState("profile")

    return (
        <Container>
            <Menu menu={menu} setMenu={setMenu} />
            {menu === 'profile' && <Profile />}
            {menu === 'payment' && <Payment />}
            {menu === 'team' && <Team />}
            {menu === 'preferences' && <Preferences />}
            
        </Container>
    )
}
