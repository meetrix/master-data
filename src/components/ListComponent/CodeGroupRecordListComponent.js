/**
 * Created by supun on 14/03/18.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux'
import classnames from 'classnames';
import {bindActionCreators} from 'redux';
import {actionCreatorFactory,actionCreateApiGateWayFactory} from '../../actions/actionCreator';
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS  }from '../../constants/constant';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
    Badge,
    InputGroup,Input
} from 'reactstrap';

import CodeGroupRecordCardComponent from './CodeGroupRecordCardComponent'

function mapStateToProps(state){
    return {
        cardListTitle:"Code-Group-Record",
        cardList: [
                {
                    codeGroup: "NC-DC-A",
                    description: "Struktureller und mechanischer Einbau",
                    codeType: "P"
                },
                {
                    codeGroup: "NC-DC-B",
                    description: "Elektrik-Einbau",
                    codeType: "P"
                },
                {
                    codeGroup: "NC-DC-C",
                    description: "Oberfläche und Behandlung",
                    "codeType": "P"
                },
                {
                    codeGroup: "NC-DC-D",
                    description: "Beschädigung",
                    codeType: "P"
                }

            ]

    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{
        //getConsultants:bindActionCreators(actionCreatorFactory(KEYS.CONSULTS, ATTRS.PAYLOAD),dispatch),
        //getPets:bindActionCreators(actionCreateApiGateWayFactory(API_GATWAY_KEYS.GETPETS,API_GATEWAY_ATTRS.PAYLOAD),dispatch)
        //getAllUsers:bindActionCreators(actionCreatorFactory(KEYS.GET_ALL_USERS,ATTRS.PAYLOAD),dispatch),
        //createUsers:bindActionCreators(actionCreatorFactory(KEYS.CREATE_USER,ATTRS.PAYLOAD),dispatch),
        //deleteUser:bindActionCreators(actionCreatorFactory(KEYS.DELETE_USER,ATTRS.PAYLOAD),dispatch)
    }
})
class CodeGroupRecordListComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:false
        }
        this.inputs = {};
    }
    componentDidMount(){
        //this.props.actions.getAllUsers();
    }
    toggleCollapseAddCard(e){
        e.preventDefault();
        console.log("click"+!this.state.collapseAddCard)
        //document.body.classhList.toggle('sidebar-hidden');
        this.setState((prevState, props) => ({
            collapseAddCard: ! prevState.collapseAddCard
        }));
    }
    handlerInput(e){
        this.inputs = this.inputs || {};
        this.inputs[e.target.name] = e.target.value
    }
    addUser(){
        this.props.actions.createUsers(this.inputs)
        this.inputs={}
    }
    render(){
        return(

            <Col >
                <Card>
                    <CardHeader>
                        <strong>{this.props.cardListTitle}</strong>
                    </CardHeader>
                    <CardBody>
                        <CodeGroupRecordCardComponent group={this.props.cardList[0]} actions={this.props.actions}/>
                        {/*<UserRecordCardComponent {...this.props.cardList[1]}/>*/}
                        {/*<UserRecordCardComponent {...this.props.cardList[2]}/>*/}
                    </CardBody>
                    <CardFooter>
                        <Card>
                            <CardHeader>
                                <strong>List Group</strong>
                                <div className="card-actions">
                                    {/*<a href="#" class="btn-setting"><i class="icon-settings"></i></a>*/}
                                    <a  onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({ collapsed: this.state.collapseAddCard==true,"btn-minimize":true })}  data-toggle="collapse" data-target="#collapseExample" aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                                    <a  onClick={this.addUser.bind(this)} className="btn-close" ><i className="fa fa-check-circle"></i></a>
                                </div>
                            </CardHeader>
                            <CardBody className={classnames({ "show" : this.state.collapseAddCard==false,collapse:true })}>
                                <InputGroup>
                                    <Input placeholder="CodeGroup" name="codeGroup"  onChange={this.handlerInput.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="CodeType" name="codeType" onChange={this.handlerInput.bind(this)} />
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Description" name="description" onChange={this.handlerInput.bind(this)}/>
                                </InputGroup>

                            </CardBody>
                        </Card>

                    </CardFooter>
                </Card>
            </Col>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CodeGroupRecordListComponent)/**
 * Created by supun on 14/03/18.
 */
