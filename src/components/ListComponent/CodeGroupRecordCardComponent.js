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
    Alert
} from 'reactstrap';
import classnames from 'classnames';

class CodeGroupRecordCardComponent extends Component{

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
    deleteUser(){
        console.log("delete user")
        console.log(this.props)
        this.props.actions.deleteUser({id:this.props.userId})
    }
    render(){
        return(
            <Col>
                <Card color="primary" className="text-white ">
                    <CardHeader>
                        Record
                        <div className="card-actions">
                            {/*<a href="#" class="btn-setting"><i class="icon-settings"></i></a>*/}
                            <a onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({ collapsed: this.state.collapseAddCard==true,"btn-minimize":true })} data-toggle="collapse" data-target="#collapseExample" aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                            <a onClick={this.deleteUser.bind(this)} className="btn-close"><i className="icon-close"></i></a>
                        </div>
                    </CardHeader>
                    <CardBody className={classnames({ "show" : this.state.collapseAddCard==false,collapse:true })}>
                        <Alert color="success">CodeGroup : {this.props.group.codeGroup}</Alert>
                        <Alert color="success">CodeType : {this.props.group.codeType}</Alert>
                        <Alert color="success">Description : {this.props.group.description}</Alert>


                    </CardBody>
                </Card>
            </Col>
        )
    }
}
CodeGroupRecordCardComponent.propTypes={
    group:PropTypes.shape({
            codeGroup: PropTypes.string,
            description: PropTypes.string,
            codeType: PropTypes.string,

        }),

    actions: PropTypes.object


}
export default CodeGroupRecordCardComponent/**
 * Created by supun on 14/03/18.
 */
