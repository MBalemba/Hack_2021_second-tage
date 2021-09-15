import {makeAutoObservable, toJS} from "mobx";
import {
    getExpectedDay,
    getExpensesByMonth, getHistoryExpenses,
    getTopExpensesForTheMonth,
    getTopThreeMonthly,
    getWeekGroup,
    login
} from "../http/UserApi";
import date from 'date-and-time';


export const statusCheck = (status) => {

}

export default class MainPageStore {

    constructor() {
        this._isAuthUser = false
        this._monthExpenses = []
        this._weekExpenses = {averageAmount:[], currentAmount: [], maxAmount: 0}
        this._topThree = {list: [], wholeSum: 0}
        this._radarData = {currentIndicators: [], monthlyAverages: []}


        this._historyData = []
        this._requestHistoreCount = 0
        this._maxHistory = null
        this._isFetchingHistory = false



        this._pieData = []

        makeAutoObservable(this)
    }


    topThreeMonthly() {
        return getTopThreeMonthly().then((response)=>{
            this._topThree = {...response.data}
            return Promise.resolve()
        }).catch(({response})=>{

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
            this._monthExpenses = response.data
            return Promise.resolve()
        }).catch(({response}) => {

            console.log('ExpensesByMonthError', response)
            return Promise.reject(response.data.status)
        })
    }

    weekGroupExpenses(){
        return getWeekGroup().then((response) => {
            console.log('_radarData', response)
            this._radarData = {...response.data}
            return Promise.resolve()
        }).catch(({response}) => {

            console.log('ExpensesByMonthError', response)
            return Promise.reject(response.data.status)
        })
    }

    doArray = (argMas) =>{
        const arr = []
        let i = 0

        argMas.forEach((el, index)=>{
            debugger

            if(i===0){

                arr.push({
                    date: el.date,
                    info: [{
                        currency: el.currency,
                        description: el.info,
                        sum: el.sum,
                    }]
                })
                i++;
            } else {
                if(arr[i-1].date === el.date){
                    arr[i-1] = {
                        date: el.date,
                        info: [...arr[i-1].info,{
                            currency: el.currency,
                            description: el.info,
                            sum: el.sum,
                        }]
                    }
                } else {
                    arr.push({
                        date: el.date,
                        info: [{
                            currency: el.currency,
                            description: el.info,
                            sum: el.sum,
                        }]
                    })
                    i++
                }
            }





        })

        debugger


        return arr

    }

    getQuery(){
        let str = '';

        str= '?page='+this._requestHistoreCount


        return str
    }

    historyExpenses(){


        return getHistoryExpenses(this.getQuery()).then((response) => {
            this._requestHistoreCount++
            console.log('this._requestHistoreCount: ', this._requestHistoreCount)

            if(response.data.length === 0){
                this._maxHistory = this._requestHistoreCount
                console.log('Максимальное значение поймано')
            }


            this._historyData = [...this._historyData, ...this.doArray(response.data)]
            return Promise.resolve()

        }).catch(({response}) => {

            console.log('ExpensesByMonthError', response)
            return Promise.reject(response.data.status)
        })
    }


    topExpensesForTheMonth(){
        return getTopExpensesForTheMonth().then((response) => {

            console.log('pieData ', response)
            this._pieData = [...response.data]
            return Promise.resolve()
        }).catch(({response}) => {

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

    get RadarData(){
        return  toJS(this._radarData)
    }

    get HistoryData(){
        return toJS(this._historyData)
    }

    get HistoryCount(){
        return this._requestHistoreCount
    }

    get HistoryMax(){
        return this._maxHistory
    }

    get FetchingHistory(){
        return this._isFetchingHistory
    }



    setFetchingHistory(bool) {
        this._isFetchingHistory = bool
    }


    get PieData() {
        return toJS(this._pieData)
    }

    get PieDataSum(){

        let arr = this._pieData.map(el=>el.summary)

        const sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue)

        return sum

    }

}