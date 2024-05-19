import React, {useContext, useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";


const MainUserInfo = observer(({show, onHide}) => {

    const {userInfo} = useContext(Context)
    const [dateValue, setDateValue] = useState(userInfo.salaryDay)
    const [perDay, setPerDay] = useState(userInfo.valuePerDay)


    const handleDateInput = (e) => {
        setDateValue(e.target.value)
    }

    const handlePerDayInput = (e) => {
        setPerDay(e.target.value)
    }

    const handleInfoSave = () => {
        userInfo.setReservValue(perDay)
        userInfo.setSalaryDay(dateValue)
        console.log(perDay ,dateValue)

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
                    Основные данные
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6> Расход на день: {userInfo.valuePerDay}</h6>
                <Form>
                    <Form.Control
                        value={perDay}
                        type='number'
                        onChange={handlePerDayInput}
                        placeholder={"расход на день..."}
                    />
                </Form>
                <hr/>
                <h6>Расчетное число: {userInfo.salaryDay}/месяц/год</h6>
                <Form>
                    <Form.Control
                        className='mt-2'
                        value={dateValue}
                        type='number'
                        onChange={handleDateInput}
                        placeholder={"расчетное число..."}
                    />


                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={handleInfoSave}>Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default MainUserInfo;