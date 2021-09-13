import {makeAutoObservable, toJS} from "mobx";
import {getExpectedDay, login} from "../http/UserApi";
import date from 'date-and-time';


export const statusCheck = (status) => {

}

export default class MainPageStore {

    constructor() {
        this._isAuthUser = false
        this._weekExpenses = {averageAmount:[], currentAmount: [], maxAmount: 0}
        makeAutoObservable(this)
    }


    getWeekExpenses() {
        function Sort_averageAmount(massive) {

            const days = {
                'Monday': 1,
                'Tuesday': 2,
                'Wednesday': 3,
                'Thursday': 4,
                'Friday': 5,
                'Saturday': 6,
                'Sunday': 7,
            }

            function compare(a, b) {
                debugger
                return days[a.data.trim()] - days[b.data.trim()]
            }


            let arr = massive

            return arr.sort(compare)
        }


        return getExpectedDay().then((response) => {
            /*const array = Sort_averageAmount(response.data.averageAmount)
            this._weekExpenses = {...response.data, averageAmount: array}*/
            this._weekExpenses = {...response.data}
            return Promise.resolve()
        }).catch(({response}) => {
            return Promise.reject(response.data.status)
        })
    }


    get WeekExpenses() {
        return toJS(this._weekExpenses)
    }

}