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
        case REDUX_ACTIONS.UPDATE_USER_SUCCESS:


            break;

        default:
            return state;
    }
};
