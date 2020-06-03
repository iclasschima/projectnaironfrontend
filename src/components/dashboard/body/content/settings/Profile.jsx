import React from 'react'

import ProfileStyled from "../../../styles/profile"

import { Row, Col, Form } from "react-bootstrap"
import { Input, Button } from 'semantic-ui-react'

export default function Profile() {
    return (
        <ProfileStyled className="row justify-content-md-center mt-4">
            <Col md='6'>
                <h5 className='mb-4 text-center'>My Profile</h5>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column md='2'>Full Name </Form.Label>
                        <Col>
                            <Input fluid value='Nairon' readOnly />
                        </Col>
                        <Col>
                            <Input fluid value='Nairon' readOnly />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column md='2'> Email </Form.Label>
                        <Col>
                            <Input fluid value='klart@nairon.com' readOnly />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column md='2'> Phone </Form.Label>
                        <Col>
                            <Input fluid value='+234 903 186 1100' readOnly />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column md='2'> Role </Form.Label>
                        <Col>
                            <Input fluid value='Admin' readOnly />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column md='2'> Password </Form.Label>
                        <Col>
                            <Button content='change password' size='tiny' />
                        </Col>
                    </Form.Group>
                    
                    <Button className='mt-2 float-right' size='tiny' type='submit' content='Save Changes' />
                </Form>
            </Col>
        </ProfileStyled>
    )
}
