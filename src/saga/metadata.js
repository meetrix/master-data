/**
 * Created by supun on 10/01/18.
 */
import {ACTION_KEY as KEYS, REDUX_ACTIONS as ACTIONS, URLS, HTTP_METHODS, FETCH_KEYS} from '../constants/constant';


let metadata = {};
metadata[KEYS.GET_ALL_USERS] = {
    url: URLS.GET_ALL_USERS,
    options: {
        method: HTTP_METHODS.GET
    },
    successAction: ACTIONS.GET_ALL_USERS_SUCCESS,
    failureAction: ACTIONS.GET_ALL_USERS_FAILURE,

};
metadata[KEYS.CREATE_USER] = {
    url: URLS.CREATE_USER,
    options: {
        method: HTTP_METHODS.POST
    },
    successAction: ACTIONS.CREATE_USER_SUCCESS,
    failureAction: ACTIONS.CREATE_USER_FAILURE,

};
metadata[KEYS.DELETE_USER] = {
    url: URLS.DELETE_USER,
    options: {
        method: HTTP_METHODS.DELETE
    },
    successAction: ACTIONS.DELETE_USER_SUCCESS,
    failureAction: ACTIONS.DELETE_USER_FAILURE,

};
metadata[KEYS.UPDATE_USER] = {
    url: URLS.UPDATE_USER,
    options: {
        method: HTTP_METHODS.PUT
    },
    successAction: ACTIONS.UPDATE_USER_SUCCESS,
    failureAction: ACTIONS.UPDATE_USER_FAILURE,

};


export default metadata;