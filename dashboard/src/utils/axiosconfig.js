const getTokenFromLocal = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null

export const config = {
    headers: {
        'Authorization': `Bearer ${getTokenFromLocal.token}`,
        'Accept'       : 'application/json'
       }
}