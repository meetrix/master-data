/**
 * Created by supun on 15/03/18.
 */
import React,{Component} from 'react';
import {Col,Row} from 'reactstrap';
import PropTypes from 'prop-types';
import InspectionPlanListComponent from '../../components/ListComponent/InspectionPlanListComponent'
class InspectionPlanListView extends Component{


    render(){
        return(
            <Col>
                <Row>
                    <InspectionPlanListComponent/>
                </Row>
            </Col>
        );
    }
}

InspectionPlanListView.propTypes = {

}
export default InspectionPlanListView