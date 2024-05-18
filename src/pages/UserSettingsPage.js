import React from 'react';

import {NavLink} from "react-router-dom";
import {ADDITIONAL_INCOME_LIST_ROUTE, EXPENSES_LIST_ROUTE, SALARY_LIST_ROUTE} from "../utils/consts";


const UserSettings = () => {
    return (
        <div>

            <ul>

                <NavLink to={EXPENSES_LIST_ROUTE}
                >                   <li className='list-acc'>
                    Расходы
                </li>
                </NavLink>

                <NavLink to={SALARY_LIST_ROUTE}>
                    <li className='list-acc'>
                        Основной доход
                    </li>
                </NavLink>

                <NavLink to={ADDITIONAL_INCOME_LIST_ROUTE}>
                    <li className='list-acc'>
                        Дополнительный доход
                    </li>
                </NavLink>


                <li className='list-acc'>
                    Изменить резерв
                </li>



                <li className='list-acc'>
                    Основные данные
                </li>



                <li className='list-acc'>
                    Пересчитать резерв
                </li>


            </ul>
        </div>
    );
};

export default UserSettings;