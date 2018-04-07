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
    Alert,Label
} from 'reactstrap';

import CodeGroupCardComponent from './CodeGroupCardComponent'
class CodeGroupListComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:true,
            codeGroup:{
                codeGroup:'',
                codeType:'',
                description:''
            },
            error:{
                message:'',
                show:false
            }
        }
        this.inputs = {};
    }
    componentDidMount(){
        this.props.actions.getAllCodeGroups();
    }
    componentWillMount(){

    }
    toggleCollapseAddCard(e){
        e.preventDefault();
        this.setState((prevState, props) => ({
            collapseAddCard: ! prevState.collapseAddCard
        }));
    }
    handleInputChange(event){
        console.log()
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name);
        console.log(value)
        this.setState(prevState => ({
            codeGroup: {
                ...prevState.codeGroup,
                [name]: value
            }
        }))
    }
    createCodeGroup(){
        this.props.actions.createCodeGroup(this.state.codeGroup)
        this.setState({codeGroup:{
                codeGroup:'',
                codeType:'',
                description:''
            }})
    }
    getCardsElement(){
        let codeGroups = this.props.codeGroupCardList.codeGroups;
        return (
            codeGroups.map((codeGroup, index) =>

                <CodeGroupCardComponent  key={index}
                                         id ={index}
                                         editCard={this.props.codeGroupCardList.editCard}
                                         codeGroup={codeGroup}
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
                        <strong>{this.props.codeGroupCardList.title}</strong>
                    </CardHeader>
                    <CardBody>
                        {this.getCardsElement()}
                    </CardBody>
                    <CardFooter>
                        <Card>
                            <CardHeader>
                                <strong>Cteate CodeGroup</strong>
                                <div className="card-actions">
                                    <a  onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({ collapsed: this.state.collapseAddCard==true,"btn-minimize":true })}  data-toggle="collapse" data-target="#collapseExample" aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                                    <a  onClick={this.createCodeGroup.bind(this)} className="btn-close" ><i className="fa fa-check-circle"></i></a>
                                </div>
                            </CardHeader>
                            <CardBody className={classnames({ "show" : this.state.collapseAddCard==false,collapse:true })}>
                                {error}
                                <Label for="codeGroup">CodeGroup</Label>
                                <InputGroup>
                                    {/* <Input id="codeGroup" type="select" placeholder="CodeGroup" name="codeGroup" value={this.state.codeGroup.codeGroup} onChange={this.handleInputChange.bind(this)}>
                                        {this.props.codeGroupCardList.codeGroups !=null ? this.props.codeGroupCardList.codeGroups.map((codeGroup,index)=>
                                            <option value={codeGroup.codeGroup} key={index}>{codeGroup.codeGroup} </option>
                                        ):null}
                                    </Input> */}
                                    <Input placeholder="CodeGroup" name="codeGroup" value={this.state.codeGroup.codeGroup} onChange={this.handleInputChange.bind(this)} />
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="CodeType" name="codeType" value={this.state.codeGroup.codeType} onChange={this.handleInputChange.bind(this)} />
                                   
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Description" name="description"  value={this.state.codeGroup.description} onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>

                            </CardBody>
                        </Card>

                    </CardFooter>
                </Card>
            </Col>
        );
    }
}
CodeGroupListComponent.propTypes={
    codeGroupCardList:PropTypes.shape({
        title: PropTypes.string.isRequired,
        codeGroups:PropTypes.array.isRequired,
        editCard:PropTypes.object,
        createdCodeGroup:PropTypes.bool,
    }),

    actions: PropTypes.shape({
        getAllCodeGroups: PropTypes.func.isRequired,
        createCodeGroup:PropTypes.func.isRequired,
        deleteCodeGroup:PropTypes.func.isRequired,
        updateCodeGroup:PropTypes.func.isRequired,
        editingCodeGroup:PropTypes.func.isRequired,
    })


}

export default CodeGroupListComponent/**
 * Created by supun on 14/03/18.
 */
