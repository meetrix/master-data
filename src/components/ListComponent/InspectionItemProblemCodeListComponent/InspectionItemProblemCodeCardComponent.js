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

class InspectionItemProblemCodeCardComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:true,
            inspectionItemProblemCode:this.props.inspectionItemProblemCode,
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

    deleteInspectionItemProblemCode(){

            this.props.actions.deleteInspectionItemProblemCode({
                inspectionPlan:this.props.inspectionItemProblemCode.inspectionPlan,
                inspectionSubItem:this.props.inspectionItemProblemCode.inspectionSubItem,
                code:this.props.inspectionItemProblemCode.code
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
                            Problem Code : {this.props.inspectionItemProblemCode.code},
                            <div className="card-actions">

                                <a onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({
                                    collapsed: this.state.collapseAddCard == true,
                                    "btn-minimize": true
                                })} data-toggle="collapse" data-target="#collapseExample"
                                   aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                                {/* <a onClick={this.editUser.bind(this)} className="btn"><i className="fa fa-edit"></i></a> */}
                                <a onClick={this.deleteInspectionItemProblemCode.bind(this)} className="btn-close"><i
                                    className="icon-close"></i></a>
                            </div>
                        </CardHeader>
                        <CardBody className={classnames({"show": this.state.collapseAddCard == false, collapse: true})}>
                            <Alert color="success">InspectionPlan : {this.props.inspectionItemProblemCode.inspectionPlan}</Alert>
                            <Alert color="success">InspectionSubItem : {this.props.inspectionItemProblemCode.inspectionSubItem}</Alert>
                            <Alert color="success">code : {this.props.inspectionItemProblemCode.code}</Alert>

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
InspectionItemProblemCodeCardComponent.propTypes={
    inspectionItemProblemCode:PropTypes.shape({
        code: PropTypes.string,
        inspectionSubItem: PropTypes.string,
        inspectionPlan: PropTypes.string,
    }),
    editCard:PropTypes.object,
    id:PropTypes.number,
    actions: PropTypes.shape({
        deleteInspectionItemProblemCode:PropTypes.func.isRequired,
    })


}
export default InspectionItemProblemCodeCardComponent/**
 * Created by supun on 14/03/18.
 */
