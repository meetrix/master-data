/**
 * Created by supun on 14/03/18.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux'
import classnames from 'classnames';
import {bindActionCreators} from 'redux';
import {actionCreatorFactory,actionCreateApiGateWayFactory} from '../../actions/actionCreator';
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS  }from '../../constants/constant';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
    Badge,
    InputGroup,Input
} from 'reactstrap';

import UserCardComponent from './UserCardComponent'

function mapStateToProps(state){
    return {
        cardListTitle:"User–Record",
        cardList: [
            {
                userId: "SCHMIDT",
                lastName: "Schmidt",
                firstName:"Dieter",
                task: "Inspector",
                department: "QM01",
                role: "USER",
                password: "1234567890"
            },
            {
                userId: "SCHMIDT",
                lastName: "Schmidt",
                firstName:"Dieter",
                task: "Inspector",
                department: "QM01",
                role: "USER",
                password: "1234567890"
            },
            {
                userId: "SCHMIDT",
                lastName: "Schmidt",
                firstName:"Dieter",
                task: "Inspector",
                department: "QM01",
                role: "USER",
                password: "1234567890"
            }]

    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{
        getAllUsers:bindActionCreators(actionCreatorFactory(KEYS.GET_ALL_USERS,ATTRS.PAYLOAD),dispatch),
        createUsers:bindActionCreators(actionCreatorFactory(KEYS.CREATE_USER,ATTRS.PAYLOAD),dispatch),
        deleteUser:bindActionCreators(actionCreatorFactory(KEYS.DELETE_USER,ATTRS.PAYLOAD),dispatch),
        updateUser:bindActionCreators(actionCreatorFactory(KEYS.UPDATE_USER,ATTRS.PAYLOAD),dispatch),
    }
})
class UserListComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:false
        }
        this.inputs = {};
    }
    componentDidMount(){
        this.props.actions.getAllUsers();
    }
    toggleCollapseAddCard(e){
        e.preventDefault();
        this.setState((prevState, props) => ({
            collapseAddCard: ! prevState.collapseAddCard
        }));
    }
    handlerInput(e){
        this.inputs = this.inputs || {};
        this.inputs[e.target.name] = e.target.value
    }
    addUser(){
        this.props.actions.createUsers(this.inputs)
        this.inputs={}
    }
    render(){
        return(

            <Col >
                <Card>
                    <CardHeader>
                        <strong>{this.props.cardListTitle}</strong>
                    </CardHeader>
                    <CardBody>
                        <UserCardComponent user={this.props.cardList[0]} actions={this.props.actions}/>
                        {/*<UserRecordCardComponent {...this.props.cardList[1]}/>*/}
                        {/*<UserRecordCardComponent {...this.props.cardList[2]}/>*/}
                    </CardBody>
                    <CardFooter>
                        <Card>
                            <CardHeader>
                                <strong>List Group</strong>
                                <div className="card-actions">
                                    {/*<a href="#" class="btn-setting"><i class="icon-settings"></i></a>*/}
                                    <a  onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({ collapsed: this.state.collapseAddCard==true,"btn-minimize":true })}  data-toggle="collapse" data-target="#collapseExample" aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                                    <a  onClick={this.addUser.bind(this)} className="btn-close" ><i className="fa fa-check-circle"></i></a>
                                </div>
                            </CardHeader>
                            <CardBody className={classnames({ "show" : this.state.collapseAddCard==false,collapse:true })}>
                                <InputGroup>
                                    <Input placeholder="FirstName" name="firstName"  onChange={this.handlerInput.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="LastName" name="lastName" onChange={this.handlerInput.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Task" name="task" onChange={this.handlerInput.bind(this)} />
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Department" name="department" onChange={this.handlerInput.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Role" name="role" onChange={this.handlerInput.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Password" name="password" onChange={this.handlerInput.bind(this)}/>
                                </InputGroup>
                            </CardBody>
                        </Card>

                    </CardFooter>
                </Card>
            </Col>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserListComponent)/**
 * Created by supun on 14/03/18.
 */
