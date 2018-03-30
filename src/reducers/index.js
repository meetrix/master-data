//core library
import { combineReducers } from 'redux';

//reduces
import spinner from './spinner';
import userCardList from './userCardList';
import codeCardList from './codeCardList';
import codeGroupCardList from './codeGroupCardList';
import inspectionPlanCardList from './inspectionPlanCardList'

const rootReducer = combineReducers({
    spinner,
    userCardList,
    codeCardList,
    codeGroupCardList,
    inspectionPlanCardList,
});
export default rootReducer;
