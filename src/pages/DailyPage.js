import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Form, FormControl, ListGroup} from "react-bootstrap";
import {Context} from "../index";
import Button from "react-bootstrap/Button";

const DailyPage = observer(() => {

    const {userInfo} = useContext(Context)
    const [spentMoney, setSpentMoney] = useState(0)

    const handleBufferInput = (e) => {
        setSpentMoney(e.target.value)
    }

    const handleBufferMoneySave = () =>{

        userInfo.setBufferMoney(userInfo.bufferMoney-spentMoney)
    }
    return (
        <ListGroup>

            <ListGroup.Item>
                резерв: {userInfo.reservValue}
            </ListGroup.Item>
            <ListGroup.Item>
                буффреные деньги: {userInfo.bufferMoney}
            </ListGroup.Item>
            <ListGroup.Item>
                потраченные деньги:
                <Form className='mt-2'>
                    <FormControl
                        value={spentMoney}
                        type='number'
                        onChange={handleBufferInput}
                        placeholder={"потрачено..."}
                    />
                </Form>
                <Button
                    className='mt-2' onClick={handleBufferMoneySave}
                >
                    OK
                </Button>
            </ListGroup.Item>
        </ListGroup>
    );
});

export default DailyPage;