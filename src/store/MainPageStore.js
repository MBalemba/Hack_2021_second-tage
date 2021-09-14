import {makeAutoObservable, toJS} from "mobx";
import {getExpectedDay, getExpensesByMonth, getTopThreeMonthly, login} from "../http/UserApi";
import date from 'date-and-time';


export const statusCheck = (status) => {

}

export default class MainPageStore {

    constructor() {
        this._isAuthUser = false
        this._monthExpenses = []
        this._weekExpenses = {averageAmount:[], currentAmount: [], maxAmount: 0}
        this._topThree = {list: [], wholeSum: 0}
        makeAutoObservable(this)
    }


    topThreeMonthly() {
        return getTopThreeMonthly().then((response)=>{

            console.log('TopThreeMonthly', response)
            this._topThree = {...response.data}
            return Promise.resolve()
        }).catch(({response})=>{
            debugger
            return Promise.reject(response.data.status)
        })
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
            this._monthExpenses = response.data
            return Promise.resolve()
        }).catch(({response}) => {
            debugger
            console.log('ExpensesByMonthError', response)
            return Promise.reject(response.data.status)
        })
    }

    weekGroupExpenses(){
        return getExpensesByMonth().then((response) => {
            debugger
            console.log('ExpensesByMonth', response)
            this._monthExpenses = {...response.data}
            return Promise.resolve()
        }).catch(({response}) => {
            debugger
            console.log('ExpensesByMonthError', response)
            return Promise.reject(response.data.status)
        })
    }






    get WeekExpenses() {
        return toJS(this._weekExpenses)
    }

    get ExpensesByMonth(){
        return toJS(this._monthExpenses)
    }

    get TopThreeMonth (){
        return toJS(this._topThree.list)
    }

    get MonthExpense (){
        return toJS(this._topThree.wholeSum)
    }

    get WeekExpense(){
        let count = 0;
        this._weekExpenses.currentAmount.forEach((el)=>{
            count+= el.sum
        })

        return + count
    }

}