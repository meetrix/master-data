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
    InputGroup
} from 'reactstrap';
import classnames from 'classnames';

class CodeCardComponen extends Component{

    constructor(props){
        super(props)
        this.state={
            code:this.props.code,
            collapseAddCard:false,
            editCard:false,
        }
    }
    toggleCollapseAddCard(e){
        e.preventDefault();
        this.setState((prevState, props) => ({
            collapseAddCard: ! prevState.collapseAddCard
        }));
    }
    deleteCode(){

        this.props.actions.deleteCode({codeGroup:this.props.code.codeGroup})
    }

    editCode(){
        this.setState({editCard:true})
    }

    editCodeDone(){

        this.props.actions.updateCode({codeGroup:this.props.code.codeGroup})

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
    render(){
        if (!this.state.editCard){
            return(
                <Col>
                    <Card color="primary" className="text-white ">
                        <CardHeader>
                            Record
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
                            Record Edit
                            <div className="card-actions">
                                <a onClick={this.editCodeDone.bind(this)} className="btn"><i className="fa fa-check-square-o"></i></a>
                            </div>
                        </CardHeader>
                        <CardBody className="show collapse">
                            <InputGroup>
                                <Input placeholder="CodeType" value={this.state.code.codeType} name="codeType" onChange={this.handleInputChange.bind(this)}/>
                            </InputGroup>
                            <InputGroup>
                                <Input placeholder="CodeGroup" value={this.state.code.codeGroup} name="codeGroup" onChange={this.handleInputChange.bind(this)} />
                            </InputGroup>
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

    actions: PropTypes.shape({
        getAllCodes: PropTypes.func.isRequired,
        createCode:PropTypes.func.isRequired,
        deleteCode:PropTypes.func.isRequired,
        updateCode:PropTypes.func.isRequired,
    })


}
export default CodeCardComponen/**
 * Created by supun on 14/03/18.
 */
