import { combineReducers } from 'redux'
import spinner from './spinner'
import userCardList from './userCardList'
import codeCardList from './codeCardList'
import codeGroupCardList from './codeGroupCardList'
const rootReducer = combineReducers({
    spinner,
    userCardList,
    codeCardList,
    codeGroupCardList,
});
export default rootReducer;
