/**
 * Created by supun on 14/03/18.
 */
import React,{Component} from 'react';
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

import ListComponent from './ListComponent'

class ListDashboard extends Component{

    render(){
        return(

            <Row>
                <ListComponent/>
                <ListComponent/>
                <ListComponent/>

            </Row>

        )
    }
}

export default ListDashboard