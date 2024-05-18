import {makeAutoObservable} from "mobx";

export default class UserInfoStore {
    constructor() {
        this._userID = '1'
        this._reservValue = 1555
        this._perMonth = 'perMonth'
        this._bufferMoney = 444
        this._valuePerDay = 20
        this._salaryDay = 10
        this._realBalance = 2750
        makeAutoObservable(this)
    }
    get userID(){
        return this._userID
    }

    setReservValue(reservValue){
        this._reservValue = reservValue
    }

    get reservValue(){
        return this._reservValue
    }


    setPerMouth(perMonth){
        this._reservValue = perMonth
    }

    get perMonth(){
        return this._perMonth
    }


    setBufferMoney(bufferMoney){
        this._reservValue = bufferMoney
    }

    get bufferMoney(){
        return this._bufferMoney
    }


    setValuePerDay(valuePerDay){
        this._reservValue = valuePerDay
    }

    get valuePerDay(){
        return this._valuePerDay
    }



    setSalaryDay(salaryDay){
        this._reservValue = salaryDay
    }

    get salaryDay(){
        return this._salaryDay
    }



    setRealBalance(realBalance){
        this._realBalance = realBalance
    }

    get realBalance(){
        return this._realBalance
    }
}