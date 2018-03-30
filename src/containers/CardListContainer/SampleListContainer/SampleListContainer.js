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

    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{

    }
})

export default connect(mapStateToProps,mapDispatchToProps)(InspectionPlanListView)
