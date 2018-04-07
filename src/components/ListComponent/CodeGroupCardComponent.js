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

class CodeGroupCardComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            codeGroup:this.props.codeGroup,
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
    deleteCodeGroup(){

        this.props.actions.deleteCodeGroup({codeGroup:this.props.codeGroup.codeGroup})
    }

    editCodeGroup(){

        this.props.actions.editingCodeGroup({editing:true,id:this.props.id})
    }

    editCodeGroupDone(){

        this.props.actions.updateCodeGroup(this.state.codeGroup)

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
    editCodeGroupDoneClose(){
        this.props.actions.editingCodeGroup({editing:false,id:-1})
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
                            CodeGroup: {this.props.codeGroup.codeGroup}
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
                            Edit CodeGroup : {this.props.codeGroup.codeGroup}
                            <div className="card-actions">
                                <a onClick={this.editCodeGroupDone.bind(this)} className="btn"><i className="fa fa-check-square-o"></i></a>
                                <a onClick={this.editCodeGroupDoneClose.bind(this)} className="btn-close"><i
                                    className="icon-close"></i></a>
                            </div>
                        </CardHeader>
                        <CardBody className="show collapse">
                            {error}
                            <Label for="codeType">CodeType</Label>
                            <InputGroup>
                                <Input placeholder="CodeType" name="codeType" value={this.state.codeGroup.codeType} onChange={this.handleInputChange.bind(this)} />
                            </InputGroup>
                            <Label for="description">Description</Label>
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
CodeGroupCardComponent.propTypes={
    codeGroup:PropTypes.shape({
            codeGroup: PropTypes.string,
            description: PropTypes.string,
            codeType: PropTypes.string,

        }),
    editCard:PropTypes.object,
    id:PropTypes.number,
    actions: PropTypes.shape({
        getAllCodeGroups: PropTypes.func.isRequired,
        createCodeGroup:PropTypes.func.isRequired,
        deleteCodeGroup:PropTypes.func.isRequired,
        updateCodeGroup:PropTypes.func.isRequired,
        editingCodeGroup:PropTypes.func.isRequired,
    })


}
export default CodeGroupCardComponent/**
 * Created by supun on 14/03/18.
 */
