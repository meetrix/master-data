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
    Badge
} from 'reactstrap';
import classnames from 'classnames';

class CardComponent extends Component{

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
            <Col>
                <Card color="success" className="text-white ">
                    <CardHeader>
                        {this.props.title}
                        <div className="card-actions">
                            {/*<a href="#" class="btn-setting"><i class="icon-settings"></i></a>*/}
                            <a onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({ collapsed: this.state.collapseAddCard==true,"btn-minimize":true })} data-toggle="collapse" data-target="#collapseExample" aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                            <a href="#" className="btn-close"><i className="icon-close"></i></a>
                        </div>
                    </CardHeader>
                    <CardBody className={classnames({ "show" : this.state.collapseAddCard==false,collapse:true })}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </CardBody>
                </Card>
            </Col>
        )
    }
}
CardComponent.propTypes={
    title:PropTypes.string,
    content:PropTypes.string,
}
export default CardComponent