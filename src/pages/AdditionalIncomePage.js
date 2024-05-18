import React, {useContext} from 'react';
import {Context} from "../index";
import ListElement from "../components/ListElement";
import {ListGroup} from "react-bootstrap";

const AdditionalIncomePage = () => {
    const {additionalIncome} = useContext(Context)
    return (
        <>
            <ListGroup>
                {additionalIncome.additonalIncome.map((sal) =>{
                    return(
                        <ListElement
                            key = {sal.index}
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

export default AdditionalIncomePage;