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
    InputGroup,Input,
    Alert
} from 'reactstrap';

import UserCardComponent from './UserCardComponent'

class UserListComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:false,
            user:{
                userId:'',
                firstName:'',
                lastName:'',
                task:'',
                department:'',
                role:'',
                password:''
            },
            rePassword:'',
            error:{
                message:'',
                show:false
            }
        }
        this.inputs = {};
    }
    componentDidMount(){
        this.props.actions.getAllUsers();
    }
    componentWillReceiveProps(){
        console.log(this.props.userCardList)
        this.props.userCardList.createdUser ? this.setState({user:{}}): null
    }
    toggleCollapseAddCard(e){
        e.preventDefault();
        this.setState((prevState, props) => ({
            collapseAddCard: ! prevState.collapseAddCard
        }));
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if(target.name==='rePassword'){
            this.setState({rePassword:value})
        }
        else {
            this.setState(prevState => ({
                user: {
                    ...prevState.user,
                    [name]: value
                }
            }))
        }

        if(this.state.error.show){
            this.setState(prevState => ({
                error: {
                    ...prevState.error,
                    ...{message: "",show:false},

                }
            }));
        }
    }
    addUser(){
        if(this.state.user.password!==this.state.rePassword){

            this.setState(prevState => ({
                error: {
                    ...prevState.error,
                    ...{message: "password doesn't match",show:true},
                }
            }))
        }
        else {
            this.props.actions.createUsers(this.state.user)
        }

    }
    getCardsElement(){
        let userCards = this.props.userCardList.users;
        return (
            userCards.map((userCard, index) =>

                <UserCardComponent  key={index} id ={index}
                             user={userCard} editCard={this.props.userCardList.editCard}
                             actions={this.props.actions}
                />

            )
        )
    }
    render(){

        let error;
        if(this.state.error.show){
            error =  <Alert className="fade" color="success">error : {this.state.error.message}</Alert>
        }
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
                                <strong>Create User</strong>
                                <div className="card-actions">
                                    <a  onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({ collapsed: this.state.collapseAddCard==true,"btn-minimize":true })}  data-toggle="collapse" data-target="#collapseExample" aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                                    <a  onClick={this.addUser.bind(this)} className="btn-close" ><i className="fa fa-check-circle"></i></a>
                                </div>
                            </CardHeader>
                            <CardBody className={classnames({ "show" : this.state.collapseAddCard==false,collapse:true })}>
                                {error}
                                <InputGroup>
                                    <Input placeholder="UserId" name="userId" value={this.state.user.userId} onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="FirstName" name="firstName" value={this.state.user.firstName} onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="LastName" name="lastName" value={this.state.user.lastName} onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Task" name="task" value={this.state.user.task} onChange={this.handleInputChange.bind(this)} />
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Department" value={this.state.user.department} name="department" onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Role" name="role" value={this.state.user.role} onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Password" type="password" name="password" value={this.state.user.password} onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="ReEnterPassword" type="password" name="rePassword" value={this.state.rePassword} onChange={this.handleInputChange.bind(this)}/>
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
        users:PropTypes.array.isRequired,
        editCard:PropTypes.object,
        createdUsers:PropTypes.bool,
    }),

    actions: PropTypes.shape({
        getAllUsers: PropTypes.func.isRequired,
        createUsers:PropTypes.func.isRequired,
        deleteUser:PropTypes.func.isRequired,
        updateUser:PropTypes.func.isRequired,
        editingUser:PropTypes.func.isRequired,
    })


}

export default UserListComponent/**
 * Created by supun on 14/03/18.
 */
