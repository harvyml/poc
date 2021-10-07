import { Redirect } from "react-router";
import { data } from "./db"
const { users } = data;

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
        console.log(localStorage.getItem("uid"))
        return { ...user, code: 2001 }
    }
}


export function isLoggedIn(){
    const uid = localStorage.getItem('uid')
    const loggedInUser = users.find(user => user.uid == uid)
    console.log('loggedInUser', loggedInUser)
    if(loggedInUser){
        window.location.replace("/panel/music");
    }
}