/**
 * Created by supun on 15/03/18.
 */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {actionCreatorFactory,actionCreatorUpdateStoreFactory} from '../../actions/actionCreator'
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS,REDUX_ACTIONS as ACTION_TYPE} from '../../constants/constant'

import CodeGroupListView from './CodeGroupListView'
function mapStateToProps(state){
    return {
        codeGroupCardList:state.codeGroupCardList,
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{
       
        codeGroupCardAction:{
            getAllCodeGroups:bindActionCreators(actionCreatorFactory(KEYS.GET_ALL_CODE_GROUPS,ATTRS.PAYLOAD),dispatch),
            createCodeGroup:bindActionCreators(actionCreatorFactory(KEYS.CREATE_CODE_GROUP,ATTRS.PAYLOAD),dispatch),
            deleteCodeGroup:bindActionCreators(actionCreatorFactory(KEYS.DELETE_CODE_GROUP,ATTRS.PAYLOAD),dispatch),
            updateCodeGroup:bindActionCreators(actionCreatorFactory(KEYS.UPDATE_CODE_GROUP,ATTRS.PAYLOAD),dispatch),
            editingCodeGroup:bindActionCreators(actionCreatorUpdateStoreFactory(ACTION_TYPE.EDITING_CODE_GROUP,ATTRS.PAYLOAD),dispatch),
        },

    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CodeGroupListView)
