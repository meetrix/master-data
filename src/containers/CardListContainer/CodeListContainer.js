/**
 * Created by supun on 15/03/18.
 */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {actionCreatorFactory,actionCreatorUpdateStoreFactory} from '../../actions/actionCreator'
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS,REDUX_ACTIONS as ACTION_TYPE} from '../../constants/constant'

import CodeListView from './CodeListView'
function mapStateToProps(state){
    return {
        codeCardList:state.codeCardList,
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{
        
        codeCardAction:{
            getAllCodes:bindActionCreators(actionCreatorFactory(KEYS.GET_ALL_CODES,ATTRS.PAYLOAD),dispatch),
            createCode:bindActionCreators(actionCreatorFactory(KEYS.CREATE_CODE,ATTRS.PAYLOAD),dispatch),
            deleteCode:bindActionCreators(actionCreatorFactory(KEYS.DELETE_CODE,ATTRS.PAYLOAD),dispatch),
            updateCode:bindActionCreators(actionCreatorFactory(KEYS.UPDATE_CODE,ATTRS.PAYLOAD),dispatch),
            editingCode:bindActionCreators(actionCreatorUpdateStoreFactory(ACTION_TYPE.EDITING_CODE,ATTRS.PAYLOAD),dispatch),
        }
        

    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CodeListView)
