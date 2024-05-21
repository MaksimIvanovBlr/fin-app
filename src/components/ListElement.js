import React, {useState} from 'react';
import {ListGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import EditValue from "./modals/EditValue";

const ListElement = (props) => {
    const [editVisible, setEditVisible] = useState(false)
    let statusName = 'not active'
    if(props.status === true){
        statusName = 'active'
    }
    return (
        <ListGroup.Item >
            id: {props.id}
            {props.name} |
            {props.value} |
            {statusName} |
            {props.date} |
            {props.type}
            <Button onClick={()=>setEditVisible(true)}>
                ok
            </Button>
            <EditValue props={props} status={statusName}   show={editVisible} onHide={()=> setEditVisible(false)}/>
        </ListGroup.Item>


    );
};

export default ListElement;