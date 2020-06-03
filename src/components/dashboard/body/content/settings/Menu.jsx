import React from 'react'

import MenuStyled from "../../../styles/menu"

import { Menu as MenuBar } from 'semantic-ui-react'

export default function Menu({ menu, setMenu }) {

    return (
        <MenuStyled>
            <MenuBar
                pointing
                secondary
                size='small'
                widths='4'
            >      
                <MenuBar.Item
                    name='profile'
                    link
                    active={menu === 'profile'}
                    onClick={() => setMenu('profile')}
                />
                 <MenuBar.Item
                    name='payment'
                    link
                    active={menu === 'payment'}
                    onClick={() => setMenu('payment')}
                />
                 <MenuBar.Item
                    name='team'
                    link
                    active={menu === 'team'}
                    onClick={() => setMenu('team')}
                />
                 <MenuBar.Item
                    name='preferences'
                    link
                    active={menu === 'preferences'}
                    onClick={() => setMenu('preferences')}
                />
            </MenuBar>
        </MenuStyled>
    )
}
