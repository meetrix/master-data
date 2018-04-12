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
    Alert,
    Label,
    FormGroup,
    Row
} from 'reactstrap';


import InspectionItemReasonCodeCardComponent from './InspectionItemReasonCodeCardComponent'

class InspectionItemReasonCodeListComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:false,
            inspectionItemReasonCode:{
                code:'',
                inspectionSubItem:this.props.inspectionSubItem,
                inspectionPlan:this.props.inspectionPlan,
            },
            error:{
                message:'',
                show:false
            },
        }

    }
    componentDidMount(){
        this.props.actions.getReasonCodes();
        this.props.actions.getAllInspectionItemReasonCodes({
            inspectionSubItem:this.props.inspectionSubItem,
            inspectionPlan:this.props.inspectionPlan,
        });
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
            inspectionItemReasonCode: {
                ...prevState.inspectionItemReasonCode,
                code: value
            }
        }))

    }
    createInspectionItem(){
        if(this.state.inspectionItemReasonCode.code === '' && this.props.inspectionItemReasonCodeCardList.reasonCodes.length >0){
            this.props.actions.createInspectionItemReasonCode({
                code:this.props.inspectionItemReasonCodeCardList.reasonCodes[0].code,
                inspectionSubItem:this.props.inspectionSubItem,
                inspectionPlan:this.props.inspectionPlan,
            })
        }
        else{
            this.props.actions.createInspectionItemReasonCode(this.state.inspectionItemReasonCode)
            this.setState({inspectionItemReasonCode:{
                code:''
            }})
        }

        

    }
    getCardsElement(){
        let inspectionItemReasonCodeCards = this.props.inspectionItemReasonCodeCardList.inspectionItemReasonCodes;
        return (
            inspectionItemReasonCodeCards.map((inspectionItemReasonCodeCard, index) =>

                <InspectionItemReasonCodeCardComponent  key={index} id ={index}
                                              inspectionItemReasonCode={inspectionItemReasonCodeCard}
                                              editCard={this.props.inspectionItemReasonCodeCardList.editCard}
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
                                <strong>Create Inspection Item Reason Code</strong>
                                <div className="card-actions">

                                    <a  onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({ collapsed: this.state.collapseAddCard==true,"btn-minimize":true })}  data-toggle="collapse" data-target="#collapseExample" aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                                    <a  onClick={this.createInspectionItem.bind(this)} className="btn-close" ><i className="fa fa-check-circle"></i></a>
                                </div>
                            </CardHeader>
                            <CardBody className={classnames({ "show" : this.state.collapseAddCard==false,collapse:true })}>
                                {error}
                                <Label >Inspection Plan : </Label>
                                <Label>{this.props.inspectionPlan}</Label>
                                <br/>
                                <Label >Inspection Sub Item : </Label>
                                <Label>{this.props.inspectionSubItem}</Label>
        
            
                                <InputGroup>
                                    <Input id="code" type="select" placeholder="Code" name="code" value={this.state.inspectionItemReasonCode.code} onChange={this.handleInputChange.bind(this)}>
                                        {this.props.inspectionItemReasonCodeCardList.reasonCodes !=null ? this.props.inspectionItemReasonCodeCardList.reasonCodes.map((reasonCode,index)=>
                                            <option value={reasonCode.code} key={index}>{reasonCode.code} </option>
                                        ):null}
                                    </Input>
                    
                                </InputGroup>
            
                            </CardBody>
                        </Card>

                    </CardFooter>
                </Card>
            </Col>
        );
    }
}
InspectionItemReasonCodeListComponent.propTypes={
    inspectionItemReasonCodeCardList:PropTypes.shape({
        inspectionItemReasonCodes:PropTypes.array.isRequired,
        editCard:PropTypes.object,
        createdInspectionItemReasonCodes:PropTypes.bool,
        reasonCodes:PropTypes.array.isRequired,
    }),
    inspectionSubItem:PropTypes.string,
    inspectionPlan:PropTypes.string,

    actions: PropTypes.shape({
        getAllInspectionItemReasonCodes: PropTypes.func.isRequired,
        createInspectionItemReasonCode:PropTypes.func.isRequired,
        deleteInspectionItemReasonCode:PropTypes.func.isRequired,
        getReasonCodes:PropTypes.func.isRequired,
    })

}

export default InspectionItemReasonCodeListComponent/**
 * Created by supun on 14/03/18.
 */
