import {makeAutoObservable} from "mobx";

export default  class AdditionalIncomeStore {
    constructor() {
        this._userID = '1'
        this._additionalIncome = [
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

    setAdditionalIncome(additionalIncome){
        this._additionalIncome = additionalIncome
    }

    get additonalIncome(){
        return this._additionalIncome
    }
}