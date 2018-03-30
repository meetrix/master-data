/**
 * Created by supun on 15/03/18.
 */
/**
 * Created by supun on 12/03/18.
 */
//redux actions
import {REDUX_ACTIONS} from '../constants/constant';
//initialValue
import {inspection_card_init} from '../constants/initialValue'

export default (state = inspection_card_init, action) => {
    switch (action.type) {
        case REDUX_ACTIONS.GET_ALL_INSPECTION_PLANS_SUCCESS:
            return{
                ...state,
                inspectionPlans:action.payload.data
            }

        case REDUX_ACTIONS.CREATE_INSPECTION_PLAN_SUCCESS:
            return{
                ...state,
                inspectionPlans:[
                    ...state.inspectionPlans,
                    action.args,
                ],
                createdCode:true

            }
        case REDUX_ACTIONS.DELETE_INSPECTION_PLAN_SUCCESS:
            const remainInspectionPlans = state.inspectionPlans.filter(inspectionPlan=>{
                return inspectionPlan.inspectionPlan !== action.args.inspectionPlan
            })
            return{
                ...state,
                inspectionPlans:remainInspectionPlans

            }

        case REDUX_ACTIONS.UPDATE_INSPECTION_PLAN_SUCCESS:

            let updateInspectionPlans =  state.inspectionPlans.map( (inspectionPlan, index) => {
                if(inspectionPlan.inspectionPlan !== action.args.inspectionPlan) {
                    // This isn't the item we care about - keep it as-is
                    return inspectionPlan;
                }

                // Otherwise, this is the one we want - return an updated value
                return {
                    ...inspectionPlan,
                    ...action.args
                };
            });
            return{
                ...state,
                inspectionPlans:updateInspectionPlans,
                editCard:{id:-1,editing:false},

            }

        case REDUX_ACTIONS.EDITING_INSPECTION_PLAN:
            return{
                ...state,
                editCard:{id:action.payload.id,editing:true},

            }
        default:
            return state;
    }
};
