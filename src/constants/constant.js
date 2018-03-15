
const BACKEND_URL = 'http://nxservicetbase.de:8080';
export const REDUX_ACTIONS = {
    //saga action
    FETCHING:'FETCHING',
    FETCH_LATEST:'FETCH_LATEST',
    FETCHING_SUCCESS : 'FETCHING_SUCCESS',
    FETCHING_FAILURE:'FETCHING_FAILURE',
    //tutor redux action

    //user redux action
    GET_ALL_USERS_SUCCESS: "GET_ALL_USERS_SUCCESS",
    GET_ALL_USERS_FAILURE: "GET_ALL_USERS_FAILURE",
    CREATE_USER_SUCCESS:'CREATE_USER_SUCCESS',
    CREATE_USER_FAILURE:'CREATE_USER_FAILURE',
    DELETE_USER_SUCCESS:'DELETE_USER_SUCCESS',
    DELETE_USER_FAILURE:'DELETE_USER_FAILURE',
    UPDATE_USER_FAILURE:'UPDATE_USER_FAILURE',
    UPDATE_USER_SUCCESS:'UPDATE_USER_SUCCESS',

    //code group redux action
    GET_ALL_CODE_GROUPS_SUCCESS: "GET_ALL_CODE_GROUPS_SUCCESS",
    GET_ALL_CODE_GROUPS_FAILURE: "GET_ALL_CODE_GROUPS_FAILURE",
    CREATE_CODE_GROUP_SUCCESS:'CREATE_CODE_GROUP_SUCCESS',
    CREATE_CODE_GROUP_FAILURE:'CREATE_CODE_GROUP_FAILURE',
    DELETE_CODE_GROUP_SUCCESS:'DELETE_CODE_GROUP_SUCCESS',
    DELETE_CODE_GROUP_FAILURE:'DELETE_CODE_GROUP_FAILURE',
    UPDATE_CODE_GROUP_FAILURE:'UPDATE_CODE_GROUP_FAILURE',
    UPDATE_CODE_GROUP_SUCCESS:'UPDATE_CODE_GROUP_SUCCESS',


    //code record redux action
    GET_ALL_CODES_SUCCESS: "GET_ALL_CODES_SUCCESS",
    GET_ALL_CODES_FAILURE: "GET_ALL_CODES_FAILURE",
    CREATE_CODE_SUCCESS:'CREATE_CODE_SUCCESS',
    CREATE_CODE_FAILURE:'CREATE_CODE_FAILURE',
    DELETE_CODE_SUCCESS:'DELETE_CODE_SUCCESS',
    DELETE_CODE_FAILURE:'DELETE_CODE_FAILURE',
    UPDATE_CODE_FAILURE:'UPDATE_CODE_FAILURE',
    UPDATE_CODE_SUCCESS:'UPDATE_CODE_SUCCESS',



}
export const USER_PROFILE ={
    UPDATE_FIRST_NAME:'UPDATE_FIRST_NAME',
    UPDATE_LAST_NAME:'UPDATE_LAST_NAME',
    UPDATE_EMAIL:'UPDATE_EMAIL',
    UPDATE_IMAGE:'UPDATE_IMAGE',
    UPDATE_ADDRESS:'UPDATE_ADDRESS',
    UPDATE_SCHOOL:'UPDATE_SCHOOL',
    UPDATE_DISTRICT:'UPDATE_DISTRICT',
    UPDATE_STREAM:'UPDATE_STREAM',
    UPDATE_SUBJECT:'UPDATE_SUBJECT'
}
export const STORE_INITIATE_VALUE={
    AUTH_INITIATE:
    {
        user: {
            _id:undefined,
            firstName:'supuh',
            lastName:'mad',
            userName: 'supun',
            email: 'supun.12@cse.mrt.ac.lk',
            imageUrl:'http://localhost:8080/img/avatars/1.jpg',
            roles:'consultee',
            school:'st.aloysius',
            address:'nakiyadeniya galle',
            district:'galle',
            stream:'a/l',
            subject:'maths'
        },
        session: undefined,
        authHeader:undefined
    }


}

export const ACTION_KEY ={

    //Users
    GET_ALL_USERS:"GET_ALL_USERS",
    CREATE_USER:"CREATE_USER",
    DELETE_USER:"DELETE_USER",
    UPDATE_USER:'UPDATE_USER',

    //Code Groups
    GET_ALL_CODE_GROUPS:'GET_ALL_CODE_GROUPS',
    CREATE_CODE_GROUP:'CREATE_CODE_GROUP',
    DELETE_CODE_GROUP:'DELETE_CODE_GROUP',
    UPDATE_CODE_GROUP:'UPDATE_CODE_GROUP',

    //Code Records
    GET_ALL_CODES:'GET_ALL_CODES',
    CREATE_CODE:'CREATE_CODE',
    DELETE_CODE:'DELETE_CODE',
    UPDATE_CODE:'UPDATE_CODE'


}

export const ACTION_ATTR ={
    PAYLOAD:'payload',
    DATA:'data'
}
export const URLS = {
    //user
    GET_ALL_USERS: BACKEND_URL+'/nxtservice/users',
    CREATE_USER:BACKEND_URL+'/nxtservice/users',
    DELETE_USER:BACKEND_URL+'/nxtservice/users/:userId',
    UPDATE_USER:BACKEND_URL+'/nxtservice/users/:userId',

    //code group
    GET_ALL_CODE_GROUPS: BACKEND_URL+'/nxtservice/codegoups',
    CREATE_CODE_GROUP:BACKEND_URL+'/nxtservice/codegoups',
    DELETE_CODE_GROUP:BACKEND_URL+'/nxtservice/codegoups/:codeGroup',
    UPDATE_CODE_GROUP:BACKEND_URL+'/nxtservice/codegoups/:codeGroup',

    //code record
    GET_ALL_CODES: BACKEND_URL+'/nxtservice/codes',
    CREATE_CODE:BACKEND_URL+'/nxtservice/codes',
    DELETE_CODE:BACKEND_URL+'/nxtservice/codes/:code',
    UPDATE_CODE:BACKEND_URL+'/nxtservice/codes/:code'
};
export const HTTP_METHODS = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PUT:'PUT'
};
export const FETCH_KEYS = {
    MERCHANT_ID: 'merchantId',
    REGISTER_NO: 'registerNo',
    MAC_ADDRESS: 'macAddress'
};

export const HTTP_CODES = {
    SUCCESS: 200,
    INTERNAL_ERROR: 500,
    BAD_REQUEST: 400,
    NOT_AUTHENTICATED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404
};
export const TIMEOUTS = {
    AUTH_REDIRECT: 1000,
    LOCAL_PROXY_SEND_RETRY: 1000,
    SECOND_IN_MILLIS: 1000
};

export const ROLE={
    ADMIN:0,
    CONSULTANT:1,
    CONSULTEE:2,


}