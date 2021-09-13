import {$authHost, $authHostRefresh, $host} from "./index";


export const registration = async (obj) => {
    console.log(process.env.REACT_APP_API_URL)
        const response = await $host.post('user/registration', obj)
        debugger
        return response
}

export const login = async (login, password) => {
    const response = await $host.post('login', {login: login, password: password})
    debugger
    return response
}


/*
export const check = async () => {
    const response = await $authHost.get('user/checkRole')
    return response
}*/

export const getExpectedDay = async () => {
    const response = await $authHost.get('/transactions/expensesByDay')
    return response
}

export const refresh = async () => {
    const response = await $authHostRefresh.post('refreshToken')
    return response
}











