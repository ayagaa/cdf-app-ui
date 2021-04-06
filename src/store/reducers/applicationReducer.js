import { useReducer} from 'react';
import {
USER_REGISTERED,
USER_LOGGEDIN,
APPLICATION_POSTED
} from '../actions/applicationCreator';
import { updateObject } from '../../utils/stateUpdater';

const initialState = {
    appUser: '',
    authUser: '',
    userApplication: '',
  }

  export function reducer(state = initialState, action) {
    updateObject(state, {

    });
    switch(action.type){
        case USER_REGISTERED:
            return {
                appUser: action.appUser
            }
        case USER_LOGGEDIN:
            return {
                authUser: action.authUser
            }
        case APPLICATION_POSTED:
            return {
                userApplication: action.userApplication
            }
        default:
            return state;
    }
}

export default () => useReducer(reducer, initialState);