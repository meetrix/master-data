/**
 * Created by supun on 15/03/18.
 */
/**
 * Created by supun on 12/03/18.
 */
import {REDUX_ACTIONS} from '../constants/constant';
//initialValue
import {code_group_init} from '../constants/initialValue'
export default (state = code_group_init, action) => {
    switch (action.type) {

        case REDUX_ACTIONS.GET_ALL_CODE_GROUPS_SUCCESS:
            return{
                state:{
                    codeGroups:action.payload
                }
            }
            break;
        case REDUX_ACTIONS.CREATE_CODE_GROUP_SUCCESS:
            return{
                state:{
                    codeGroups:[
                        ...state.codeGroups.
                            action.payload,
                    ]
                }
            }

            break;
        case REDUX_ACTIONS.DELETE_CODE_GROUP_SUCCESS:
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
        case REDUX_ACTIONS.UPDATE_CODE_GROUP_SUCCESS:
            const oldCodeGroupIndex = state.codeGroups.findIndex(codeGroup=>{
                return codeGroup.codeGroup === action.payload.codeGroup
            })
            return{
                state:{
                    users:[
                        ...state.codeGroups.slice(0, oldCodeGroupIndex),
                        action.payload,
                        ...state.codeGroups.slice(oldCodeGroupIndex)
                    ]
                }
            }

            break;

        default:
            return state;
    }
};
