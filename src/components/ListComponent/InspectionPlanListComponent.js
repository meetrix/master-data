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

import InspectionPlanCardComponent from './InspectionPlanCardComponent'

class InspectionPlanListComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:true,
            inspectionPlan:{
                inspectionPlan:'',
                jigId:'',
                task:'',
                product:'',
                workstation:'',
                image:'',
                description:''
            },
            error:{
                message:'',
                show:false
            }
        }

    }
    componentDidMount(){
        this.props.actions.getAllInspectionPlans();
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
        this.setState(prevState => ({
            inspectionPlan: {
                ...prevState.inspectionPlan,
                [name]: value
            }
        }))

    }
    createInspectionPlan(){
        this.props.actions.createInspectionPlan(this.state.inspectionPlan)
        this.setState({inspectionPlan:{
                inspectionPlan:'',
                jigId:'',
                task:'',
                product:'',
                workstation:'',
                image:'',
                description:''
            }})

    }
    getCardsElement(){
        let inspectionPlanCards = this.props.inspectionPlanCardList.inspectionPlans;
        return (
            inspectionPlanCards.map((inspectionPlanCard, index) =>

                <InspectionPlanCardComponent  key={index} id ={index}
                                    inspectionPlan={inspectionPlanCard}
                                    editCard={this.props.inspectionPlanCardList.editCard}
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
                        <strong>{}</strong>
                    </CardHeader>
                    <CardBody>
                        {this.getCardsElement()}
                    </CardBody>
                    <CardFooter>
                        <Card>
                            <CardHeader>
                                <strong>Create Inspection Plan</strong>
                                <div className="card-actions">
                                    <a  onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({ collapsed: this.state.collapseAddCard==true,"btn-minimize":true })}  data-toggle="collapse" data-target="#collapseExample" aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                                    <a  onClick={this.createInspectionPlan.bind(this)} className="btn-close" ><i className="fa fa-check-circle"></i></a>
                                </div>
                            </CardHeader>
                            <CardBody className={classnames({ "show" : this.state.collapseAddCard==false,collapse:true })}>
                                {error}
                                <InputGroup>
                                    <Input placeholder="InspectionPlan" name="inspectionPlan"  value={this.state.inspectionPlan.inspectionPlan} onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="JigId" name="jigId" value={this.state.inspectionPlan.jigId}  onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Task" name="task" value={this.state.inspectionPlan.task}  onChange={this.handleInputChange.bind(this)} />
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Product"  name="product" value={this.state.inspectionPlan.product} onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Workstation" name="workstation" value={this.state.inspectionPlan.workstation} onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Image"  name="image" value={this.state.inspectionPlan.image} onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Description"  name="description" value={this.state.inspectionPlan.description} onChange={this.handleInputChange.bind(this)}/>
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
    inspectionPlanCardList:PropTypes.shape({
        inspectionPlans:PropTypes.array.isRequired,
        editCard:PropTypes.object,
        createdInspection:PropTypes.bool,
    }),

    actions: PropTypes.shape({
        getAllInspectionPlans: PropTypes.func.isRequired,
        createInspectionPlan:PropTypes.func.isRequired,
        deleteInspectionPlan:PropTypes.func.isRequired,
        updateInspectionPlan:PropTypes.func.isRequired,
        editingInspectionPlan:PropTypes.func.isRequired,
    })


}

export default InspectionPlanListComponent/**
 * Created by supun on 14/03/18.
 */
