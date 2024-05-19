import React, {useState} from 'react';

import {NavLink} from "react-router-dom";
import {ADDITIONAL_INCOME_LIST_ROUTE, EXPENSES_LIST_ROUTE, SALARY_LIST_ROUTE} from "../utils/consts";
import {ListGroup} from "react-bootstrap";
import ChangeReserv from "../components/modals/ChangeReserv";
import Recalculation from "../components/modals/Recalculation";
import MainUserInfo from "../components/modals/MainUserInfo";
import {observer} from "mobx-react-lite";



const UserSettings = observer(() => {

    const [changeReservVisible, setChangeReservVisible] = useState(false)
    const [mainDataVisible, setMainDataVisible] = useState(false)
    const [recalculateVisible, setRecalculateVisible] = useState(false)

    return (
        <div>

            <ListGroup>

                <NavLink to={EXPENSES_LIST_ROUTE}>
                    <ListGroup.Item>
                    Расходы
                    </ListGroup.Item>
                </NavLink>

                <NavLink to={SALARY_LIST_ROUTE}>
                    <ListGroup.Item>
                        Основной доход
                    </ListGroup.Item>
                </NavLink>

                <NavLink to={ADDITIONAL_INCOME_LIST_ROUTE}>
                    <ListGroup.Item>
                        Дополнительный доход
                    </ListGroup.Item>
                </NavLink>


                <ListGroup.Item  onClick={() => setChangeReservVisible(true)}>
                    Изменить резерв
                </ListGroup.Item>



                <ListGroup.Item onClick={() => setMainDataVisible(true)}>
                    Основные данные
                </ListGroup.Item>



                <ListGroup.Item  onClick={() => setRecalculateVisible(true)}>
                    Пересчитать резерв
                </ListGroup.Item>


            </ListGroup>
            <ChangeReserv show={changeReservVisible} onHide={() => setChangeReservVisible(false)}/>
            <Recalculation show={recalculateVisible} onHide={() => setRecalculateVisible(false)}/>
            <MainUserInfo show={mainDataVisible} onHide={() => setMainDataVisible(false)}/>
        </div>
    );
});

export default UserSettings;