/**
 * Created by supun on 14/03/18.
 */
import React,{Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'

import {
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    InputGroup,Input
} from 'reactstrap';

import UserCardComponent from './UserCardComponent'

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
    getCardsElement(){
        let userCards = this.props.userCardList.users;
        return (
            userCards.map((userCard, index) =>

                <UserCardComponent  key={index}
                             user={userCard}
                             actions={this.props.actions}
                />

            )
        )
    }
    render(){


        return(

            <Col >
                <Card>
                    <CardHeader>
                        <strong>{this.props.userCardList.title}</strong>
                    </CardHeader>
                    <CardBody>
                        {this.getCardsElement()}
                    </CardBody>
                    <CardFooter>
                        <Card>
                            <CardHeader>
                                <strong>List Group</strong>
                                <div className="card-actions">
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
UserListComponent.propTypes={
    userCardList:PropTypes.shape({
        title: PropTypes.string.isRequired,
        users:PropTypes.array.isRequired
    }),

    actions: PropTypes.shape({
        getAllUsers: PropTypes.func.isRequired,
        createUsers:PropTypes.func.isRequired,
        deleteUser:PropTypes.func.isRequired,
        updateUser:PropTypes.func.isRequired,
    })


}

export default UserListComponent/**
 * Created by supun on 14/03/18.
 */
