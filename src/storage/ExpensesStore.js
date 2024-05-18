import {makeAutoObservable} from "mobx";

export default  class ExpensesStore {
    constructor() {
        this._userID = '1'
        this._expenses = [
            {name:'firstExpen', value:10,status: false, description:'expDescripton1'},
            {name:'secondExpen', value:20,status: false, description:'expDescripton2'},
            {name:'thirdExpen', value:30,status: false, description:'expDescripton3'},
            {name:'fourthExpen', value:40,status: true, description:'expDescripton4'},
            {name:'fifthExpen', value:50,status: true, description:'expDescripton5'},
        ]
        makeAutoObservable(this)
    }

    get userID(){
        return this._userID
    }

    setExpenses(expenses){
        this._expenses = expenses
    }

    get expenses(){
        return this._expenses
    }
}