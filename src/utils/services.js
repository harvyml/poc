import { Redirect } from "react-router";
import { data } from "./db"
const { users } = data;

const api = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com'
/**
 * onSignin
 * @param {Object}: {email, password}
 * @returns Object
 */
export function onSignin({ email, password }) {
    const user = users.find(user => user.email === email)
    if (!user) {
        return { msg: 'user not registered', code: 3001 }
    }

    const isPasswordCorrect = user.password === password;

    if (isPasswordCorrect) {
        localStorage.setItem("uid", user.uid)
        return { ...user, code: 2001 }
    }
}


export function isLoggedIn() {
    const uid = localStorage.getItem('uid')
    const loggedInUser = users.find(user => user.uid == uid)
    if (loggedInUser) {
        window.location.replace("/panel/home");
    }
}

export function getUserData(){
    const uid = localStorage.getItem('uid')
    const loggedInUser = users.find(user => user.uid == uid)
    if (loggedInUser) {
        return loggedInUser
    }
    return null
}

export async function fetchManyBy({ keyword, startAt, limit }) {
    const request = await fetch(`${api}/search?q=${keyword}&index=${startAt}&limit=${limit}`, { method: "GET" })
    return await request.json()

}

export async function fetchTrackBy({ id }){
    const request = await fetch(`${api}/track/${id}`, { method: "GET" })
    return await request.json()
}