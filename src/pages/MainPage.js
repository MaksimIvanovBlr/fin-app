import React, {useContext, useState} from 'react';

import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {dayToSalary} from "../utils/dateCalculation";
import {dailyExpForMonth, predictedBalance, sumOfTrueOrFalseValue} from "../utils/simpleCalculation";
import {
    ADDITIONAL_INCOME_LIST_ROUTE,
    EXPENSES_LIST_ROUTE,
    SALARY_LIST_ROUTE,
    USER_SETTINGS_ROUTE
} from "../utils/consts";
import {Form, ListGroup, ListGroupItem} from "react-bootstrap";
import Button from "react-bootstrap/Button";


const MainPage = observer(() => {
    const { userInfo, expenses, salary, additionalIncome } = useContext(Context)

    const toSalary = dayToSalary(userInfo.salaryDay)
    const monthlyBasicIncome = sumOfTrueOrFalseValue(salary.salary, true)
    const forMonth = dailyExpForMonth(userInfo.valuePerDay, toSalary)
    const unpaidPayments = sumOfTrueOrFalseValue(expenses.expenses, false)
    const userReservValue = userInfo.reservValue
    const unusedAdditionalIncomes = sumOfTrueOrFalseValue(additionalIncome.additonalIncome, true)
    const userBufferMoney = userInfo.bufferMoney
    const  userPredictBalance = predictedBalance( forMonth, unpaidPayments,userReservValue, userBufferMoney, unusedAdditionalIncomes)
    const userInputBalanceValue = userInfo.realBalance

    const [inputRealBalance, setInputRealBalance] = useState(userInfo.realBalance)


    const handleRealBalanceInput = (e) => {
        setInputRealBalance(e.target.value)
    }

    const handleSave = () => {
        userInfo.setRealBalance(inputRealBalance)

    }


    return (
        <ListGroup>
            <NavLink to={SALARY_LIST_ROUTE} >
                <ListGroup.Item>
                    Основной доход за месяц: {monthlyBasicIncome}
                </ListGroup.Item>
            </NavLink>


                <NavLink to={USER_SETTINGS_ROUTE}>
                    <ListGroup.Item>
                        Дней до зарплаты: {toSalary}
                    </ListGroup.Item>
                </NavLink>


                <NavLink to={USER_SETTINGS_ROUTE}>
                    <ListGroup.Item>
                        На ежедневные расходы до конца месяца: {forMonth}
                    </ListGroup.Item>
                </NavLink>


                <NavLink to={EXPENSES_LIST_ROUTE}>
                    <ListGroup.Item>
                        Сумма не оплаченых платежей: {unpaidPayments}
                    </ListGroup.Item>
                </NavLink>

                <NavLink to={USER_SETTINGS_ROUTE}>
                    <ListGroup.Item>
                        Резерв: {userReservValue}
                    </ListGroup.Item>
                </NavLink>

                <NavLink to={USER_SETTINGS_ROUTE}>
                    <ListGroup.Item>
                        "Буфферные деньги": {userBufferMoney}
                    </ListGroup.Item>
                </NavLink>


                <ListGroup.Item>
                    Прогнозируемый остаток на карте: {userPredictBalance}
                </ListGroup.Item>

                <ListGroup.Item>
                    Действительный баланс карты: {userInfo.realBalance}
                </ListGroup.Item>

                <NavLink to={ADDITIONAL_INCOME_LIST_ROUTE}>
                    <ListGroup.Item>
                        Неиспользованые дополнительные доходы: {unusedAdditionalIncomes}
                    </ListGroup.Item>
                </NavLink>

                <ListGroup.Item>
                    Введите баланс карты:
                    <Form>
                    <Form.Control
                        className='mt-3'
                        type='number'
                        placeholder='Введите действительный баланс карты...'
                        value={inputRealBalance}
                        onChange={handleRealBalanceInput}
                    />
                        <Button className='mt-2' variant={'outline-success'} onClick={handleSave}>
                            OK
                        </Button>
                    </Form>
                </ListGroup.Item>
        </ListGroup>
    );
});

export default MainPage;