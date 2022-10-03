export const isLoggedIn = () =>{
    if(sessionStorage.login === 'true'){
        return true
    }else{
        return false
    }
}