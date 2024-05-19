import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {observer} from "mobx-react-lite";


const Recalculation = observer(({show, onHide}) => {




    return (
        <Modal
            show = {show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Пересчет
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2><strong style={{color:'red'}}>Внимание!</strong> </h2>
                <h6>После подтверждения операции будут:
                <ol>
                    <li>обязательные платежи переведены в статус 'неоплаченные'</li>
                    <li>сброшен и пересчитан резерв</li>
                </ol>
                </h6>
                <Button variant={'outline-success'} ><strong style={{color:'red'}}>пересчитать</strong></Button>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default Recalculation;