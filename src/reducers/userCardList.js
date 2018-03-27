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
                ...state,
                users:action.payload.data
            }

        case REDUX_ACTIONS.CREATE_USER_SUCCESS:
            return{
                ...state,
                    users:[
                        ...state.users,
                        action.args
                    ],
                createdUser:true

            }


        case REDUX_ACTIONS.DELETE_USER_SUCCESS:
            const remainUsers = state.users.filter((user)=>{
                return user.userId !== action.args.userId
            })
            return{
                ...state,
                    users:remainUsers

            }


        case REDUX_ACTIONS.UPDATE_USER_SUCCESS:

            let updateUserList =  state.users.map( (user, index) => {
                if(user.userId !== action.args.userId) {
                    // This isn't the item we care about - keep it as-is
                    return user;
                }

                // Otherwise, this is the one we want - return an updated value
                return {
                    ...user,
                    ...action.args
                };
            });
            return{
                ...state,
                    users:updateUserList,
                    editCard:{id:-1,editing:false},

            }

        case REDUX_ACTIONS.EDITING_USER:
            return{
                ...state,
                editCard:{id:action.payload.id,editing:true},

            }

        default:
            return state;
    }
};
