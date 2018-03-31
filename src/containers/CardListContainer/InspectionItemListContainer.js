/**
 * Created by supun on 15/03/18.
 */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {actionCreatorFactory,actionCreatorUpdateStoreFactory} from '../../actions/actionCreator'
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS,REDUX_ACTIONS as ACTION_TYPE} from '../../constants/constant'

import InspectionItemListView from './InspectionItemListView'
function mapStateToProps(state){
    return {
        inspectionItemCardList:state.inspectionItemCardList,
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{
        inspectionItemCardAction:{
            getAllInspectionItems:bindActionCreators(actionCreatorFactory(KEYS.GET_ALL_INSPECTION_ITEMS,ATTRS.PAYLOAD),dispatch),
            createInspectionItem:bindActionCreators(actionCreatorFactory(KEYS.CREATE_INSPECTION_ITEM,ATTRS.PAYLOAD),dispatch),
            deleteInspectionItem:bindActionCreators(actionCreatorFactory(KEYS.DELETE_INSPECTION_ITEM,ATTRS.PAYLOAD),dispatch),
            updateInspectionItem:bindActionCreators(actionCreatorFactory(KEYS.UPDATE_INSPECTION_ITEM,ATTRS.PAYLOAD),dispatch),
            editingInspectionItem:bindActionCreators(actionCreatorUpdateStoreFactory(ACTION_TYPE.EDITING_INSPECTION_ITEM,ATTRS.PAYLOAD),dispatch),
        }
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(InspectionItemListView)
