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
                    <InspectionPlanListComponent inspectionPlanCardList={this.props.inspectionPlanCardList} actions={this.props.actions.inspectionPlanCardAction}/>
                </Row>
            </Col>
        );
    }
}

InspectionPlanListView.propTypes = {
    inspectionPlanCardList:PropTypes.object.isRequired,
    actions:PropTypes.shape({
        inspectionPlanCardAction:PropTypes.object.isRequired,
    }),
}
export default InspectionPlanListView