/**
 * Created by supun on 14/03/18.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';
import {
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    InputGroup,Input,Label
} from 'reactstrap';

import CodeCardComponent from './CodeCardComponent'


class CodeListComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:false,
            code:{
                code:'',
                codeType:'',
                codeGroup:'',
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

        this.props.actions.getAllCodes();
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
            code: {
                ...prevState.code,
                [name]: value
            }
        }))
    }
    createCode(){
        this.props.actions.createCode(this.state.code)
        this.setState({code:{
                code:'',
                codeType:'',
                codeGroup:'',
                description:''
            }})
    }
    getCardsElement(){
        let codeCards = this.props.codeCardList.codes;
        return (
            codeCards.map((codeCard, index) =>

                <CodeCardComponent  key={index} id ={index}
                                    code={codeCard}
                                    editCard={this.props.codeCardList.editCard}
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
                        <strong>{this.props.codeCardList.title}</strong>
                    </CardHeader>
                    <CardBody>
                        {this.getCardsElement()}
                    </CardBody>
                    <CardFooter>
                        <Card>
                            <CardHeader>
                                <strong>Create Code</strong>
                                <div className="card-actions">
                                    <a  onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({ collapsed: this.state.collapseAddCard==true,"btn-minimize":true })}  data-toggle="collapse" data-target="#collapseExample" aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                                    <a  onClick={this.createCode.bind(this)} className="btn-close" ><i className="fa fa-check-circle"></i></a>
                                </div>
                            </CardHeader>
                            <CardBody className={classnames({ "show" : this.state.collapseAddCard==false,collapse:true })}>
                                {error}
                                <Label for="code">Code</Label>
                                <InputGroup>
                                 
                                    <Input id="code" type="select" placeholder="Code" name="code" value={this.state.code.code}  onChange={this.handleInputChange.bind(this)}>
                                            {this.props.codeCardList.codes !=null ? this.props.codeCardList.codes.map((code,index)=>
                                                <option value={code.code} key={index}>{code.code} </option>
                                            ):null}
                                    </Input>
                                </InputGroup>
                                <Label for="codeGroup">CodeGroup</Label>
                                <InputGroup>
                                 
                                    <Input id="codeGroup" type="select" placeholder="CodeGroup" value={this.state.code.codeGroup} name="codeGroup" onChange={this.handleInputChange.bind(this)} >
                                        {this.props.codeCardList.codes !=null ? this.props.codeCardList.codes.map((code,index)=>
                                                <option value={code.codeGroup} key={index}>{code.codeGroup} </option>
                                            ):null}
                                    </Input>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="CodeType" value={this.state.code.codeType} name="codeType" onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>
                                
                                <InputGroup>
                                    <Input placeholder="Description" value={this.state.code.description} name="description" onChange={this.handleInputChange.bind(this)}/>
                                </InputGroup>

                            </CardBody>
                        </Card>

                    </CardFooter>
                </Card>
            </Col>
        );
    }
}
CodeListComponent.propTypes={
    codeCardList:PropTypes.shape({
        title: PropTypes.string.isRequired,
        codes:PropTypes.array.isRequired,
        editCard:PropTypes.object,
        createdCode:PropTypes.bool,
    }),

    actions: PropTypes.shape({
        getAllCodes: PropTypes.func.isRequired,
        createCode:PropTypes.func.isRequired,
        deleteCode:PropTypes.func.isRequired,
        updateCode:PropTypes.func.isRequired,
        editingCode:PropTypes.func.isRequired,
    })


}
export default CodeListComponent/**
 * Created by supun on 14/03/18.
 */
