export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_LOGGEDIN = 'USER_LOGGEDIN';
export const APPLICATION_POSTED = 'APPLICATION_POSTED';

export function userRegistered(appUser){
    return{
        type: USER_REGISTERED,
        appUser
    }
}

export function userLoggedIn(authUser){
    return{
        type: USER_LOGGEDIN,
        authUser
    }
}

export function applicationPosted(userApplication){
    return{
        type: APPLICATION_POSTED,
        userApplication
    }
}