import React, {useContext, useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";


const EditValue = observer(({props,status, show, onHide}) => {

    const {expenses} = useContext(Context)
    const [name, setName] = useState('')


    const handleNameInput = (e) => {
        setName(e.target.value)
    }

    const handleSave = () => {
        expenses.setExpenses()
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
                    Редактировать {props.name}, {props.value}, {props.id}, {status}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             <Form>
                     <Form.Control
                         value={name}
                         onChange={handleNameInput}
                         placeholder={"введите нименование..."}
                     />
             </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'}>Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default EditValue;