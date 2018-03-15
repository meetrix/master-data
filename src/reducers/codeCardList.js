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
        case REDUX_ACTIONS.FETCHING:
            return {value:true};
            break
        case REDUX_ACTIONS.FETCHING_SUCCESS:
        case REDUX_ACTIONS.FETCHING_FAILURE:
            return {value:false};
            break

        default:
            return state;
    }
};
