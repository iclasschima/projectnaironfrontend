import React, {useState} from "react"

import IndexStyle from "../../styles/index"

import {Row, Col, Table} from "react-bootstrap"
import {AiFillPlusCircle} from "react-icons/ai"

const Index = () => {

    return (
        <IndexStyle>
            <Row>
                <Col md={7} xs={12} id="left_side_dashboard">
                    
                    <span>Ad Performance</span>
                    <span className="float-right">This Month</span>
                    
                </Col>

                <Col md={5} xs={12} id="right_side_dashboard">
                    <span id="set_opacity"></span>
                    <div id="right_board">
                        <h5>There are <span>254,432</span> possible audiences / customers in our network around you</h5>
                        <a href="/dahboard" className="btn">Get To Them Now</a>

                        <div id="change_location_link">
                            <span><a href="/dashboard">Change</a> if Lagos is not your location</span>
                        </div>
                    </div>         
                </Col>
            </Row>
            
            <Row>
                <Col id="bottom_table">
                    <TableContent />
                </Col>
            </Row>

            <Row>
                <Col id="bottom_button_div">
                    <a href="/dashboard" className="btn">Create New Campaign</a>
                </Col>
            </Row>
        </IndexStyle>
       
    )
}

const TableContent = () => {
    const [table] = useState([
        {id: "1", title: "Learn how to code with your phone", reach: "400", impressions: "450", conversions: "510" },
        {id: "2", title: "Buy new laptops with just 30k", reach: "38", impressions: "31", conversions: "18" },
        {id: "3", title: "Bank at your comfort with VillageBank", reach: "101385", impressions: "31", conversions: "5544"},
        {id: "4", title: "Visit a Chinese restuarant", reach: "5", impressions: "505", conversions: "3" }
    ])

    return (
        <Table striped bordered responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Ads Title / Name</th>
                    <th>Reach</th>
                    <th>Impressions</th>
                    <th>Conversions</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {table.map(data => {
                    return (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.reach}</td>
                            <td>{data.impressions}</td>
                            <td>{data.conversions}</td>
                            <td id="btn_td"><a href="/dashboard" className="btn"><AiFillPlusCircle /> Increase Budget</a></td>
                        </tr>
                    )
                })}
                
            </tbody>
        </Table>
    )
}

export default Index