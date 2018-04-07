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
    Input,
    InputGroup,
    Label
} from 'reactstrap';
import classnames from 'classnames';

class CodeCardComponen extends Component{

    constructor(props){
        super(props)
        this.state={
            code:this.props.code,
            collapseAddCard:true,
            editCard:false,
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
    deleteCode(){

        this.props.actions.deleteCode({code:this.props.code.code})
    }

    editCode(){
        this.props.actions.editingCode({editing:true,id:this.props.id})
    }

    editCodeDone(){

        this.props.actions.updateCode(this.state.code)

    }

    handleInputChange(event) {
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
    editCodeDoneClose(){
        this.props.actions.editingCode({editing:false,id:-1})
    }
    render(){
        let error;
        if(this.state.error.show){
            error =  <Alert className="fade" color="success">error : {this.state.error.message}</Alert>
        }
        if (!(this.props.editCard.editing && this.props.editCard.id === this.props.id)){
            return(
                <Col>
                    <Card color="primary" className="text-white ">
                        <CardHeader>
                            Code: {this.props.code.code}
                            <div className="card-actions">
                                {/*<a href="#" class="btn-setting"><i class="icon-settings"></i></a>*/}
                                <a onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({ collapsed: this.state.collapseAddCard==true,"btn-minimize":true })} data-toggle="collapse" data-target="#collapseExample" aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                                <a onClick={this.editCode.bind(this)} className="btn"><i className="fa fa-edit"></i></a>
                                <a onClick={this.deleteCode.bind(this)} className="btn-close"><i className="icon-close"></i></a>
                            </div>
                        </CardHeader>
                        <CardBody className={classnames({ "show" : this.state.collapseAddCard==false,collapse:true })}>
                            <Alert color="success">CodeId : {this.props.code.code}</Alert>
                            <Alert color="success">CodeType  : {this.props.code.codeType}</Alert>
                            <Alert color="success">CodeGroup : {this.props.code.codeGroup}</Alert>
                            <Alert color="success">Description : {this.props.code.description}</Alert>

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
                             Edit Code : {this.props.code.code}
                            <div className="card-actions">
                                <a onClick={this.editCodeDone.bind(this)} className="btn"><i className="fa fa-check-square-o"></i></a>
                                <a onClick={this.editCodeDoneClose.bind(this)} className="btn-close"><i
                                    className="icon-close"></i></a>
                            </div>
                        </CardHeader>
                        <CardBody className="show collapse">
                            {error}
                            <Label for="codeType">CodeType</Label>
                            <InputGroup>
                                {/* <Input placeholder="CodeType" value={this.state.code.codeType} name="codeType" onChange={this.handleInputChange.bind(this)}/> */}
                                <Input id="codeType" type="select" placeholder="CodeType" value={this.state.code.codeType} name="codeType" onChange={this.handleInputChange.bind(this)} >
                                    {this.props.codes !=null ? this.props.codes.map((code,index)=>
                                            <option value={code.codeType} key={index}>{code.codeType} </option>
                                        ):null}
                                </Input>
                            </InputGroup>
                            <Label for="codeGroup">CodeGroup</Label>
                            <InputGroup>
                                <Input id="codeGroup" type="select" placeholder="CodeGroup" value={this.state.code.codeGroup} name="codeGroup" onChange={this.handleInputChange.bind(this)} >
                                    {this.props.codes !=null ? this.props.codes.map((code,index)=>
                                            <option value={code.codeGroup} key={index}>{code.codeGroup} </option>
                                        ):null}
                                </Input>
                                {/* <Input placeholder="CodeGroup" value={this.state.code.codeGroup} name="codeGroup" onChange={this.handleInputChange.bind(this)} /> */}
                            </InputGroup>
                            <Label for="description">Description</Label>
                            <InputGroup>
                                <Input placeholder="Description" value={this.state.code.description} name="description" onChange={this.handleInputChange.bind(this)}/>
                            </InputGroup>
                        </CardBody>
                    </Card>
                </Col>
            )
        }

    }
}
CodeCardComponen.propTypes={
    code:PropTypes.shape({
            code: PropTypes.string,
            codeType: PropTypes.string,
            codeGroup: PropTypes.string,
            description: PropTypes.string
        }),
    codes:PropTypes.array.isRequired,
    editCard:PropTypes.object,
    id:PropTypes.number,
    actions: PropTypes.shape({
        getAllCodes: PropTypes.func.isRequired,
        createCode:PropTypes.func.isRequired,
        deleteCode:PropTypes.func.isRequired,
        updateCode:PropTypes.func.isRequired,
        editingCode:PropTypes.func.isRequired,
    })


}
export default CodeCardComponen/**
 * Created by supun on 14/03/18.
 */
