/**
 * Created by supun on 15/03/18.
 */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {actionCreatorFactory,actionCreatorUpdateStoreFactory} from '../../actions/actionCreator'
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS,REDUX_ACTIONS as ACTION_TYPE} from '../../constants/constant'

import CardListView from './CardListView'
function mapStateToProps(state){
    return {
        userCardList:state.userCardList,
        codeCardList:state.codeCardList,
        codeGroupCardList:state.codeGroupCardList,
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{
        userCardAction:{
            getAllUsers:bindActionCreators(actionCreatorFactory(KEYS.GET_ALL_USERS,ATTRS.PAYLOAD),dispatch),
            createUsers:bindActionCreators(actionCreatorFactory(KEYS.CREATE_USER,ATTRS.PAYLOAD),dispatch),
            deleteUser:bindActionCreators(actionCreatorFactory(KEYS.DELETE_USER,ATTRS.PAYLOAD),dispatch),
            updateUser:bindActionCreators(actionCreatorFactory(KEYS.UPDATE_USER,ATTRS.PAYLOAD),dispatch),
            editingUser:bindActionCreators(actionCreatorUpdateStoreFactory(ACTION_TYPE.EDITING_USER,ATTRS.PAYLOAD),dispatch),
        },
        codeCardAction:{
            getAllCodes:bindActionCreators(actionCreatorFactory(KEYS.GET_ALL_CODES,ATTRS.PAYLOAD),dispatch),
            createCode:bindActionCreators(actionCreatorFactory(KEYS.CREATE_CODE,ATTRS.PAYLOAD),dispatch),
            deleteCode:bindActionCreators(actionCreatorFactory(KEYS.DELETE_CODE,ATTRS.PAYLOAD),dispatch),
            updateCode:bindActionCreators(actionCreatorFactory(KEYS.UPDATE_CODE,ATTRS.PAYLOAD),dispatch),
            editingCode:bindActionCreators(actionCreatorUpdateStoreFactory(ACTION_TYPE.EDITING_CODE,ATTRS.PAYLOAD),dispatch),
        },
        codeGroupCardAction:{
            getAllCodeGroups:bindActionCreators(actionCreatorFactory(KEYS.GET_ALL_CODE_GROUPS,ATTRS.PAYLOAD),dispatch),
            createCodeGroup:bindActionCreators(actionCreatorFactory(KEYS.CREATE_CODE_GROUP,ATTRS.PAYLOAD),dispatch),
            deleteCodeGroup:bindActionCreators(actionCreatorFactory(KEYS.DELETE_CODE_GROUP,ATTRS.PAYLOAD),dispatch),
            updateCodeGroup:bindActionCreators(actionCreatorFactory(KEYS.UPDATE_CODE_GROUP,ATTRS.PAYLOAD),dispatch),
            editingCodeGroup:bindActionCreators(actionCreatorUpdateStoreFactory(ACTION_TYPE.EDITING_CODE_GROUP,ATTRS.PAYLOAD),dispatch),
        },

    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CardListView)
