import React, {useContext} from 'react';
import {Context} from "../index";
import ListElement from "../components/ListElement";
import {ListGroup} from "react-bootstrap";


const ExpensesPage = () => {
    const {expenses} = useContext(Context)
    return (
        <>
            <ListGroup>
                {expenses.expenses.map((sal) =>{
                    return(
                        <ListElement
                            key = {sal.id}
                            id = {sal.id}
                            name = {sal.name}
                            value = {sal.value}
                            status = {sal.status}
                            date = {sal.date}
                        />
                    )
                })}

            </ListGroup>

        </>
    );
};

export default ExpensesPage;