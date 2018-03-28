/**
 * Created by supun on 15/03/18.
 */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {actionCreatorFactory,actionCreatorUpdateStoreFactory} from '../../actions/actionCreator'
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS,REDUX_ACTIONS as ACTION_TYPE} from '../../constants/constant'

import UserListView from './UserListView'
function mapStateToProps(state){
    return {
        userCardList:state.userCardList,
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
        }

    }
})

export default connect(mapStateToProps,mapDispatchToProps)(UserListView)
