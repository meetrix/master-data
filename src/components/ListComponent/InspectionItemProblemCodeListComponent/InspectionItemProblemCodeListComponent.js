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


import InspectionItemProblemCodeCardComponent from './InspectionItemProblemCodeCardComponent'

class InspectionItemProblemCodeListComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:false,
            inspectionItemProblemCode:{
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
        this.props.actions.getProblemCodes();
        this.props.actions.getAllInspectionItemProblemCodes({
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
            inspectionItemProblemCode: {
                ...prevState.inspectionItemProblemCode,
                code: value
            }
        }))

    }
    createInspectionItem(){
        if(this.state.inspectionItemProblemCode.code === '' && this.props.inspectionItemProblemCodeCardList.problemCodes.length >0){
            this.props.actions.createInspectionItemProblemCode({
                code:this.props.inspectionItemProblemCodeCardList.problemCodes[0].code,
                inspectionSubItem:this.props.inspectionSubItem,
                inspectionPlan:this.props.inspectionPlan,
            })
        }
        else{
            this.props.actions.createInspectionItemProblemCode(this.state.inspectionItemProblemCode)
            this.setState({inspectionItemProblemCode:{
                code:''
            }})
        }

        

    }
    getCardsElement(){
        let inspectionItemProblemCodeCards = this.props.inspectionItemProblemCodeCardList.inspectionItemProblemCodes;
        return (
            inspectionItemProblemCodeCards.map((inspectionItemProblemCodeCard, index) =>

                <InspectionItemProblemCodeCardComponent  key={index} id ={index}
                                              inspectionItemProblemCode={inspectionItemProblemCodeCard}
                                              editCard={this.props.inspectionItemProblemCodeCardList.editCard}
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
                                <strong>Create Inspection Item Problem Code</strong>
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
                                    <Input id="code" type="select" placeholder="Code" name="code" value={this.state.inspectionItemProblemCode.code} onChange={this.handleInputChange.bind(this)}>
                                        {this.props.inspectionItemProblemCodeCardList.problemCodes !=null ? this.props.inspectionItemProblemCodeCardList.problemCodes.map((problemCode,index)=>
                                            <option value={problemCode.code} key={index}>{problemCode.code} </option>
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
InspectionItemProblemCodeListComponent.propTypes={
    inspectionItemProblemCodeCardList:PropTypes.shape({
        inspectionItemProblemCodes:PropTypes.array.isRequired,
        editCard:PropTypes.object,
        createdInspectionItemProblemCodes:PropTypes.bool,
        problemCodes:PropTypes.array.isRequired,
    }),
    inspectionSubItem:PropTypes.string,
    inspectionPlan:PropTypes.string,

    actions: PropTypes.shape({
        getAllInspectionItemProblemCodes: PropTypes.func.isRequired,
        createInspectionItemProblemCode:PropTypes.func.isRequired,
        deleteInspectionItemProblemCode:PropTypes.func.isRequired,
        getProblemCodes:PropTypes.func.isRequired,
    })

}

export default InspectionItemProblemCodeListComponent/**
 * Created by supun on 14/03/18.
 */
