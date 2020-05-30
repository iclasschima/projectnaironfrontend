import React, {useState} from "react"

import BottomTableStyled from "../../../styles/bottomTableManageAds"

import { 
    Row, 
    Col, 
    Table
 } from "react-bootstrap"

import {Form} from "react-bootstrap"

import  { 
    Button, 
    Icon, 
    Checkbox, 
    Pagination, 
    Dropdown,
} from "semantic-ui-react"

import {Modal} from "react-bootstrap"

const BottomTable = () => {

    const [state, setState] = useState("Filter by status")

    const [checked, setChecked] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChecked = (e, { value }) => setChecked(value)

    const handleChange = (e, {value}) => {
        setState(value.charAt(0).toUpperCase() + value.slice(1))
    }

    const statusOptions = [
        {key: 1, text: "Delivering", value: "delivering"},
        {key: 2, text: "Out Of Budget", value: "out of budget"},
        {key: 3, text: "Paused", value: "paused"},
        {key: 4, text: "Completed", value: "completed"}
    ]

    const buttons= [
        {text: "Duplicate", icon: "copy"},
        {text: "Edit", icon: "pencil"},
        {text: "Refresh", icon: "redo"},
        {text: "Delete", icon: "trash"},
        {text: "Pause", icon: "pause"}
    ]

    return (
        <BottomTableStyled>
            <Row>
                <Col md={3}>
                    <Dropdown
                        button
                        className='icon'
                        floating
                        labeled
                        icon='filter'
                        options={statusOptions}
                        search
                        text={state}
                        onChange={handleChange}
                        autoComplete='on'
                    />
                </Col>
                <Col xs={12} md={9} className="text-md-right mt-md-0 mt-2 pr-4">
                    {buttons.map(button => (
                        <div id="buttons">
                         <Button
                            className="d-none d-md-block"
                            size="mini"
                            icon={button.icon}
                            content={button.text}
                            />
                         <Button
                            id="small_buttons"
                            size="mini"
                            className="d-block d-md-none"
                            icon={button.icon}
                            />
                        </div>
                    ))}
                   
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md={{ span: 4, offset: 8 }}>
                    <span>Records Per Page</span>
                    
                    <Button.Group size="mini">
                        <Button content="10" disabled color="green"/>
                        <Button icon>
                            <Icon name='chevron left' />
                        </Button>
                        <Button icon>
                            <Icon name='chevron right' />
                        </Button>
                    </Button.Group>
                    <Button size='tiny' onClick={handleShow}>
                        <Icon name='download'/>Export
                    </Button>

                    <Modal size="sm" centered show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title as='span' bold>Export Settings</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Check
                                    type="radio"
                                    label="CSV"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    inline
                                    />
                                <Form.Check
                                    type="radio"
                                    label="XLS"
                                    inline
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    />
                            <Checkbox
                                radio
                                label='CSV'
                                name='radioGroup'
                                value='csv'
                                checked={checked === 'csv'}
                                onChange={handleChecked}
                            />
                            </Form.Group>
                            <Form.Group>
                            <Checkbox
                                radio
                                label='XLS'
                                name='radioGroup'
                                value='xls'
                                checked={checked === 'xls'}
                                onChange={handleChecked}
                            />
                            </Form.Group>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button color='green' onClick={handleClose}>
                            Done
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
            
            <Row className="mt-4">
                <Col>
                    <TableContent />
                </Col>
            </Row>
            <Row>
                <Col className="text-right mt-4" md={{ span: 4, offset: 8 }}>
                <Pagination
                    size='mini'
                    activePage='1'
                    boundaryRange='1'
                    // // onPageChange={this.handlePaginationChange}
                    // siblingRange='2'
                    totalPages='4'
                        // // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
                        // ellipsisItem={showEllipsis ? undefined : null}
                        // firstItem={showFirstAndLastNav ? undefined : null}
                        // lastItem={showFirstAndLastNav ? undefined : null}
                        // prevItem={showPreviousAndNextNav ? undefined : null}
                        // nextItem={showPreviousAndNextNav ? undefined : null}
                    />
                </Col>
            </Row>
        </BottomTableStyled>
    )
}


const TableContent = () => {
    const [table] = useState([
        {id: "1", title: "Paystack", start: "Apr 18", end: "On-going", spent: "1,840.00", reach: "400", impressions: "2M", budget: "51,000.00", status: "Delivering", ctr: "15%" },
        {id: "2", title: "Semicolon", start: "May 24", end: "May 29", spent: "750.00", reach: "38", impressions: "1M", budget: "18,050.00", status: "Out Of Budget", ctr: "20%"},
        {id: "3", title: "Total Oil", start: "May 25", end: "June 25", spent: "970.00", reach: "101385", impressions: "300K", budget: "23,400.00", status: "Paused", ctr: "42%"},
        {id: "4", title: "First Bank", start: "Jun 02", end: "Jul 12", spent: "2080.00", reach: "5", impressions: "1.4M", budget: "37,500.00", status: "Completed", ctr: "10%" },
        {id: "5", title: "GT Bank", start: "Jul 18", end: "Jul 28", spent: "1,840.00", reach: "400", impressions: "2M", budget: "51,000.00", status: "Delivering", ctr: "15%" },
        {id: "6", title: "Forte Oil", start: "Jul 24", end: "On-going", spent: "750.00", reach: "38", impressions: "1M", budget: "18,050.00", status: "Out Of Budget", ctr: "20%"},
        {id: "7", title: "Dangote", start: "Aug 25", end: "Sep 09", spent: "970.00", reach: "101385", impressions: "300K", budget: "23,400.00", status: "Paused", ctr: "42%"},
        {id: "8", title: "Stefem Agro", start: "Feb 02", end: "On-going", spent: "2080.00", reach: "5", impressions: "1.4M", budget: "37,500.00", status: "Completed", ctr: "10%" },
        {id: "9", title: "Trolley Food", start: "Jan 25", end: "On-going", spent: "970.00", reach: "101385", impressions: "300K", budget: "23,400.00", status: "Paused", ctr: "42%"},
        {id: "10", title: "Domino's", start: "Jan 02", end: "Sep 16", spent: "2080.00", reach: "5", impressions: "1.4M", budget: "37,500.00", status: "Completed", ctr: "10%" }
    ])

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th><Checkbox disabled/></th>
                    <th>Campaigns</th>
                    <th>Status</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Budget</th>
                    <th>Reach</th>
                    <th>Impressions</th>
                    <th>Spent</th>
                    <th>CTR</th>
                </tr>
            </thead>
            <tbody>
                {table.map(data => {

                    const colorclass = data.status.toLowerCase();
                     
                    return (
                        <tr key={data.id}>
                            <td><Checkbox /></td>
                            <td><a href="/dashboard">{data.title}</a></td>
                            <td
                                className={colorclass === "delivering" 
                                ? "text-success" : colorclass === "out of budget" 
                                ? "text-danger" : colorclass === "paused" 
                                ? "text-warning" : "text-success"}>
                                {data.status}
                            </td>
                            <td>{data.start}</td>
                            <td>{data.end}</td>
                            <td>{data.budget}</td>
                            <td>{data.reach}</td>
                            <td>{data.impressions}</td>
                            <td>{data.spent}</td>
                            <td>{data.ctr}</td>
                        </tr>
                    )
                })}    
            </tbody>
        </Table>
    )
}


export default BottomTable