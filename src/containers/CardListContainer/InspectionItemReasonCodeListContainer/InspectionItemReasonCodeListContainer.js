/**
 * Created by supun on 15/03/18.
 */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {actionCreatorFactory,actionCreatorUpdateStoreFactory} from '../../../actions/actionCreator'
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS,REDUX_ACTIONS as ACTION_TYPE} from '../../../constants/constant'

import InspectionItemReasonCodeListView from './InspectionItemReasonCodeListView'
function mapStateToProps(state){
    return {
        inspectionItemReasonCodeCardList: state.inspectionItemReasonCodeCardList
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{
        inspectionItemReasonCodeCardAction:{
            getAllInspectionItemReasonCodes:bindActionCreators(actionCreatorFactory(KEYS.GET_ALL_INSPECTION_ITEM_REASON_CODES,ATTRS.PAYLOAD),dispatch),
            createInspectionItemReasonCode:bindActionCreators(actionCreatorFactory(KEYS.CREATE_INSPECTION_ITEM_REASON_CODE,ATTRS.PAYLOAD),dispatch),
            deleteInspectionItemReasonCode:bindActionCreators(actionCreatorFactory(KEYS.DELETE_INSPECTION_ITEM_REASON_CODE,ATTRS.PAYLOAD),dispatch),
            getReasonCodes:bindActionCreators(actionCreatorFactory(KEYS.GET_REASON_CODE,ATTRS.PAYLOAD),dispatch),
        },
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(InspectionItemReasonCodeListView)
