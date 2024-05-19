import React, {useContext, useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";


const ChangeReserv = observer(({show, onHide}) => {

    const [value, setValue] = useState('')
    const {userInfo} = useContext(Context)

    const handleReservInput = (e) => {
        setValue(e.target.value)
    }

    const handleSaveReserv = () => {
        userInfo.setReservValue(value)

    }

    return (
        <Modal
            show = {show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Изменить резерв
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2> Резерв: {userInfo.reservValue}</h2>
                <Form>
                    <Form.Control
                        value={value}
                        type='number'
                        onChange={handleReservInput}
                        placeholder={"введите новое значение..."}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={handleSaveReserv} >OK</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default ChangeReserv;