import {makeAutoObservable, toJS} from "mobx";
import {getExpectedDay, getExpensesByMonth, login} from "../http/UserApi";
import date from 'date-and-time';


export const statusCheck = (status) => {

}

export default class MainPageStore {

    constructor() {
        this._isAuthUser = false
        this._monthExpenses = []
        this._weekExpenses = {averageAmount:[], currentAmount: [], maxAmount: 0}
        makeAutoObservable(this)
    }


    getWeekExpenses() {


        return getExpectedDay().then((response) => {
            this._weekExpenses = {...response.data}
            return Promise.resolve()
        }).catch(({response}) => {
            return Promise.reject(response.data.status)
        })
    }

    expensesByMonth(){
        return getExpensesByMonth().then((response) => {
            debugger
            console.log('ExpensesByMonth', response)
            this._monthExpenses = {...response.data}
            return Promise.resolve()
        }).catch(({response}) => {
            debugger
            return Promise.reject(response.data.status)
        })
    }


    get WeekExpenses() {
        return toJS(this._weekExpenses)
    }

    get ExpensesByMonth(){
        return toJS(this._monthExpenses)
    }

}