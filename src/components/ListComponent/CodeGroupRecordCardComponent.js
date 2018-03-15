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

class CodeGroupRecordCardComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            codeGroup:this.props.codeGroup,
            collapseAddCard:false,
            editCard:false,
        }
    }
    toggleCollapseAddCard(e){
        e.preventDefault();
        //document.body.classhList.toggle('sidebar-hidden');
        this.setState((prevState, props) => ({
            collapseAddCard: ! prevState.collapseAddCard
        }));
    }
    deleteCodeGroup(){

        this.props.actions.deleteCodeGroup({codeGroup:this.props.codeGroup.codeGroup})
    }

    editCodeGroup(){
        this.setState({editCard:true})
    }

    editCodeGroupDone(){

        this.props.actions.updateCodeGroup({codeGroup:this.props.codeGroup.codeGroup})

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState(prevState => ({
            codeGroup: {
                ...prevState.codeGroup,
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
                                <a onClick={this.editCodeGroup.bind(this)} className="btn"><i className="fa fa-edit"></i></a>
                                <a onClick={this.deleteCodeGroup.bind(this)} className="btn-close"><i className="icon-close"></i></a>
                            </div>
                        </CardHeader>
                        <CardBody className={classnames({ "show" : this.state.collapseAddCard==false,collapse:true })}>
                            <Alert color="success">CodeGroup : {this.props.codeGroup.codeGroup}</Alert>
                            <Alert color="success">CodeType : {this.props.codeGroup.codeType}</Alert>
                            <Alert color="success">Description : {this.props.codeGroup.description}</Alert>


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
                                <a onClick={this.editCodeGroupDone.bind(this)} className="btn"><i className="fa fa-check-square-o"></i></a>
                            </div>
                        </CardHeader>
                        <CardBody className="show collapse">
                            <InputGroup>
                                <Input placeholder="CodeType" name="codeType" value={this.state.codeGroup.codeType} onChange={this.handleInputChange.bind(this)} />
                            </InputGroup>
                            <InputGroup>
                                <Input placeholder="Description" name="description"  value={this.state.codeGroup.description} onChange={this.handleInputChange.bind(this)}/>
                            </InputGroup>
                        </CardBody>
                    </Card>
                </Col>
            )
        }

    }
}
CodeGroupRecordCardComponent.propTypes={
    codeGroup:PropTypes.shape({
            codeGroup: PropTypes.string,
            description: PropTypes.string,
            codeType: PropTypes.string,

        }),

    actions: PropTypes.object


}
export default CodeGroupRecordCardComponent/**
 * Created by supun on 14/03/18.
 */
