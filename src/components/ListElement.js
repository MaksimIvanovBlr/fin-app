import React from 'react';
import {ListGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ListElement = (props) => {
    let statusName = 'not active'
    if(props.status === true){
        statusName = 'active'
    }
    return (
        <ListGroup.Item>
            {props.name} |
            {props.value} |
            {statusName} |
            {props.date} |
            {props.type}
            <Button >
                ok
            </Button>
        </ListGroup.Item>


    );
};

export default ListElement;