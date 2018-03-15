/**
 * Created by supun on 15/03/18.
 */
import React,{Component} from 'react'
import {Col,Row} from 'reactstrap'
import PropTypes from 'prop-types'
import UserListComponent from '../../components/ListComponent/UserListComponent'
import CodeGroupListComponent from '../../components/ListComponent/CodeGroupListComponent'
import CodeListComponent from '../../components/ListComponent/CodeListComponent'
class CardListView extends Component{

    render(){
        return(
            <Col>
                <Row>
                    <UserListComponent userCardList = {this.props.userCardList} actions={this.props.actions.userCardAction}/>
                    <CodeListComponent codeCardList={this.props.codeCardList} actions={this.props.actions.codeCardAction}/>
                    <CodeGroupListComponent codeGroupCardList={this.props.codeGroupCardList } actions={this.props.actions.codeGroupCardAction}/>

                </Row>
            </Col>
        );
    }
}

CardListView.propTypes = {
    userCardList:PropTypes.object.isRequired,
    codeCardList:PropTypes.object.isRequired,
    codeGroupCardList:PropTypes.object.isRequired,
    actions:PropTypes.shape({
        userCardAction:PropTypes.object.isRequired,
        codeCardAction:PropTypes.object.isRequired,
        codeGroupCardAction:PropTypes.object.isRequired,
    }),
}
export default CardListView