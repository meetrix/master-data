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


class InspectionPlanListComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:false,
            error:{
                message:'',
                show:false
            }
        }

    }
    componentDidMount(){

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

    }
    addUser(){


    }
    getCardsElement(){

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
                        <strong>{}</strong>
                    </CardHeader>
                    <CardBody>
                        {}
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
                                    <Input placeholder="UserId" name="userId"  onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="FirstName" name="firstName"  onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="LastName" name="lastName"  onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Task" name="task"  onChange={this.handleInputChange.bind(this)} />
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Department" name="department" onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Role" name="role"  onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Password" type="password" name="password"  onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="ReEnterPassword" type="password" name="rePassword"  onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                            </CardBody>
                        </Card>

                    </CardFooter>
                </Card>
            </Col>
        );
    }
}
InspectionPlanListComponent.propTypes={



}

export default InspectionPlanListComponent/**
 * Created by supun on 14/03/18.
 */
