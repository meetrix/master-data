/**
 * Created by supun on 15/03/18.
 */
/**
 * Created by supun on 12/03/18.
 */
import {REDUX_ACTIONS} from '../constants/constant';
//initialValue
import {user_card_init} from '../constants/initialValue'
export default (state = user_card_init, action) => {
    switch (action.type) {
        case REDUX_ACTIONS.GET_ALL_USERS_SUCCESS:
            return{
                state:{
                    users:action.payload
                }
            }
            break;
        case REDUX_ACTIONS.CREATE_USER_SUCCESS:
            return{
                state:{
                    users:[
                        ...state.users.
                        action.payload,
                    ]
                }
            }

            break;
        case REDUX_ACTIONS.DELETE_USER_SUCCESS:
            // const oldUserIndex = state.users.findIndex(user=>{
            //     return user.userId === action.payload.userId
            // })
            // return{
            //     state:{
            //         users:[
            //             ...state.users.slice(0, oldUserIndex),
            //             action.payload,
            //             ...state.users.slice(oldUserIndex)
            //         ]
            //     }
            // }

            break;
        case REDUX_ACTIONS.UPDATE_USER_SUCCESS:
            const oldUserIndex = state.users.findIndex(user=>{
                return user.userId === action.payload.userId
            })
            return{
                state:{
                    users:[
                        ...state.users.slice(0, oldUserIndex),
                        action.payload,
                        ...state.users.slice(oldUserIndex)
                    ]
                }
            }

            break;

        default:
            return state;
    }
};
