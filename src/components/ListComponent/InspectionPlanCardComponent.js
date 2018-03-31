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
    Input,
    CardLink
} from 'reactstrap';
import classnames from 'classnames';

class InspectionPlanCardComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:true,
            inspectionPlan:this.props.inspectionPlan,
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

    deleteInspectionPlan(){
        this.props.actions.deleteInspectionPlan({inspectionPlan:this.props.inspectionPlan.inspectionPlan})

    }

    editInspectionPlan(){
        this.props.actions.editingInspectionPlan({editing:true,id:this.props.id})
    }

    editInspectionPlanDone(){
        this.props.actions.updateInspectionPlan(this.state.inspectionPlan)
    }
    editInspectionPlanDoneClose(){
        this.props.actions.editingInspectionPlan({editing:false,id:-1})
    }
    handleInputChange(event) {
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

    render() {
        let error;
        if(this.state.error.show){
            error =  <Alert className="fade" color="success">error : {this.state.error.message}</Alert>
        }

        if (!(this.props.editCard.editing && this.props.editCard.id === this.props.id)){
            return (
                <Col>
                    <Card color="primary" className="text-white ">
                        <CardHeader>
                            Inspection Plan : {this.props.inspectionPlan.inspectionPlan}
                            <div className="card-actions">

                                <a onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({
                                    collapsed: this.state.collapseAddCard == true,
                                    "btn-minimize": true
                                })} data-toggle="collapse" data-target="#collapseExample"
                                   aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                                <a onClick={this.editInspectionPlan.bind(this)} className="btn"><i className="fa fa-edit"></i></a>
                                <a onClick={this.deleteInspectionPlan.bind(this)} className="btn-close"><i
                                    className="icon-close"></i></a>
                            </div>
                        </CardHeader>
                        <CardBody className={classnames({"show": this.state.collapseAddCard == false, collapse: true})}>
                            <Alert color="success">Inspection Plan : {this.props.inspectionPlan.inspectionPlan}</Alert>
                            <Alert color="success">JigId : {this.props.inspectionPlan.jigId}</Alert>
                            <Alert color="success">Task : {this.props.inspectionPlan.task}</Alert>
                            <Alert color="success">Product : {this.props.inspectionPlan.product}</Alert>
                            <Alert color="success">Workstation : {this.props.inspectionPlan.workstation}</Alert>
                            <Alert color="success">Image : {this.props.inspectionPlan.image}</Alert>
                            <Alert color="success">Description : {this.props.inspectionPlan.description}</Alert>
                            <CardLink  href={"#/dashboard/inspectionitem/"+this.props.inspectionPlan.inspectionPlan}><Badge color="danger">Inspection Feature</Badge></CardLink>
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
                            Edit User : {}
                            <div className="card-actions">
                                <a onClick={this.editInspectionPlanDone.bind(this)} className="btn"><i className="fa fa-check-square-o"></i></a>
                                <a onClick={this.editInspectionPlanDoneClose.bind(this)} className="btn-close"><i
                                    className="icon-close"></i></a>
                            </div>
                        </CardHeader>
                        <CardBody className="show collapse">
                            {error}
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
                </Col>
            )
        }

    }

}
InspectionPlanCardComponent.propTypes={
    inspectionPlan:PropTypes.shape({
        inspectionPlan: PropTypes.string,
        description: PropTypes.string,
        task: PropTypes.string,
        jigId: PropTypes.string,
        product: PropTypes.string,
        workstation: PropTypes.string,
        image: PropTypes.string,
    }),
    editCard:PropTypes.object,
    id:PropTypes.number,
    actions: PropTypes.shape({
        createInspectionPlan:PropTypes.func.isRequired,
        deleteInspectionPlan:PropTypes.func.isRequired,
        updateInspectionPlan:PropTypes.func.isRequired,
        editingInspectionPlan:PropTypes.func.isRequired,
    })


}
export default InspectionPlanCardComponent/**
 * Created by supun on 14/03/18.
 */
