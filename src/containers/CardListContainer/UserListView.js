/**
 * Created by supun on 15/03/18.
 */
import React,{Component} from 'react'
import {Col,Row} from 'reactstrap'
import PropTypes from 'prop-types'
import UserListComponent from '../../components/ListComponent/UserListComponent'
class UserListView extends Component{


    render(){
        return(
            <Col>
                <Row>
                    <UserListComponent userCardList = {this.props.userCardList} actions={this.props.actions.userCardAction}/>
                </Row>
            </Col>
        );
    }
}

UserListView.propTypes = {
    userCardList:PropTypes.object.isRequired,
    actions:PropTypes.shape({
        userCardAction:PropTypes.object.isRequired,
    }),
}
export default UserListView