import React from "react"

import {Row, Col} from "react-bootstrap"
import { Input, Button, Icon, Popup } from 'semantic-ui-react'

import TopBarStyled from "../../../styles/topBarManageAds"

const TopBar = () => {
    return (
        <TopBarStyled>
            <Row>
                <Col md={3} xs={6}>
                <Popup
                    trigger={
                        <Input
                            icon='search' 
                            placeholder='Search campaign...'
                            iconPosition="left"
                            size="small"
                            fluid
                        />
                    }
                    content='You may search by campaign name'
                    on='focus'
                    size='tiny'
                    position='right center'
                />
                   
                </Col>
                <Col xs={6} md={9} className="text-right pr-md-5">
                    <Button
                        size="small"
                        color="green"
                    >
                        <Icon  name='plus'/>
                        Create campaign
                    </Button>
                </Col>
            </Row>
        </TopBarStyled>
    )
}

export default TopBar