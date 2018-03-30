/**
 * Created by supun on 15/03/18.
 */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {actionCreatorFactory,actionCreatorUpdateStoreFactory} from '../../actions/actionCreator'
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS,REDUX_ACTIONS as ACTION_TYPE} from '../../constants/constant'

import InspectionPlanListView from './InspectionPlanListView'
function mapStateToProps(state){
    return {
        inspectionPlanCardList:state.inspectionPlanCardList,
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{
        inspectionPlanCardAction:{
            getAllInspectionPlans:bindActionCreators(actionCreatorFactory(KEYS.GET_ALL_INSPECTION_PLANS,ATTRS.PAYLOAD),dispatch),
            createInspectionPlan:bindActionCreators(actionCreatorFactory(KEYS.CREATE_INSPECTION_PLAN,ATTRS.PAYLOAD),dispatch),
            deleteInspectionPlan:bindActionCreators(actionCreatorFactory(KEYS.DELETE_INSPECTION_PLAN,ATTRS.PAYLOAD),dispatch),
            updateInspectionPlan:bindActionCreators(actionCreatorFactory(KEYS.UPDATE_INSPECTION_PLAN,ATTRS.PAYLOAD),dispatch),
            editingInspectionPlan:bindActionCreators(actionCreatorUpdateStoreFactory(ACTION_TYPE.EDITING_INSPECTION_PLAN,ATTRS.PAYLOAD),dispatch),
        }
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(InspectionPlanListView)
