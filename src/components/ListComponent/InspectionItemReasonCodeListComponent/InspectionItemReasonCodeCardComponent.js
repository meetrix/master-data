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

class InspectionItemReasonCodeCardComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:true,
            inspectionItemReasonCode:this.props.inspectionItemReasonCode,
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

    deleteInspectionItemReasonCode(){

            this.props.actions.deleteInspectionItemReasonCode({
                inspectionPlan:this.props.inspectionItemReasonCode.inspectionPlan,
                inspectionSubItem:this.props.inspectionItemReasonCode.inspectionSubItem,
                code:this.props.inspectionItemReasonCode.code
            })
    }

    editUser(){
        this.props.actions.editingUser({editing:true,id:this.props.id})
    }

    editUserDone(){

    }
    editUserDoneClose(){
        this.props.actions.editingUser({editing:false,id:-1})
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;


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
                            Reason Code : {this.props.inspectionItemReasonCode.code},
                            <div className="card-actions">

                                <a onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({
                                    collapsed: this.state.collapseAddCard == true,
                                    "btn-minimize": true
                                })} data-toggle="collapse" data-target="#collapseExample"
                                   aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                                {/* <a onClick={this.editUser.bind(this)} className="btn"><i className="fa fa-edit"></i></a> */}
                                <a onClick={this.deleteInspectionItemReasonCode.bind(this)} className="btn-close"><i
                                    className="icon-close"></i></a>
                            </div>
                        </CardHeader>
                        <CardBody className={classnames({"show": this.state.collapseAddCard == false, collapse: true})}>
                            <Alert color="success">InspectionPlan : {this.props.inspectionItemReasonCode.inspectionPlan}</Alert>
                            <Alert color="success">InspectionSubItem : {this.props.inspectionItemReasonCode.inspectionSubItem}</Alert>
                            <Alert color="success">code : {this.props.inspectionItemReasonCode.code}</Alert>

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
                                <a onClick={this.editUserDone.bind(this)} className="btn"><i className="fa fa-check-square-o"></i></a>
                                <a onClick={this.editUserDoneClose.bind(this)} className="btn-close"><i
                                    className="icon-close"></i></a>
                            </div>
                        </CardHeader>
                        <CardBody className="show collapse">
                            {error}
                        </CardBody>
                    </Card>
                </Col>
            )
        }

    }

}
InspectionItemReasonCodeCardComponent.propTypes={
    inspectionItemReasonCode:PropTypes.shape({
        code: PropTypes.string,
        inspectionSubItem: PropTypes.string,
        inspectionPlan: PropTypes.string,
    }),
    editCard:PropTypes.object,
    id:PropTypes.number,
    actions: PropTypes.shape({
        deleteInspectionItemReasonCode:PropTypes.func.isRequired,
    })


}
export default InspectionItemReasonCodeCardComponent/**
 * Created by supun on 14/03/18.
 */
