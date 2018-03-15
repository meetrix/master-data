/**
 * Created by supun on 15/03/18.
 */
/**
 * Created by supun on 12/03/18.
 */
import {REDUX_ACTIONS} from '../constants/constant';
export default (state = {}, action) => {
    switch (action.type) {
        case REDUX_ACTIONS.FETCHING: {

        }

        default:
            return state;
    }
};
