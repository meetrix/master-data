/**
 * Created by supun on 14/03/18.
 */
import React,{Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {Link, Switch, Route, Redirect,matchPath} from 'react-router-dom';

import {
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    InputGroup,Input,
    Alert
} from 'reactstrap';

import InspectionItemCardComponent from './InspectionItemCardComponent'
class InspectionItemListComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:true,
            inspectionItem:{
                inspectionItem:'',
                inspectionSubItem:'',
                inspectionPlan:this.props.inspectionPlan,
                description:'',
                shortDescription:'',
                longDescription:''
            },
            error:{
                message:'',
                show:false
            }
        }


    }
    componentDidMount(){
        this.props.actions.getAllInspectionItems({inspectionPlan:this.props.inspectionPlan});
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
            inspectionItem: {
                ...prevState.inspectionItem,
                [name]: value
            }
        }))

    }
    createInspectionItem(){

        this.props.actions.createInspectionItem(this.state.inspectionItem)
        this.setState({inspectionItem:{
                inspectionItem:'',
                inspectionSubItem:'',
                inspectionPlan:this.props.inspectionPlan,
                description:'',
                shortDescription:'',
                longDescription:''
            }})

    }
    getCardsElement(){
        let inspectionItemCards = this.props.inspectionItemCardList.inspectionItems;
        return (
            inspectionItemCards.map((inspectionItemCard, index) =>

                <InspectionItemCardComponent  key={index} id ={index}
                                              inspectionItem={inspectionItemCard}
                                              editCard={this.props.inspectionItemCardList.editCard}
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
                                <strong>Create Inspection Item</strong>
                                <div className="card-actions">
                                    <a  onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({ collapsed: this.state.collapseAddCard==true,"btn-minimize":true })}  data-toggle="collapse" data-target="#collapseExample" aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                                    <a  onClick={this.createInspectionItem.bind(this)} className="btn-close" ><i className="fa fa-check-circle"></i></a>
                                </div>
                            </CardHeader>
                            <CardBody className={classnames({ "show" : this.state.collapseAddCard==false,collapse:true })}>
                                {error}
                                <InputGroup>
                                    <Input placeholder="InspectionItem" name="inspectionItem" value={this.state.inspectionItem.inspectionItem} onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="InspectionSubItem" name="inspectionSubItem" value={this.state.inspectionItem.inspectionSubItem} onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="InspectionPlan" name="inspectionPlan" value={this.props.inspectionPlan}  onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
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

                    </CardFooter>
                </Card>
            </Col>
        );
    }
}
InspectionItemListComponent.propTypes={
    inspectionItemCardList:PropTypes.shape({
        inspectionItems:PropTypes.array.isRequired,
        editCard:PropTypes.object,
        createdInspection:PropTypes.bool,
    }),
    inspectionPlan:PropTypes.string,
    actions: PropTypes.shape({
        getAllInspectionItems: PropTypes.func.isRequired,
        createInspectionItem:PropTypes.func.isRequired,
        deleteInspectionItem:PropTypes.func.isRequired,
        updateInspectionItem:PropTypes.func.isRequired,
        editingInspectionItem:PropTypes.func.isRequired,
    })


}

export default InspectionItemListComponent/**
 * Created by supun on 14/03/18.
 */
