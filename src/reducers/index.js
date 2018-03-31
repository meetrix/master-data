//core library
import { combineReducers } from 'redux';

//reduces
import spinner from './spinner';
import userCardList from './userCardList';
import codeCardList from './codeCardList';
import codeGroupCardList from './codeGroupCardList';
import inspectionPlanCardList from './inspectionPlanCardList';
import inspectionItemCardList from './inspectionItemCardList';


const rootReducer = combineReducers({
    spinner,
    userCardList,
    codeCardList,
    codeGroupCardList,
    inspectionPlanCardList,
    inspectionItemCardList,
});
export default rootReducer;
