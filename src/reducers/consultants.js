/**
 * Created by supun on 08/01/18.
 */
import {REDUX_ACTIONS} from '../constants/constant';

export default (state = [], action) => {
    switch (action.type) {
        case REDUX_ACTIONS.SET_CONSULTS_DATA: {
                return action.payload.data;
        }
        case REDUX_ACTIONS.HANDLE_CONSULTS_DATA_FETCH_FAILURE: {
            return {
                name: 'DEFAULT_TUTOR_NAME',
                age: 10
            };
        }
        default:
            return state;
    }
};
