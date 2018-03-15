/**
 * Created by supun on 10/01/18.
 */
import {ACTION_KEY as KEYS, REDUX_ACTIONS as ACTIONS, URLS, HTTP_METHODS, FETCH_KEYS} from '../constants/constant';


let metadata = {};
//users metadata
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

//code grops metadata
metadata[KEYS.GET_ALL_CODE_GROUPS] = {
    url: URLS.GET_ALL_CODE_GROUPS,
    options: {
        method: HTTP_METHODS.GET
    },
    successAction: ACTIONS.GET_ALL_CODE_GROUPS_SUCCESS,
    failureAction: ACTIONS.GET_ALL_CODE_GROUPS_FAILURE,

};
metadata[KEYS.CREATE_CODE_GROUP] = {
    url: URLS.CREATE_CODE_GROUP,
    options: {
        method: HTTP_METHODS.POST
    },
    successAction: ACTIONS.CREATE_CODE_GROUP_SUCCESS,
    failureAction: ACTIONS.CREATE_CODE_GROUP_FAILURE,

};
metadata[KEYS.DELETE_CODE_GROUP] = {
    url: URLS.DELETE_CODE_GROUP,
    options: {
        method: HTTP_METHODS.DELETE
    },
    successAction: ACTIONS.DELETE_CODE_GROUP_SUCCESS,
    failureAction: ACTIONS.DELETE_CODE_GROUP_FAILURE,

};
metadata[KEYS.UPDATE_CODE_GROUP] = {
    url: URLS.UPDATE_CODE_GROUP,
    options: {
        method: HTTP_METHODS.PUT
    },
    successAction: ACTIONS.UPDATE_CODE_GROUP_SUCCESS,
    failureAction: ACTIONS.UPDATE_CODE_GROUP_FAILURE,

};

//code record metadata
metadata[KEYS.GET_ALL_CODES] = {
    url: URLS.GET_ALL_CODES,
    options: {
        method: HTTP_METHODS.GET
    },
    successAction: ACTIONS.GET_ALL_CODES_SUCCESS,
    failureAction: ACTIONS.GET_ALL_CODES_FAILURE,

};
metadata[KEYS.CREATE_CODE] = {
    url: URLS.CREATE_CODE,
    options: {
        method: HTTP_METHODS.POST
    },
    successAction: ACTIONS.CREATE_CODE_SUCCESS,
    failureAction: ACTIONS.CREATE_CODE_FAILURE,

};
metadata[KEYS.DELETE_CODE] = {
    url: URLS.DELETE_CODE,
    options: {
        method: HTTP_METHODS.DELETE
    },
    successAction: ACTIONS.DELETE_CODE_SUCCESS,
    failureAction: ACTIONS.DELETE_CODE_FAILURE,

};
metadata[KEYS.UPDATE_CODE] = {
    url: URLS.UPDATE_CODE,
    options: {
        method: HTTP_METHODS.PUT
    },
    successAction: ACTIONS.UPDATE_CODE_SUCCESS,
    failureAction: ACTIONS.UPDATE_CODE_FAILURE,

};

export default metadata;