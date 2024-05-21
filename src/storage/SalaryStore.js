import {makeAutoObservable} from "mobx";

export default  class SalaryStore {
    constructor() {
        this._userID = '1'
        this._salary = [
            {id:1, name:'firstSalary', value:100,status: false, date:'10.01.2024'},
            {id:2, name:'secondSalary', value:200,status: false, date:'10.02.2024'},
            {id:3, name:'thirdSalary', value:300,status: false, date:'10.03.2024'},
            {id:4, name:'fourthSalary', value:400,status: true, date:'25.04.2024'},
            {id:5, name:'fifthSalary', value:501,status: true, date:'10.05.2024'},
        ]
        makeAutoObservable(this)
    }

    get userID(){
        return this._userID
    }

    setSalary(salary){
        this._salary = salary
    }

    get salary(){
        return this._salary
    }
}