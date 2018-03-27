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
                ...state,
                codeGroups:action.payload.data

            }
        case REDUX_ACTIONS.CREATE_CODE_GROUP_SUCCESS:
            return{
                ...state,
                    codeGroups:[
                        ...state.codeGroups,
                            action.args,
                    ]

            }

        case REDUX_ACTIONS.DELETE_CODE_GROUP_SUCCESS:
            const remainCodeGroups = state.codeGroups.filter((codeGroup)=>{
                return codeGroup.codeGroup !== action.args.codeGroup
            })
            return{
                ...state,
                codeGroups:remainCodeGroups

            }


        case REDUX_ACTIONS.UPDATE_CODE_GROUP_SUCCESS:
            let updateCodeGroupsList =  state.codeGroups.map( (codeGroup, index) => {
                if(codeGroup.codeGroup !== action.args.codeGroup) {
                    // This isn't the item we care about - keep it as-is
                    return codeGroup;
                }

                // Otherwise, this is the one we want - return an updated value
                return {
                    ...codeGroup,
                    ...action.args
                };
            });
            return{
                ...state,
                codeGroups:updateCodeGroupsList,
                editCard:{id:-1,editing:false},

            }
        case REDUX_ACTIONS.EDITING_CODE_GROUP:
            return{
                ...state,
                editCard:{id:action.payload.id,editing:true},

            }

        default:
            return state;
    }
};
