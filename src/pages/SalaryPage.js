import React, {useContext} from 'react';

import {values} from "mobx";
import {Context} from "../index";
import ListElement from "../components/ListElement";
import {ListGroup} from "react-bootstrap";

const SalaryListFinApp = () => {
    const {salary} = useContext(Context)
    return (
        <>

            <ListGroup>
                {salary.salary.map((sal) =>{
                    return(

                        <ListElement
                            key = {sal.index}
                            name = {sal.name}
                            value = {sal.value}
                            status = {sal.status}
                            date = {sal.date}
                            type = 'salary'
                        />
                    )

                })}

            </ListGroup>

        </>
    );
};

export default SalaryListFinApp;