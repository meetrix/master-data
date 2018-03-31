/**
 * Created by supun on 15/03/18.
 */
/**
 * Created by supun on 12/03/18.
 */
//redux actions
import {REDUX_ACTIONS} from '../constants/constant';
//initialValue
import {inspection_item_card_init} from '../constants/initialValue'

export default (state = inspection_item_card_init, action) => {
    switch (action.type) {
        case REDUX_ACTIONS.GET_ALL_INSPECTION_ITEMS_SUCCESS:
            return{
                ...state,
                inspectionItems: Object.keys(action.payload.data).length === 0 && action.payload.data.constructor === Object  ? []: action.payload.data
            }

        case REDUX_ACTIONS.CREATE_INSPECTION_ITEM_SUCCESS:
            return{
                ...state,
                inspectionItems:[
                    ...state.inspectionItems,
                    action.args,
                ],
                createdCode:true

            }
        case REDUX_ACTIONS.DELETE_INSPECTION_ITEM_SUCCESS:
            const remainInspectionItems = state.inspectionItems.filter(inspectionItem=>{
                return !(inspectionItem.inspectionSubItem === action.args.inspectionSubItem && inspectionItem.inspectionPlan === action.args.inspectionPlan)
            })
            return{
                ...state,
                inspectionItems:remainInspectionItems

            }

        case REDUX_ACTIONS.UPDATE_INSPECTION_ITEM_SUCCESS:

            let updateInspectionItems =  state.inspectionItems.map( (inspectionItem, index) => {
                if(!(inspectionItem.inspectionSubItem === action.args.inspectionSubItem && inspectionItem.inspectionPlan === action.args.inspectionPlan)) {
                    // This isn't the item we care about - keep it as-is
                    return inspectionItem;
                }

                // Otherwise, this is the one we want - return an updated value
                return {
                    ...inspectionItem,
                    ...action.args
                };
            });
            return{
                ...state,
                inspectionItems:updateInspectionItems,
                editCard:{id:-1,editing:false},

            }

        case REDUX_ACTIONS.EDITING_INSPECTION_ITEM:
            return{
                ...state,
                editCard:{id:action.payload.id,editing:true},

            }
        default:
            return state;
    }
};
