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
import UserRecordListComponent from './UserListComponent'
import CodeGroupRecordListComponent from './CodeGroupListComponent'
import CodeRecordListComponent from './CodeListComponent'

class ListDashboard extends Component{

    render(){
        return(

            <Row>
                <UserRecordListComponent/>
                <CodeGroupRecordListComponent/>
                <CodeRecordListComponent/>

            </Row>

        )
    }
}

export default ListDashboard