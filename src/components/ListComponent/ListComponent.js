/**
 * Created by supun on 14/03/18.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux'
import classnames from 'classnames';
import {bindActionCreators} from 'redux';
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

import CardComponent from './CardComponent'

function mapStateToProps(state){
    return {
        cardList: [{id:'1',title:'title1'},{id:'2',title:'title2'},{id:'3',title:'title3'}],

    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{
        //getConsultants:bindActionCreators(actionCreatorFactory(KEYS.CONSULTS, ATTRS.PAYLOAD),dispatch),
        //getPets:bindActionCreators(actionCreateApiGateWayFactory(API_GATWAY_KEYS.GETPETS,API_GATEWAY_ATTRS.PAYLOAD),dispatch)

    }
})
class ListComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:false
        }
    }
    toggleCollapseAddCard(e){
        e.preventDefault();
        console.log("click"+!this.state.collapseAddCard)
        //document.body.classhList.toggle('sidebar-hidden');
        this.setState((prevState, props) => ({
            collapseAddCard: ! prevState.collapseAddCard
        }));
    }
    render(){
        return(

            <Col >
                <Card>
                    <CardHeader>
                        <strong>List Group</strong>
                        <small> tags</small>
                    </CardHeader>
                    <CardBody>
                        <CardComponent {...this.props.cardList[0]}/>
                        <CardComponent {...this.props.cardList[1]}/>
                        <CardComponent {...this.props.cardList[2]}/>
                    </CardBody>
                    <CardFooter>
                        <Card>
                            <CardHeader>
                                <strong>List Group</strong>
                                <div className="card-actions">
                                    {/*<a href="#" class="btn-setting"><i class="icon-settings"></i></a>*/}
                                    <a  onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({ collapsed: this.state.collapseAddCard==true,"btn-minimize":true })}  data-toggle="collapse" data-target="#collapseExample" aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                                    <a  className="btn-close" ><i className="fa fa-check-circle"></i></a>
                                </div>
                            </CardHeader>
                            <CardBody className={classnames({ "show" : this.state.collapseAddCard==false,collapse:true })}>
                                <InputGroup>
                                    <Input placeholder="title" />
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="description" />
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="username" />
                                </InputGroup>
                            </CardBody>
                        </Card>collapse

                    </CardFooter>
                </Card>
            </Col>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListComponent)