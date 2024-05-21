import {makeAutoObservable} from "mobx";

export default  class AdditionalIncomeStore {
    constructor() {
        this._userID = '1'
        this._additionalIncome = [
            {id: 1,name:'firstExpen', value:10,status: false, description:'expDescripton1'},
            {id: 2,name:'secondExpen', value:20,status: false, description:'expDescripton2'},
            {id: 3,name:'thirdExpen', value:30,status: false, description:'expDescripton3'},
            {id: 4,name:'fourthExpen', value:40,status: true, description:'expDescripton4'},
            {id: 5,name:'fifthExpen', value:50,status: true, description:'expDescripton5'},
        ]
        makeAutoObservable(this)
    }

    get userID(){
        return this._userID
    }

    setAdditionalIncome(additionalIncome){
        this._additionalIncome = additionalIncome
    }

    get additonalIncome(){
        return this._additionalIncome
    }
}