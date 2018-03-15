/**
 * Created by supun on 14/03/18.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
    Badge,
    Alert,
    InputGroup,
    Input
} from 'reactstrap';
import classnames from 'classnames';

class UserCardComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:false,
            editCard:false,
            user:this.props.user || {},
            rePassword:'',
            error:{
                message:'',
                show:false
            }
        }
    }

    toggleCollapseAddCard(e){
        e.preventDefault();

        this.setState((prevState, props) => ({
            collapseAddCard: ! prevState.collapseAddCard
        }));
    }

    deleteUser(){

        this.props.actions.deleteUser({userId:this.props.user.userId})
    }

    editUser(){
        this.setState({editCard:true})
    }

    editUserDone(){

        if(this.state.user.password!=this.state.rePassword){

            this.setState(prevState => ({
                error: {
                    ...prevState.error,
                    ...{message: "password doesn't match",show:true},
                }
            }))
        }
        else {

            this.props.actions.updateUser(this.state.user)
        }
    }

    handleInputChange(event) {
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

    render() {
        let error;
        if(this.state.error.show){
            error =  <Alert className="fade" color="success">error : {this.state.error.message}</Alert>
        }

        if (!this.state.editCard){
            return (
                <Col>
                    <Card color="primary" className="text-white ">
                        <CardHeader>
                            Record
                            <div className="card-actions">

                                <a onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({
                                    collapsed: this.state.collapseAddCard == true,
                                    "btn-minimize": true
                                })} data-toggle="collapse" data-target="#collapseExample"
                                   aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                                <a onClick={this.editUser.bind(this)} className="btn"><i className="fa fa-edit"></i></a>
                                <a onClick={this.deleteUser.bind(this)} className="btn-close"><i
                                    className="icon-close"></i></a>
                            </div>
                        </CardHeader>
                        <CardBody className={classnames({"show": this.state.collapseAddCard == false, collapse: true})}>
                            <Alert color="success">UserId : {this.props.user.userId}</Alert>
                            <Alert color="success">FirstName : {this.props.user.firstName}</Alert>
                            <Alert color="success">LastName : {this.props.user.lastName}</Alert>
                            <Alert color="success">Task : {this.props.user.task}</Alert>
                            <Alert color="success">Department : {this.props.user.department}</Alert>
                            <Alert color="success">Role : {this.props.user.role}</Alert>
                            <Alert color="success">Password : {this.props.user.password}</Alert>

                        </CardBody>
                    </Card>
                </Col>
            )
        }
        else {
            return (
                <Col>
                    <Card color="danger" className="text-white ">
                        <CardHeader>
                            Record Edit
                            <div className="card-actions">
                                <a onClick={this.editUserDone.bind(this)} className="btn"><i className="fa fa-check-square-o"></i></a>
                            </div>
                        </CardHeader>
                        <CardBody className="show collapse">
                            {error}
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
                </Col>
            )
        }

        }

}
UserCardComponent.propTypes={
    user:PropTypes.shape({
            userId: PropTypes.string,
            lastName: PropTypes.string,
            firstName: PropTypes.string,
            task: PropTypes.string,
            department: PropTypes.string,
            role: PropTypes.string,
            password: PropTypes.string
        }),

    actions: PropTypes.shape({
        getAllUsers: PropTypes.func.isRequired,
        createUsers:PropTypes.func.isRequired,
        deleteUser:PropTypes.func.isRequired,
        updateUser:PropTypes.func.isRequired,
    })


}
export default UserCardComponent/**
 * Created by supun on 14/03/18.
 */
