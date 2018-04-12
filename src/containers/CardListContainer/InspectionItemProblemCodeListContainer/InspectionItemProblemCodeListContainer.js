/**
 * Created by supun on 15/03/18.
 */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {actionCreatorFactory,actionCreatorUpdateStoreFactory} from '../../../actions/actionCreator'
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS,REDUX_ACTIONS as ACTION_TYPE} from '../../../constants/constant'

import InspectionItemProblemCodeListView from './InspectionItemProblemCodeListView'
function mapStateToProps(state){
    return {
        inspectionItemProblemCodeCardList: state.inspectionItemProblemCodeCardList
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{
        inspectionItemProblemCodeCardAction:{
            getAllInspectionItemProblemCodes:bindActionCreators(actionCreatorFactory(KEYS.GET_ALL_INSPECTION_ITEM_PROBLEM_CODES,ATTRS.PAYLOAD),dispatch),
            createInspectionItemProblemCode:bindActionCreators(actionCreatorFactory(KEYS.CREATE_INSPECTION_ITEM_PROBLEM_CODE,ATTRS.PAYLOAD),dispatch),
            deleteInspectionItemProblemCode:bindActionCreators(actionCreatorFactory(KEYS.DELETE_INSPECTION_ITEM_PROBLEM_CODE,ATTRS.PAYLOAD),dispatch),
            getProblemCodes:bindActionCreators(actionCreatorFactory(KEYS.GET_PROBLEM_CODE,ATTRS.PAYLOAD),dispatch),
        },
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(InspectionItemProblemCodeListView)
