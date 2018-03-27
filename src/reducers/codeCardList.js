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
                ...state,
                codes:action.payload.data

            }

        case REDUX_ACTIONS.CREATE_CODE_SUCCESS:
            return{
                ...state,
                    codes:[
                        ...state.codes,
                            action.args,
                    ],
                createdCode:true

            }

        case REDUX_ACTIONS.DELETE_CODE_SUCCESS:
            const remainCode = state.codes.filter(code=>{
                return code.code !== action.args.code
            })
            return{
                ...state,
                codes:remainCode

            }

        case REDUX_ACTIONS.UPDATE_CODE_SUCCESS:

            let updateCodeList =  state.codes.map( (code, index) => {
                if(code.code !== action.args.code) {
                    // This isn't the item we care about - keep it as-is
                    return code;
                }

                // Otherwise, this is the one we want - return an updated value
                return {
                    ...code,
                    ...action.args
                };
            });
            return{
                ...state,
                codes:updateCodeList,
                editCard:{id:-1,editing:false},

            }

        case REDUX_ACTIONS.EDITING_CODE:
            return{
                ...state,
                editCard:{id:action.payload.id,editing:true},

            }

        default:
            return state;
    }
};
