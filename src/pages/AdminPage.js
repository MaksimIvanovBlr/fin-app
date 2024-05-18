import React from 'react';
import {ListGroup} from "react-bootstrap";

const AdminPage = () => {
    return (
        <ListGroup>
            <ListGroup.Item> your ip address</ListGroup.Item>
            <ListGroup.Item> users</ListGroup.Item>
            <ListGroup.Item>ip addresses of visitors</ListGroup.Item>
            <ListGroup.Item>blocked users</ListGroup.Item>
            <ListGroup.Item>blocked ip addresses</ListGroup.Item>
            <ListGroup.Item>close registration</ListGroup.Item>
        </ListGroup>
    );
};

export default AdminPage;