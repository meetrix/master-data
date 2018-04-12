/**
 * Created by supun on 15/03/18.
 */
import React,{Component} from 'react';
import {Col,Row} from 'reactstrap';
import PropTypes from 'prop-types';
import InspectionItemReasonCodeListComponent from '../../../components/ListComponent/InspectionItemReasonCodeListComponent/InspectionItemReasonCodeListComponent'
class InspectionItemReasonCodeListView extends Component{


    render(){
        return(
            <Col>
                <Row>
                    <InspectionItemReasonCodeListComponent inspectionPlan={this.props.match.params.inspectionPlan} inspectionSubItem={this.props.match.params.inspectionSubItem} inspectionItemReasonCodeCardList={this.props.inspectionItemReasonCodeCardList } actions={this.props.actions.inspectionItemReasonCodeCardAction} />
                </Row>
            </Col>
        );
    }
}

InspectionItemReasonCodeListView.propTypes = {
    inspectionItemReasonCodeCardList:PropTypes.object.isRequired,
    actions:PropTypes.shape({
        inspectionItemReasonCodeCardAction:PropTypes.object.isRequired,
    }),
}
export default InspectionItemReasonCodeListView