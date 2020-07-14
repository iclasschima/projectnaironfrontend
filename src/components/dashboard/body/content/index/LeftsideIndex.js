import React, {useState} from "react"
import {Col, Row, Table} from "react-bootstrap"

import { Dropdown } from 'semantic-ui-react'

import {Bar, Chart} from "react-chartjs-2"
import LeftSideStyled from "../../../styles/leftSideIndex"

const Leftside = () => {

    const [dataOption] = useState([
            {key: "14", value: "14", text: "Last 14 Days"},
            {key: "21", value: "21", text: "Last 21 Days"},
            {key: "28", value: "28", text: "Last 28 Days"}
        ])

    Chart.defaults.global.defaultFontSize = 14
    Chart.defaults.global.defaultFontFamily = "Fira Sans"

    const [chartData] = useState({
        labels: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa","Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        datasets: [
            {
                label: "Views",
                data: [
                    400,
                    225,
                    300,
                    390,
                    240,
                    390,
                    270,
                    170,
                    265,
                    350,
                    320,
                    370,
                    230,
                    130
                ],
                backgroundColor: "#4D8AF0"
            }
        ]
    })

    const getValue = (e, {value}) => {
        //To get the value of the dropdown
    }
    
    return  (
       
            <Col md={9} className="p-0 m-0">
                 <LeftSideStyled>
                     <Row id="barchart_title">
                        <Col className="pl-5">
                            <span>Ad Performance</span>
                        </Col>
                        <Col md={2} xs={6}>

                            <Dropdown
                                inline
                                onChange={getValue}
                                options={dataOption}
                                defaultValue={dataOption[0].value}
                                />
                                                    
                        </Col>
                     </Row>

                    <Bar
                        id="bar_chart"
                        data={chartData}
                        options={{
                            scales: {
                                xAxes: [{
                                    barPercentage: 0.5,
                                }]
                            },
                            title: {
                                display: false,
                                text: "Views",
                            },
                            legend: {
                                display: false,
                            }
                    }}
                        
                    />
                    <Col id="bottom_table">
                        <TableContent />
                        </Col>

                        <Col id="bottom_button_div">
                        <a href="/advertForm" className="btn">Create New Campaign</a>
                    </Col>
                </LeftSideStyled>
            </Col>
        
    )
}



const TableContent = () => {
    const [table] = useState([
        {id: "1", title: "Paystack", reach: "400", impressions: "2M", budget: "51,000.00", status: "Delivering", ctr: "15%" },
        {id: "2", title: "Semicolon", reach: "38", impressions: "1M", budget: "18,050.00", status: "Out Of Budget", ctr: "20%"},
        {id: "3", title: "Total Oil", reach: "101385", impressions: "300K", budget: "23,400.00", status: "Paused", ctr: "42%"},
        {id: "4", title: "First Bank", reach: "5", impressions: "1.4M", budget: "37,500.00", status: "Completed", ctr: "10%" }
    ])

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Campaigns</th>
                    <th>Status</th>
                    <th>Budget</th>
                    <th>Reach</th>
                    <th>Impressions</th>
                    <th>CTR</th>
                </tr>
            </thead>
            <tbody>
                {table.map(data => {

                    const colorclass = data.status.toLowerCase();
                     
                    return (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td><a href="/dashboard">{data.title}</a></td>
                            <td
                                className={colorclass === "delivering" 
                                ? "text-success" : colorclass === "out of budget" 
                                ? "text-danger" : colorclass === "paused" 
                                ? "text-warning" : "text-success"}>
                                {data.status}
                            </td>
                            <td>{data.budget}</td>
                            <td>{data.reach}</td>
                            <td>{data.impressions}</td>
                            <td>{data.ctr}</td>
                        </tr>
                    )
                })}    
            </tbody>
        </Table>
    )
}

export default Leftside