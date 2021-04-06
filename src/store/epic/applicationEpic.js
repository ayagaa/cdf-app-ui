import * as applicationService from '../../services/applicationService';
import {userRegistered, userLoggedIn, applicationPosted} from '../actions/applicationCreator';

export function registerUser(userEmail, userPassword, dispatch) {
    return applicationService.registerUser(userEmail, userPassword).then((result) => {
        dispatch(userRegistered(result));
    });
}

export function loginUser(userEmail, userPassword, dispatch) {
    return applicationService.login(userEmail, userPassword).then((result) => {
        dispatch(userLoggedIn(result));
    });
}

export function applicationPost(applicationDetails, dispatch) {
    return applicationService.postChanges(applicationDetails).then((result) => {
        dispatch(applicationPosted(result));
    });
}