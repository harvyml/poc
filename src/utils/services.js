import { data } from "./db"
const { users } = data;

const api = (function(){
    if(window.location.protocol == "https:"){
        return 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com'
    }
    return "https://api.deezer.com"
})()
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
        return { ...user, code: 2000 }
    }
}


export function isLoggedIn() {
    const uid = localStorage.getItem('uid')
    const loggedInUser = users.find(user => user.uid == uid)
    if (loggedInUser) {
        window.location.replace("/panel/home");
    }
}

export function getUserData() {
    const uid = localStorage.getItem('uid')
    const loggedInUser = users.find(user => user.uid == uid)
    if (loggedInUser) {
        return {...loggedInUser, code: 2000}
    }
    return {...loggedInUser, code: 3001}
}

export async function fetchManyBy({ keyword, startAt, limit }) {
    const request = await fetch(`${api}/search?q=${keyword}&index=${startAt}&limit=${limit}`, { method: "GET" })
    return await request.json()

}

export async function fetchTrackById({ id }) {
    const request = await fetch(`${api}/track/${id}`, { method: "GET" })
    return await request.json()
}

export async function fetchTrackByName({ keyword, startAt, limit }) {
    const request = await fetch(`${api}/search?q=${keyword}&index=${startAt}&limit=${limit}`, { method: "GET" })
    return await request.json()
}

export function setFavoriteSong(item) {
    var favoriteSongs = localStorage.getItem("favoriteSongs") && JSON.parse(localStorage.getItem("favoriteSongs"));
    if (!favoriteSongs) {
        try {
            let newFavoriteSongs = [item]
            localStorage.setItem('favoriteSongs', JSON.stringify(newFavoriteSongs))
            return { ...item, okay: true }
        } catch (err) {

            return { ...err, okay: false }
        }
    }

    let newFavoriteSongs = [...favoriteSongs, item]
    localStorage.setItem('favoriteSongs', JSON.stringify(newFavoriteSongs))
}

export function removeFavoriteSong({ id }) {
    var favoriteSongs = localStorage.getItem("favoriteSongs") && JSON.parse(localStorage.getItem("favoriteSongs"));
    favoriteSongs.forEach((item, idx) => {
        if (item.id == id) {
            console.log("removing idx", idx)
            favoriteSongs.splice(idx, 1)
            localStorage.setItem("favoriteSongs", JSON.stringify(favoriteSongs))
            return { ok: true }
        }
    })
    console.log('not removed')
    return { ok: false, msg: 'id does not exist' }
}

export async function setFavorite(e, reload = false) {
    const id = e.target.getAttribute('item-id')
    const request = await fetchTrackById({ id })
    const element = e.target.parentElement.querySelector('img')
    if (element.classList == 'heart-fill') {
        element.classList.remove("heart-fill")
        removeFavoriteSong({ id })
        if (reload) {
            window.location.reload()
            return false
        }
        return element.classList
    }
    element.classList.add('heart-fill')
    setFavoriteSong({ ...request })
}