import {makeAutoObservable} from "mobx";
import {login, refresh} from "../http/UserApi";


export default class LoginStore {

    constructor() {
        this._isAuthUser = false
        makeAutoObservable(this)
    }

    doAutorizate(name, password) {
        return login(name, password)
            .then((response) => {
                this._isAuthUser = true
                debugger
                localStorage.setItem('token', response.headers.jwtoken)
                localStorage.setItem('RefreshToken', response.headers.refreshtoken)
                return Promise.resolve(response)
            })
            .catch(() => {
                debugger
                return Promise.reject()
            })
    }



    doRefresh() {
        return refresh()
            .then((response)=> {
                this._isAuthUser = true
                debugger
                localStorage.setItem('token', response.headers.jwtoken)
                localStorage.setItem('RefreshToken', response.headers.refreshtoken)
                return Promise.resolve()
            })
            .catch((error)=>{
                this._isAuthUser = false
                debugger
                localStorage.removeItem('token')
                localStorage.removeItem('RefreshToken')
                this._isAuthUser = false
                return Promise.reject()
            })
    }


    checkStatus(status) {

        debugger
        if(status===468){
            return this.doRefresh()
        }

        if(status===403){
            return Promise.reject()
        }

        return Promise.reject()

    }

}