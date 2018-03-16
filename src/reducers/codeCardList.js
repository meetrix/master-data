/**
 * Created by supun on 15/03/18.
 */
/**
 * Created by supun on 12/03/18.
 */
import {REDUX_ACTIONS} from '../constants/constant';
//initialValue
import {code_card_init} from '../constants/initialValue'
export default (state = code_card_init, action) => {
    switch (action.type) {
        case REDUX_ACTIONS.GET_ALL_CODES_SUCCESS:
            return{
                state:{
                    codes:action.payload
                }
            }
            break;
        case REDUX_ACTIONS.CREATE_CODE_SUCCESS:
            return{
                state:{
                    codes:[
                        ...state.codes.
                            action.payload,
                    ]
                }
            }

            break;
        case REDUX_ACTIONS.DELETE_CODE_SUCCESS:
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
        case REDUX_ACTIONS.UPDATE_CODE_SUCCESS:
            const oldCodeIndex = state.codes.findIndex(code=>{
                return code.code === action.payload.code
            })
            return{
                state:{
                    users:[
                        ...state.codes.slice(0, oldCodeIndex),
                        action.payload,
                        ...state.codes.slice(oldCodeIndex)
                    ]
                }
            }

            break;


        default:
            return state;
    }
};
