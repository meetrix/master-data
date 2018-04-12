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

class InspectionItemCardComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:true,
            inspectionItem:this.props.inspectionItem,
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

    deleteInspectionItem(){
        this.props.actions.deleteInspectionItem({inspectionSubItem:this.props.inspectionItem.inspectionSubItem,inspectionPlan:this.props.inspectionItem.inspectionPlan})

    }

    editInspectionItem(){
        this.props.actions.editingInspectionItem({editing:true,id:this.props.id})
    }

    editInspectionItemDone(){
        this.props.actions.updateInspectionItem(this.state.inspectionItem)
    }
    editInspectionItemDoneClose(){
        this.props.actions.editingInspectionItem({editing:false,id:-1})
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState(prevState => ({
            inspectionItem: {
                ...prevState.inspectionItem,
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
                            Inspection Item : {this.props.inspectionItem.inspectionItem}
                            <div className="card-actions">

                                <a onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({
                                    collapsed: this.state.collapseAddCard == true,
                                    "btn-minimize": true
                                })} data-toggle="collapse" data-target="#collapseExample"
                                   aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                                <a onClick={this.editInspectionItem.bind(this)} className="btn"><i className="fa fa-edit"></i></a>
                                <a onClick={this.deleteInspectionItem.bind(this)} className="btn-close"><i
                                    className="icon-close"></i></a>
                            </div>
                        </CardHeader>
                        <CardBody className={classnames({"show": this.state.collapseAddCard == false, collapse: true})}>
                            <Alert color="success">Inspection Item : {this.props.inspectionItem.inspectionItem}</Alert>
                            <Alert color="success">Inspection SubItem : {this.props.inspectionItem.inspectionSubItem}</Alert>
                            <Alert color="success">Inspection Plan : {this.props.inspectionItem.inspectionPlan}</Alert>
                            <Alert color="success">Description : {this.props.inspectionItem.description}</Alert>
                            <Alert color="success">Short Description : {this.props.inspectionItem.shortDescription}</Alert>
                            <Alert color="success">Long Description : {this.props.inspectionItem.longDescription}</Alert>
                            <CardLink  href={"#/dashboard/inspectionitemcodes/"+this.props.inspectionItem.inspectionPlan+"/"+this.props.inspectionItem.inspectionSubItem}><Badge color="danger">Inspection Item Code Feature</Badge></CardLink>
                        
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
                            Edit Inspection Item : {this.props.inspectionItem.inspectionItem}
                            <div className="card-actions">
                                <a onClick={this.editInspectionItemDone.bind(this)} className="btn"><i className="fa fa-check-square-o"></i></a>
                                <a onClick={this.editInspectionItemDoneClose.bind(this)} className="btn-close"><i
                                    className="icon-close"></i></a>
                            </div>
                        </CardHeader>
                        <CardBody className="show collapse">
                            {error}
                            <InputGroup>
                                <Input placeholder="Description" name="description" value={this.state.inspectionItem.description}  onChange={this.handleInputChange.bind(this)} />
                            </InputGroup>
                            <InputGroup>
                                <Input placeholder="ShortDescription"  name="shortDescription" value={this.state.inspectionItem.shortDescription} onChange={this.handleInputChange.bind(this)}/>
                            </InputGroup>
                            <InputGroup>
                                <Input placeholder="LongDescription" name="longDescription" value={this.state.inspectionItem.longDescription}  onChange={this.handleInputChange.bind(this)}/>
                            </InputGroup>
                        </CardBody>
                    </Card>
                </Col>
            )
        }

    }

}
InspectionItemCardComponent.propTypes={
    inspectionItem:PropTypes.shape({
        inspectionItem: PropTypes.string,
        inspectionSubItem: PropTypes.string,
        inspectionPlan: PropTypes.string,
        description: PropTypes.string,
        shortDescription: PropTypes.string,
        longDescription: PropTypes.string
    }),
    editCard:PropTypes.object,
    id:PropTypes.number,
    actions: PropTypes.shape({
        createInspectionItem:PropTypes.func.isRequired,
        deleteInspectionItem:PropTypes.func.isRequired,
        updateInspectionItem:PropTypes.func.isRequired,
        editingInspectionItem:PropTypes.func.isRequired,
    })


}
export default InspectionItemCardComponent/**
 * Created by supun on 14/03/18.
 */
